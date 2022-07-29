import styles from "../../styles/atoms/Application.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Lottie from "react-lottie";
import Head from "next/head";
import React from "react";

function Application({ style, children, close, layer, app = { fa: faSpinner, id: 0, title: "" } }) {
    const { title, id, fa } = app;

    const Window = (children) => {
        return (
            <div className={`glass2 ${styles.app}`} style={{ zIndex: layer + 2, ...style }}>
                <Head>
                    <title>{title}</title>
                </Head>
                <div className={styles.titleBar} draggable>
                    <li className={styles.title}>
                        <FontAwesomeIcon className={`icon ${styles.icon}`} title={title} icon={fa} color="#25BBA8" />
                        <span>{title}</span>
                    </li>
                    <FontAwesomeIcon
                        className={`icon ${styles.close}`}
                        color="red"
                        title="Close"
                        icon={faTimes}
                        onClick={() => {
                            close(id);
                        }}
                    />
                </div>
                <div id="content" className={styles.content}>
                    {children}
                </div>
            </div>
        );
    };

    return Window(children);
}

export default Application;
