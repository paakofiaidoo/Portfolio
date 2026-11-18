import React, { useEffect, useRef } from "react";
import styles from "../../styles/components/Layout.module.scss";

const COUNT = 20;
const rnd = (a, b) => a + Math.random() * (b - a);

/* The original shooting stars, each in a wrapper the pointer pulls on like a mass; a star that
   falls into it crashes and is reborn elsewhere. Static spread under prefers-reduced-motion. */
const Night = () => {
    const root = useRef(null);
    const planet = useRef(null);

    useEffect(() => {
        const el = root.current;
        if (!el) return;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const nodes = Array.from(el.querySelectorAll("[data-star]"));
        let w = window.innerWidth, h = window.innerHeight;
        const spawn = (s) => {
            s.bx = rnd(-0.1, 1.1) * w; s.by = rnd(-0.1, 1.1) * h;
            s.x = s.bx; s.y = s.by; s.vx = 0; s.vy = 0;
        };
        const stars = nodes.map((node) => { const s = { node }; spawn(s); return s; });
        const m = { x: null, y: null, px: 0, py: 0 };
        let raf = 0, last = performance.now();

        const place = (s, extra) => {
            s.node.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(45deg) scale(2)${extra || ""}`;
        };
        stars.forEach((s) => place(s));

        if (reduce) return;

        const tick = (t) => {
            const dt = Math.min(3, (t - last) / 16.7); last = t;
            const active = m.x !== null;
            if (active) { m.px += (m.x - m.px) * 0.25; m.py += (m.y - m.py) * 0.25; }
            for (const s of stars) {
                if (s.dead) continue;
                if (active) {
                    const dx = m.px - s.x, dy = m.py - s.y;
                    const d2 = dx * dx + dy * dy, d = Math.sqrt(d2) || 1;
                    if (d < 16) {
                        s.dead = true;
                        s.node.classList.add(styles.crash);
                        setTimeout(() => { s.node.classList.remove(styles.crash); spawn(s); place(s); s.dead = false; }, 420);
                        continue;
                    }
                    const f = Math.min(1.6, 26000 / Math.max(d2, 900));
                    s.vx += (dx / d) * f * dt; s.vy += (dy / d) * f * dt;
                    s.vx *= 0.94; s.vy *= 0.94;
                } else {
                    s.vx += (s.bx - s.x) * 0.012 * dt; s.vy += (s.by - s.y) * 0.012 * dt;
                    s.vx *= 0.88; s.vy *= 0.88;
                }
                s.x += s.vx * dt; s.y += s.vy * dt;
                place(s);
            }
            if (planet.current) {
                planet.current.style.opacity = active ? "1" : "0";
                if (active) planet.current.style.transform = `translate3d(${m.px - 9}px, ${m.py - 9}px, 0)`;
            }
            raf = requestAnimationFrame(tick);
        };
        const onMove = (e) => {
            const p = e.touches ? e.touches[0] : e;
            if (m.x === null) { m.px = p.clientX; m.py = p.clientY; }
            m.x = p.clientX; m.y = p.clientY;
        };
        const onLeave = () => { m.x = null; m.y = null; };
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
                    <div className={styles.shooting_star} style={{ animationDelay: `${(i * 487) % 9999}ms`, opacity: 0.5 + ((i * 37) % 50) / 100 }} />
                </div>
            ))}
            <div ref={planet} className={styles.planet} />
        </div>
    );
};

export default Night;
