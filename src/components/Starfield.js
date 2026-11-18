import React, { useEffect, useRef } from "react";

/* Stars drift with the pointer (parallax), scatter from it when it comes close, and a click or tap
   launches a shooting star from that point. Static when the visitor prefers reduced motion. */
const Starfield = () => {
    const ref = useRef(null);

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let w = 0, h = 0, dpr = 1, raf = 0, last = 0;
        let stars = [], shots = [];
        const mouse = { x: -1e4, y: -1e4, tx: 0, ty: 0, px: 0, py: 0 };

        const resize = () => {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = window.innerWidth; h = window.innerHeight;
            canvas.width = w * dpr; canvas.height = h * dpr;
            canvas.style.width = w + "px"; canvas.style.height = h + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const n = Math.min(260, Math.round((w * h) / 6500));
            stars = Array.from({ length: n }, () => {
                const z = Math.random();
                return { x: Math.random() * w, y: Math.random() * h, ox: 0, oy: 0, vx: 0, vy: 0, z, r: 0.5 + z * 1.4, p: Math.random() * Math.PI * 2, s: 0.6 + Math.random() * 1.4 };
            });
        };

        const shoot = (x, y) => {
            const a = Math.PI / 4 + (Math.random() - 0.5) * 0.6;
            const v = 11 + Math.random() * 5;
            shots.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 1 });
            if (shots.length > 6) shots.shift();
        };

        const draw = (t) => {
            const dt = Math.min(40, t - last) / 16.7; last = t;
            mouse.px += (mouse.tx - mouse.px) * 0.06;
            mouse.py += (mouse.ty - mouse.py) * 0.06;
            ctx.clearRect(0, 0, w, h);
            for (const s of stars) {
                if (!reduce) {
                    const dx = s.x + s.ox - mouse.x, dy = s.y + s.oy - mouse.y;
                    const d2 = dx * dx + dy * dy;
                    if (d2 < 140 * 140 && d2 > 0.01) {
                        const d = Math.sqrt(d2), f = ((140 - d) / 140) * 0.9;
                        s.vx += (dx / d) * f; s.vy += (dy / d) * f;
                    }
                    s.vx *= 0.9; s.vy *= 0.9;
                    s.ox += s.vx * dt; s.oy += s.vy * dt;
                    s.ox *= 0.985; s.oy *= 0.985;
                    s.p += 0.02 * s.s * dt;
                }
                const px = s.x + s.ox + mouse.px * (0.5 + s.z) * 18;
                const py = s.y + s.oy + mouse.py * (0.5 + s.z) * 18;
                const near = Math.hypot(px - mouse.x, py - mouse.y);
                const glow = near < 180 ? (180 - near) / 180 : 0;
                const a = 0.35 + 0.45 * (0.5 + 0.5 * Math.sin(s.p)) * (0.4 + s.z) + glow * 0.4;
                ctx.beginPath();
                ctx.arc(px, py, s.r + glow * 1.2, 0, Math.PI * 2);
                ctx.fillStyle = glow > 0 ? `rgba(120,230,255,${Math.min(1, a)})` : `rgba(210,225,255,${Math.min(1, a)})`;
                ctx.fill();
            }
            for (const sh of shots) {
                sh.x += sh.vx * dt; sh.y += sh.vy * dt; sh.life -= 0.02 * dt;
                const g = ctx.createLinearGradient(sh.x, sh.y, sh.x - sh.vx * 9, sh.y - sh.vy * 9);
                g.addColorStop(0, `rgba(170,215,255,${Math.max(0, sh.life)})`);
                g.addColorStop(1, "rgba(60,110,255,0)");
                ctx.strokeStyle = g; ctx.lineWidth = 2; ctx.lineCap = "round";
                ctx.beginPath(); ctx.moveTo(sh.x, sh.y); ctx.lineTo(sh.x - sh.vx * 9, sh.y - sh.vy * 9); ctx.stroke();
            }
            shots = shots.filter((sh) => sh.life > 0 && sh.x < w + 200 && sh.y < h + 200);
            raf = requestAnimationFrame(draw);
        };

        const onMove = (e) => {
            const p = e.touches ? e.touches[0] : e;
            mouse.x = p.clientX; mouse.y = p.clientY;
            mouse.tx = (p.clientX / w - 0.5) * -1; mouse.ty = (p.clientY / h - 0.5) * -1;
        };
        const onLeave = () => { mouse.x = -1e4; mouse.y = -1e4; };
        const onDown = (e) => {
            if (e.target.closest && e.target.closest("a, button, input, textarea, [draggable]")) return;
            const p = e.touches ? e.touches[0] : e;
            shoot(p.clientX, p.clientY);
        };
        const onVis = () => {
            if (document.hidden) cancelAnimationFrame(raf);
            else { last = performance.now(); raf = requestAnimationFrame(draw); }
        };
        let ambient = 0;
        if (!reduce) ambient = setInterval(() => shoot(Math.random() * w * 0.6, Math.random() * h * 0.4), 4500);

        resize();
        raf = requestAnimationFrame(draw);
        window.addEventListener("resize", resize);
        window.addEventListener("pointermove", onMove, { passive: true });
        window.addEventListener("touchmove", onMove, { passive: true });
        window.addEventListener("pointerleave", onLeave);
        window.addEventListener("pointerdown", onDown, { passive: true });
        document.addEventListener("visibilitychange", onVis);
        return () => {
            cancelAnimationFrame(raf);
            clearInterval(ambient);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("touchmove", onMove);
            window.removeEventListener("pointerleave", onLeave);
            window.removeEventListener("pointerdown", onDown);
            document.removeEventListener("visibilitychange", onVis);
        };
    }, []);

    return <canvas ref={ref} aria-hidden="true" style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />;
};

export default Starfield;
