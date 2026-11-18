import React, { useEffect, useRef } from "react";
import styles from "../../styles/components/Layout.module.scss";

const COUNT = 36;
const GM = 1500; // px^3 / frame^2: a star passing 150px away at cruise speed bends about 90 degrees
const R = 13; // planet radius: closer than this is an impact
const SOFT = 30;
const VMAX = 18;
const SUB = 4;
const rnd = (a, b) => a + Math.random() * (b - a);

/* The shooting stars are bodies in free flight and the pointer is a planet: inverse-square gravity,
   no damping. A star on a collision course falls in and crashes; the rest swing past on a curved
   (hyperbolic) path and fly on. Static under prefers-reduced-motion. */
const Night = () => {
    const root = useRef(null);
    const planet = useRef(null);

    useEffect(() => {
        const el = root.current;
        if (!el) return;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let w = window.innerWidth, h = window.innerHeight;

        const launch = (s, anywhere) => {
            const a = Math.PI / 4 + rnd(-0.32, 0.32);
            const v = rnd(2, 4.6);
            if (anywhere) { s.x = rnd(-0.1, 1) * w; s.y = rnd(-0.1, 1) * h; }
            else if (Math.random() < w / (w + h)) { s.x = rnd(-0.3, 0.9) * w; s.y = -220; }
            else { s.x = -220; s.y = rnd(-0.3, 0.9) * h; }
            s.vx = Math.cos(a) * v; s.vy = Math.sin(a) * v; s.dead = false; s.tail = -1;
        };
        const stars = Array.from(el.querySelectorAll("[data-star]")).map((node) => {
            const s = { node, streak: node.firstElementChild };
            launch(s, true);
            return s;
        });
        const paint = (s) => {
            const sp = Math.hypot(s.vx, s.vy);
            s.node.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${Math.atan2(s.vy, s.vx)}rad) scale(2)`;
            const tail = Math.round(Math.min(150, 36 + sp * 16) / 4) * 4;
            if (tail !== s.tail) { s.tail = tail; s.streak.style.width = tail + "px"; }
        };
        stars.forEach(paint);
        if (reduce) return;

        const m = { on: false, x: 0, y: 0, px: 0, py: 0 };
        let raf = 0, last = performance.now();

        const tick = (t) => {
            const dt = Math.min(3, (t - last) / 16.7) / SUB; last = t;
            if (m.on) { m.px += (m.x - m.px) * 0.3; m.py += (m.y - m.py) * 0.3; }
            for (const s of stars) {
                if (s.dead) continue;
                for (let i = 0; i < SUB; i++) {
                    if (m.on) {
                        const dx = m.px - s.x, dy = m.py - s.y;
                        const r2 = dx * dx + dy * dy, r = Math.sqrt(r2);
                        if (r < R) { s.dead = true; break; }
                        const a = GM / (r2 + SOFT);
                        s.vx += (dx / r) * a * dt; s.vy += (dy / r) * a * dt;
                        const sp = Math.hypot(s.vx, s.vy);
                        if (sp > VMAX) { s.vx *= VMAX / sp; s.vy *= VMAX / sp; }
                    }
                    s.x += s.vx * dt; s.y += s.vy * dt;
                }
                if (s.dead) {
                    s.x = m.px; s.y = m.py; paint(s);
                    s.node.classList.add(styles.crash);
                    if (planet.current) {
                        planet.current.classList.remove(styles.hit);
                        void planet.current.offsetWidth;
                        planet.current.classList.add(styles.hit);
                    }
                    setTimeout(() => { s.node.classList.remove(styles.crash); launch(s); paint(s); }, 420);
                    continue;
                }
                if (s.x < -320 || s.x > w + 320 || s.y < -320 || s.y > h + 320) launch(s);
                paint(s);
            }
            if (planet.current) {
                planet.current.style.opacity = m.on ? "1" : "0";
                if (m.on) planet.current.style.transform = `translate3d(${m.px - 11}px, ${m.py - 11}px, 0)`;
            }
            raf = requestAnimationFrame(tick);
        };
        const onMove = (e) => {
            const p = e.touches ? e.touches[0] : e;
            if (!m.on) { m.px = p.clientX; m.py = p.clientY; m.on = true; }
            m.x = p.clientX; m.y = p.clientY;
        };
        const onLeave = () => { m.on = false; };
        const onResize = () => { w = window.innerWidth; h = window.innerHeight; };
        const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else { last = performance.now(); raf = requestAnimationFrame(tick); } };

        raf = requestAnimationFrame(tick);
        window.addEventListener("pointermove", onMove, { passive: true });
        window.addEventListener("touchmove", onMove, { passive: true });
        window.addEventListener("touchend", onLeave);
        document.addEventListener("mouseleave", onLeave);
        window.addEventListener("resize", onResize);
        document.addEventListener("visibilitychange", onVis);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("touchmove", onMove);
            window.removeEventListener("touchend", onLeave);
            document.removeEventListener("mouseleave", onLeave);
            window.removeEventListener("resize", onResize);
            document.removeEventListener("visibilitychange", onVis);
        };
    }, []);

    return (
        <div ref={root} className={styles.night} aria-hidden="true">
            {Array.from({ length: COUNT }, (_, i) => (
                <div key={i} data-star className={styles.star}>
                    <div className={styles.shooting_star} style={{ animationDelay: `${(i * 487) % 3000}ms`, opacity: 0.5 + ((i * 37) % 50) / 100 }} />
                </div>
            ))}
            <div ref={planet} className={styles.planet} />
        </div>
    );
};

export default Night;
