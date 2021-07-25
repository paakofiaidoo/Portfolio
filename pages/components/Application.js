import React, { useState } from "react";
import styles from "../../styles/Application.module.scss";

function Application({ children, close, layer, app }) {
  const [window, setWindow] = useState({ isActive: true });

  const setWindowActive = (state) => {
    setWindow({ isActive: state });
  };
  const { title, icon } = app;

  const Window = (content) => {
    return (
      <div className={styles.app} style={{ zIndex: layer + 2 }}>
        <div className={styles.titleBar}>
          <li className={styles.title}>
            <img src={icon} className={`icon ${styles.icon}`} alt={app.title} />
            {title}
          </li>

          <span
            className={styles.cancel}
            onClick={setWindowActive.bind(this, false)}
          ></span>
        </div>
        <div className={styles.content}>{content}</div>
      </div>
    );
  };
  const Icon = () => {
    return (
      <div
        onClick={() => {
          setWindowActive(true);
          close(layer);
        }}
        className={styles.background}
      >
        <div className={styles.overlay}>
          <img src={icon} alt={title} className={`icon ${styles.backIcon}`} />
          <p>{title}</p>
        </div>
      </div>
    );
  };

  return window.isActive ? Window(children) : Icon();
}

export default Application;
