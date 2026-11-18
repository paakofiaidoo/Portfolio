import React, { useEffect, useRef } from "react";
import styles from "../../styles/components/Layout.module.scss";

const COUNT = 70;
const MAX = 110; // pool: the extra stars are born in supernovae and retire when they leave the sky
const TOUCH = 6; // two star heads closer than this collide
const GM = 1500; // px^3 / frame^2: a star passing 150px away at cruise speed bends about 90 degrees
const R = 13; // planet radius: closer than this is an impact
const SOFT = 30;
const VMAX = 18;
const SUB = 4;
const rnd = (a, b) => a + Math.random() * (b - a);

/* The shooting stars are bodies in free flight and the pointer is a planet: inverse-square gravity,
   no damping. A star on a collision course falls in and crashes; the rest swing past on a curved
   (hyperbolic) path and fly on. Each streak is the path the star flew, drawn on the canvas, so it
   curves with the flight. A star that hits the planet bursts into sparks; two stars that touch go
   supernova and throw out new stars. Static under prefers-reduced-motion. */
const Night = () => {
    const root = useRef(null);
    const planet = useRef(null);
    const sky = useRef(null);

    useEffect(() => {
        const el = root.current;
        if (!el) return;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let w = window.innerWidth, h = window.innerHeight;
        const canvas = sky.current, ctx = canvas.getContext("2d");
        const fit = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = w * dpr; canvas.height = h * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        fit();

        const launch = (s, anywhere) => {
            const a = Math.PI / 4 + rnd(-0.32, 0.32);
            const v = rnd(2, 4.6);
            if (anywhere) { s.x = rnd(-0.1, 1) * w; s.y = rnd(-0.1, 1) * h; }
            else if (Math.random() < w / (w + h)) { s.x = rnd(-0.3, 0.9) * w; s.y = -220; }
            else { s.x = -220; s.y = rnd(-0.3, 0.9) * h; }
            s.vx = Math.cos(a) * v; s.vy = Math.sin(a) * v; s.dead = false; s.hist = []; s.grace = 0;
        };
        // The tail is the path the star actually flew, so it bends wherever gravity bent the flight.
        const remember = (s) => {
            s.hist.unshift({ x: s.x, y: s.y });
            const max = Math.min(320, 90 + Math.hypot(s.vx, s.vy) * 34);
            let len = 0;
            for (let i = 1; i < s.hist.length; i++) {
                len += Math.hypot(s.hist[i].x - s.hist[i - 1].x, s.hist[i].y - s.hist[i - 1].y);
                if (len > max) { s.hist.length = i + 1; break; }
            }
            if (s.hist.length > 120) s.hist.length = 120;
        };
        let sparks = [], rings = [], novas = [];
        const explode = (x, y, vx, vy, n, power = 1) => {
            for (let i = 0; i < n; i++) {
                const a = Math.random() * Math.PI * 2, v = rnd(1.2, 6.5) * power;
                sparks.push({ x, y, vx: vx * 0.35 + Math.cos(a) * v, vy: vy * 0.35 + Math.sin(a) * v, life: 1, decay: rnd(0.018, 0.04) / power, hot: Math.random() < 0.3 });
            }
            rings.push({ x, y, r: 4, life: 1 });
            if (sparks.length > 900) sparks.splice(0, sparks.length - 900);
        };
        const drawNovas = () => {
            ctx.globalCompositeOperation = "lighter";
            for (const n of novas) {
                const e = 1 - Math.pow(n.life, 3);
                const core = 16 + e * 130;
                const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, core);
                g.addColorStop(0, `rgba(255,255,255,${n.life})`);
                g.addColorStop(0.22, `rgba(200,225,255,${n.life * 0.85})`);
                g.addColorStop(0.55, `rgba(95,145,255,${n.life * 0.35})`);
                g.addColorStop(1, "rgba(60,90,255,0)");
                ctx.fillStyle = g;
                ctx.beginPath(); ctx.arc(n.x, n.y, core, 0, Math.PI * 2); ctx.fill();
                ctx.lineCap = "round";
                for (const r of n.rays) {
                    const len = e * r.len, c = Math.cos(r.a), sn = Math.sin(r.a);
                    ctx.beginPath(); ctx.moveTo(n.x + c * len * 0.25, n.y + sn * len * 0.25); ctx.lineTo(n.x + c * len, n.y + sn * len);
                    ctx.strokeStyle = r.gold ? `rgba(254,194,0,${n.life * 0.75})` : `rgba(190,220,255,${n.life * 0.75})`;
                    ctx.lineWidth = 0.8 + 2.2 * n.life; ctx.stroke();
                }
                for (const [k, wd] of [[1, 3.5], [0.6, 2]]) {
                    ctx.beginPath(); ctx.arc(n.x, n.y, e * 210 * k, 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(200,225,255,${n.life * 0.7})`; ctx.lineWidth = 0.5 + wd * n.life; ctx.stroke();
                }
            }
            ctx.globalCompositeOperation = "source-over";
        };
        const drawBlasts = () => {
            drawNovas();
            ctx.lineCap = "round";
            for (const r of rings) {
                ctx.beginPath(); ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(190,220,255,${r.life * 0.8})`; ctx.lineWidth = 1 + 3 * r.life; ctx.stroke();
                ctx.beginPath(); ctx.arc(r.x, r.y, r.r * 0.45, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(230,240,255,${r.life * r.life * 0.55})`; ctx.fill();
            }
            for (const p of sparks) {
                ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.vx * 2.2, p.y - p.vy * 2.2);
                ctx.strokeStyle = p.hot ? `rgba(254,194,0,${p.life})` : `rgba(170,205,255,${p.life})`;
                ctx.lineWidth = 1 + 1.6 * p.life; ctx.stroke();
            }
        };
        const drawTails = () => {
            ctx.clearRect(0, 0, w, h);
            ctx.lineCap = "butt";
            for (const s of stars) {
                const n = s.hist.length;
                if (n < 2) continue;
                for (let i = 0; i < n - 1; i++) {
                    const k = 1 - i / (n - 1), a = Math.pow(k, 1.4) * s.alpha;
                    ctx.beginPath();
                    ctx.moveTo(s.hist[i].x, s.hist[i].y);
                    ctx.lineTo(s.hist[i + 1].x, s.hist[i + 1].y);
                    ctx.strokeStyle = `rgba(105,155,255,${a * 0.2})`; ctx.lineWidth = 11; ctx.stroke();
                    ctx.strokeStyle = `rgba(95,145,255,${a})`; ctx.lineWidth = 1.4 + 2.6 * k; ctx.stroke();
                }
            }
            drawBlasts();
        };
        const stars = Array.from(el.querySelectorAll("[data-star]")).map((node, i) => {
            const s = { node, alpha: 0.5 + ((i * 37) % 50) / 100, extra: i >= COUNT, active: i < COUNT, hist: [], x: -999, y: -999, vx: 1, vy: 1 };
            if (!s.active) return s;
            launch(s, true);
            for (let j = 0; j < 40; j++) s.hist.push({ x: s.x - s.vx * j * 1.6, y: s.y - s.vy * j * 1.6 });
            return s;
        });
        const paint = (s) => {
            s.node.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${Math.atan2(s.vy, s.vx)}rad) scale(2)`;
        };
        stars.forEach((s) => s.active && paint(s));
        drawTails();
        if (reduce) return;

        const m = { on: false, x: 0, y: 0, px: 0, py: 0 };
        let raf = 0, last = performance.now();

        const retire = (s) => { s.active = false; s.dead = false; s.hist = []; s.node.style.visibility = "hidden"; };
        const leave = (s) => { if (s.extra) retire(s); else { launch(s); paint(s); } };
        const destroy = (s) => {
            s.dead = true;
            s.node.classList.add(styles.crash);
            setTimeout(() => { s.node.classList.remove(styles.crash); leave(s); }, 420);
        };
        // Two stars meeting go supernova: a white core, rays and shock rings, and new stars thrown out of it.
        const supernova = (x, y, vx, vy) => {
            novas.push({ x, y, life: 1, rays: Array.from({ length: 14 }, () => ({ a: Math.random() * Math.PI * 2, len: rnd(90, 240), gold: Math.random() < 0.3 })) });
            explode(x, y, vx, vy, 80, 1.7);
            const born = stars.filter((s) => !s.active).slice(0, 4), turn = Math.random() * Math.PI * 2;
            born.forEach((s, i) => {
                const a = turn + (i / born.length) * Math.PI * 2 + rnd(-0.3, 0.3), v = rnd(6, 10);
                s.active = true; s.dead = false; s.grace = 120; s.hist = [];
                s.x = x + Math.cos(a) * 18; s.y = y + Math.sin(a) * 18;
                s.vx = Math.cos(a) * v + vx * 0.25; s.vy = Math.sin(a) * v + vy * 0.25;
                s.node.classList.remove(styles.crash);
                s.node.style.visibility = "visible";
                paint(s);
            });
        };
        const tick = (t) => {
            const dt = Math.min(3, (t - last) / 16.7) / SUB; last = t;
            const step = dt * SUB;
            if (m.on) { m.px += (m.x - m.px) * 0.3; m.py += (m.y - m.py) * 0.3; }
            for (const s of stars) {
                if (!s.active) continue;
                if (s.grace > 0) s.grace -= step;
                if (s.dead) { s.hist.splice(-4); continue; }
                for (let i = 0; i < SUB; i++) {
                    if (m.on) {
                        const dx = m.px - s.x, dy = m.py - s.y;
                        const r2 = dx * dx + dy * dy, r = Math.sqrt(r2);
                        if (r < R) { s.hit = true; break; }
                        const a = GM / (r2 + SOFT);
                        s.vx += (dx / r) * a * dt; s.vy += (dy / r) * a * dt;
                        const sp = Math.hypot(s.vx, s.vy);
                        if (sp > VMAX) { s.vx *= VMAX / sp; s.vy *= VMAX / sp; }
                    }
                    s.x += s.vx * dt; s.y += s.vy * dt;
                }
                if (s.hit) {
                    s.hit = false;
                    // debris sprays back off the surface, away from the planet's centre
                    const nx = (s.x - m.px) / R, ny = (s.y - m.py) / R;
                    explode(s.x, s.y, nx * 6 - s.vx * 0.4, ny * 6 - s.vy * 0.4, 26);
                    paint(s); remember(s);
                    destroy(s);
                    if (planet.current) {
                        planet.current.classList.remove(styles.hit);
                        void planet.current.offsetWidth;
                        planet.current.classList.add(styles.hit);
                    }
                    continue;
                }
                if (s.x < -360 || s.x > w + 360 || s.y < -360 || s.y > h + 360) { leave(s); continue; }
                paint(s); remember(s);
            }
            for (let i = 0; i < stars.length; i++) {
                const a = stars[i];
                if (!a.active || a.dead || a.grace > 0 || a.x < 0 || a.y < 0 || a.x > w || a.y > h) continue;
                for (let j = i + 1; j < stars.length; j++) {
                    const b = stars[j];
                    if (!b.active || b.dead || b.grace > 0) continue;
                    const dx = a.x - b.x, dy = a.y - b.y;
                    if (dx * dx + dy * dy > TOUCH * TOUCH) continue;
                    destroy(a); destroy(b);
                    supernova((a.x + b.x) / 2, (a.y + b.y) / 2, (a.vx + b.vx) / 2, (a.vy + b.vy) / 2);
                    break;
                }
            }
            for (const p of sparks) {
                if (m.on) {
                    const dx = m.px - p.x, dy = m.py - p.y, r2 = dx * dx + dy * dy, r = Math.sqrt(r2) || 1;
                    if (r < R) { p.life = 0; continue; }
                    const g = GM / (r2 + SOFT);
                    p.vx += (dx / r) * g * step; p.vy += (dy / r) * g * step;
                }
                p.vx *= 0.985; p.vy *= 0.985;
                p.x += p.vx * step; p.y += p.vy * step; p.life -= p.decay * step;
            }
            sparks = sparks.filter((p) => p.life > 0);
            for (const r of rings) { r.r += 3.2 * step; r.life -= 0.045 * step; }
            rings = rings.filter((r) => r.life > 0);
            for (const n of novas) n.life -= 0.017 * step;
            novas = novas.filter((n) => n.life > 0);
            drawTails();
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
        const onResize = () => {
            const tiny = w < 200 || h < 200;
            w = window.innerWidth; h = window.innerHeight; fit();
            if (tiny) stars.forEach((s) => s.active && !s.extra && launch(s, true));
        };
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
            <canvas ref={sky} className={styles.sky} />
            {Array.from({ length: MAX }, (_, i) => (
                <div key={i} data-star className={styles.star} style={i >= COUNT ? { visibility: "hidden" } : undefined}>
                    <div className={styles.shooting_star} style={{ animationDelay: `${(i * 487) % 3000}ms`, opacity: 0.5 + ((i * 37) % 50) / 100 }} />
                </div>
            ))}
            <div ref={planet} className={styles.planet} />
        </div>
    );
};

export default Night;
