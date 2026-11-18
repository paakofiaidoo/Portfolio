import React, { useEffect, useState } from "react";
import styles from "../../../styles/apps/Games.module.scss";

const LINES = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const winner = (b) => {
    for (const [a, c, d] of LINES) if (b[a] && b[a] === b[c] && b[a] === b[d]) return { who: b[a], line: [a, c, d] };
    return b.every(Boolean) ? { who: "draw", line: [] } : null;
};
const minimax = (b, turn) => {
    const w = winner(b);
    if (w) return { score: w.who === "O" ? 1 : w.who === "X" ? -1 : 0 };
    let bestMove = { score: turn === "O" ? -2 : 2 };
    b.forEach((v, i) => {
        if (v) return;
        const nb = b.slice(); nb[i] = turn;
        const s = minimax(nb, turn === "O" ? "X" : "O").score;
        if (turn === "O" ? s > bestMove.score : s < bestMove.score) bestMove = { score: s, i };
    });
    return bestMove;
};

const TicTacToe = () => {
    const [board, setBoard] = useState(new Array(9).fill(""));
    const [turn, setTurn] = useState("X");
    const [tally, setTally] = useState({ X: 0, O: 0, draw: 0 });
    const result = winner(board);

    useEffect(() => {
        if (result) { setTally((t) => ({ ...t, [result.who]: t[result.who] + 1 })); return; }
        if (turn !== "O") return;
        const id = setTimeout(() => {
            const free = board.map((v, i) => (v ? -1 : i)).filter((i) => i >= 0);
            const i = Math.random() < 0.25 ? free[Math.floor(Math.random() * free.length)] : minimax(board, "O").i;
            const nb = board.slice(); nb[i] = "O";
            setBoard(nb); setTurn("X");
        }, 380);
        return () => clearTimeout(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [turn, !!result]);

    const play = (i) => {
        if (board[i] || result || turn !== "X") return;
        const nb = board.slice(); nb[i] = "X";
        setBoard(nb); setTurn("O");
    };
    const reset = () => { setBoard(new Array(9).fill("")); setTurn("X"); };

    return (
        <div className={styles.game}>
            <div className={styles.bar}>
                <span>You <b>{tally.X}</b></span>
                <span>Computer <b>{tally.O}</b></span>
                <span>Draws <b>{tally.draw}</b></span>
                <button type="button" className={styles.btn} onClick={reset}>New round</button>
            </div>
            <div className={styles.stage}>
                <div className={styles.gridTtt}>
                    {board.map((v, i) => (
                        <button type="button" key={i} className={`${styles.cell} ${result && result.line.includes(i) ? styles.win : ""}`} onClick={() => play(i)} aria-label={`Square ${i + 1} ${v || "empty"}`} data-v={v}>
                            {v}
                        </button>
                    ))}
                </div>
            </div>
            <div className={styles.hint}>
                {result ? (result.who === "draw" ? "A draw." : result.who === "X" ? "You win." : "The computer wins.") : turn === "X" ? "Your move: you are X." : "Computer is thinking"}
            </div>
        </div>
    );
};

export default TicTacToe;
