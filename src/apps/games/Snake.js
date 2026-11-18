import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "../../../styles/apps/Games.module.scss";

const N = 18;
const TICK = 115;
const fresh = () => ({ snake: [{ x: 8, y: 9 }, { x: 7, y: 9 }, { x: 6, y: 9 }], dir: { x: 1, y: 0 }, next: { x: 1, y: 0 }, food: { x: 13, y: 9 } });

const Snake = () => {
    const root = useRef(null);
    const canvas = useRef(null);
    const game = useRef(fresh());
    const [status, setStatus] = useState("ready");
    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);

    const draw = useCallback(() => {
        const c = canvas.current;
        if (!c) return;
        const size = c.clientWidth, dpr = Math.min(window.devicePixelRatio || 1, 2);
        if (c.width !== size * dpr) { c.width = size * dpr; c.height = size * dpr; }
        const ctx = c.getContext("2d");
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const cell = size / N;
        ctx.fillStyle = "#0b1730";
        ctx.fillRect(0, 0, size, size);
        ctx.strokeStyle = "rgba(0,248,232,0.06)";
        for (let i = 1; i < N; i++) {
            ctx.beginPath(); ctx.moveTo(i * cell, 0); ctx.lineTo(i * cell, size); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, i * cell); ctx.lineTo(size, i * cell); ctx.stroke();
        }
        const { snake, food } = game.current;
        ctx.fillStyle = "#fec200";
        ctx.beginPath(); ctx.arc((food.x + 0.5) * cell, (food.y + 0.5) * cell, cell * 0.36, 0, Math.PI * 2); ctx.fill();
        snake.forEach((p, i) => {
            ctx.fillStyle = i === 0 ? "#00f8e8" : "#25bba8";
            ctx.fillRect(p.x * cell + 1, p.y * cell + 1, cell - 2, cell - 2);
        });
    }, []);

    const placeFood = () => {
        const g = game.current;
        let f;
        do { f = { x: Math.floor(Math.random() * N), y: Math.floor(Math.random() * N) }; } while (g.snake.some((p) => p.x === f.x && p.y === f.y));
        g.food = f;
    };

    const start = () => { game.current = fresh(); placeFood(); setScore(0); setStatus("playing"); root.current && root.current.focus(); };

    const turn = (x, y) => {
        const g = game.current;
        if (status !== "playing") { start(); if (x !== -1) game.current.next = { x, y }; return; }
        if (g.dir.x === -x && g.dir.y === -y) return;
        g.next = { x, y };
    };

    useEffect(() => {
        try { setBest(Number(localStorage.getItem("pk-snake-best")) || 0); } catch (e) {}
        draw();
        const onResize = () => draw();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [draw]);

    useEffect(() => {
        if (status !== "playing") { draw(); return; }
        const id = setInterval(() => {
            const g = game.current;
            g.dir = g.next;
            const head = { x: g.snake[0].x + g.dir.x, y: g.snake[0].y + g.dir.y };
            const hitWall = head.x < 0 || head.y < 0 || head.x >= N || head.y >= N;
            if (hitWall || g.snake.some((p) => p.x === head.x && p.y === head.y)) { setStatus("over"); return; }
            g.snake.unshift(head);
            if (head.x === g.food.x && head.y === g.food.y) {
                placeFood();
                setScore((s) => {
                    const n = s + 1;
                    setBest((b) => { if (n > b) { try { localStorage.setItem("pk-snake-best", String(n)); } catch (e) {} return n; } return b; });
                    return n;
                });
            } else g.snake.pop();
            draw();
        }, TICK);
        return () => clearInterval(id);
    }, [status, draw]);

    const onKey = (e) => {
        const k = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0], w: [0, -1], s: [0, 1], a: [-1, 0], d: [1, 0] }[e.key];
        if (k) { e.preventDefault(); turn(k[0], k[1]); }
        else if (e.key === " " || e.key === "Enter") { e.preventDefault(); if (status !== "playing") start(); }
    };
    const touch = useRef(null);
    const onTouchStart = (e) => { const t = e.touches[0]; touch.current = { x: t.clientX, y: t.clientY }; };
    const onTouchEnd = (e) => {
        if (!touch.current) return;
        const t = e.changedTouches[0], dx = t.clientX - touch.current.x, dy = t.clientY - touch.current.y;
        touch.current = null;
        if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) { if (status !== "playing") start(); return; }
        if (Math.abs(dx) > Math.abs(dy)) turn(dx > 0 ? 1 : -1, 0); else turn(0, dy > 0 ? 1 : -1);
    };

    return (
        <div className={styles.game} ref={root} tabIndex={0} onKeyDown={onKey}>
            <div className={styles.bar}>
                <span>Score <b>{score}</b></span>
                <span>Best <b>{best}</b></span>
                <button type="button" className={styles.btn} onClick={start}>{status === "playing" ? "Restart" : "Play"}</button>
            </div>
            <div className={styles.stage} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                <canvas ref={canvas} className={styles.canvas} />
                {status !== "playing" && (
                    <div className={styles.overlay}>
                        <strong>{status === "over" ? `Game over: ${score}` : "Snake"}</strong>
                        <span>Arrow keys or WASD. Swipe on a phone.</span>
                        <button type="button" className={styles.btn} onClick={start}>{status === "over" ? "Play again" : "Play"}</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Snake;
