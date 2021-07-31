import styles from "../../styles/Application.module.scss";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Application({ children, close, layer, app }) {
  const { title, icon, id } = app;

  const Window = (children) => {
    return (
      <div className={styles.app} style={{ zIndex: layer + 2 }}>
        <div className={styles.titleBar}>
          <li className={styles.title}>
            <img src={icon} className={`icon ${styles.icon}`} alt={app.title} />
            {title}
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
        <div className={styles.content}>{children}</div>
      </div>
    );
  };
  const Icon = () => {
    return (
      <div onClick={() => {}} className={styles.background}>
        <div className={styles.overlay}>
          <img src={icon} alt={title} className={`icon ${styles.backIcon}`} />
          <p>{title}</p>
        </div>
      </div>
    );
  };

  return Window(children);
}

export default Application;
