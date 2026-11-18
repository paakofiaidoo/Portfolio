import React, { useEffect, useRef, useState } from "react";
import styles from "../../../styles/apps/Games.module.scss";

const slide = (line) => {
    const a = line.filter(Boolean);
    let gained = 0;
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] === a[i + 1]) { a[i] *= 2; gained += a[i]; a.splice(i + 1, 1); }
    }
    while (a.length < 4) a.push(0);
    return [a, gained];
};
// dir: 0 left, 1 up, 2 right, 3 down
const move = (b, dir) => {
    const nb = b.slice();
    let gained = 0;
    for (let i = 0; i < 4; i++) {
        const idx = [0, 1, 2, 3].map((j) => (dir === 0 ? i * 4 + j : dir === 2 ? i * 4 + 3 - j : dir === 1 ? j * 4 + i : (3 - j) * 4 + i));
        const [l, g] = slide(idx.map((k) => b[k]));
        gained += g;
        idx.forEach((k, j) => { nb[k] = l[j]; });
    }
    return [nb, gained, nb.some((v, k) => v !== b[k])];
};
const add = (b) => {
    const empty = b.map((v, i) => (v ? -1 : i)).filter((i) => i >= 0);
    if (!empty.length) return b;
    const nb = b.slice();
    nb[empty[Math.floor(Math.random() * empty.length)]] = Math.random() < 0.9 ? 2 : 4;
    return nb;
};
const stuck = (b) => [0, 1, 2, 3].every((d) => !move(b, d)[2]);
const fresh = () => add(add(new Array(16).fill(0)));

const Game2048 = () => {
    const root = useRef(null);
    const [board, setBoard] = useState(() => new Array(16).fill(0));
    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);

    const reset = () => { setBoard(fresh()); setScore(0); root.current && root.current.focus(); };
    useEffect(() => {
        setBoard(fresh());
        try { setBest(Number(localStorage.getItem("pk-2048-best")) || 0); } catch (e) {}
    }, []);

    const play = (dir) => {
        const [nb, gained, changed] = move(board, dir);
        if (!changed) return;
        setBoard(add(nb));
        if (gained) {
            const n = score + gained;
            setScore(n);
            if (n > best) { setBest(n); try { localStorage.setItem("pk-2048-best", String(n)); } catch (e) {} }
        }
    };
    const onKey = (e) => {
        const d = { ArrowLeft: 0, ArrowUp: 1, ArrowRight: 2, ArrowDown: 3, a: 0, w: 1, d: 2, s: 3 }[e.key];
        if (d !== undefined) { e.preventDefault(); play(d); }
    };
    const touch = useRef(null);
    const onTouchStart = (e) => { const t = e.touches[0]; touch.current = { x: t.clientX, y: t.clientY }; };
    const onTouchEnd = (e) => {
        if (!touch.current) return;
        const t = e.changedTouches[0], dx = t.clientX - touch.current.x, dy = t.clientY - touch.current.y;
        touch.current = null;
        if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;
        play(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 2 : 0) : dy > 0 ? 3 : 1);
    };
    const won = board.some((v) => v >= 2048);
    const over = board.every(Boolean) && stuck(board);

    return (
        <div className={styles.game} ref={root} tabIndex={0} onKeyDown={onKey}>
            <div className={styles.bar}>
                <span>Score <b>{score}</b></span>
                <span>Best <b>{best}</b></span>
                <button type="button" className={styles.btn} onClick={reset}>New game</button>
            </div>
            <div className={styles.stage} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                <div className={styles.grid2048}>
                    {board.map((v, i) => (
                        <div key={i} className={styles.tile} data-v={v > 2048 ? "big" : v}>{v || ""}</div>
                    ))}
                </div>
                {(over || won) && (
                    <div className={styles.overlay}>
                        <strong>{won ? "2048. Well played." : `No moves left: ${score}`}</strong>
                        <button type="button" className={styles.btn} onClick={reset}>Play again</button>
                    </div>
                )}
            </div>
            <div className={styles.hint}>Arrow keys or WASD. Swipe on a phone.</div>
        </div>
    );
};

export default Game2048;
