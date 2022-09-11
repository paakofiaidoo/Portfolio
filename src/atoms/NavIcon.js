import styles from "../../styles/atoms/Nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function NavIcon({ isActive, open, id, i, state, setState, title, fa, classN }) {
    return (
        <li
            className={`${classN} ${isActive ? styles.isActive : ""}`}
            onClick={() => {
                open(id);
            }}
            key={i}
            onMouseEnter={() => {
                if (state.id !== id) {
                    setState((prev) => {
                        return { ...prev, id };
                    });
                }
            }}
            onMouseLeave={() => {
                setState({});
            }}
        >
            <FontAwesomeIcon className={`${styles.linksIcon}`} title={title} icon={fa} color="#25BBA8" />
            <a>{title}</a>
        </li>
    );
}
