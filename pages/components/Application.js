import React, { useState } from "react";
import styles from "../../styles/Application.module.scss";

function Application(props) {
  const [window, setWindow] = useState({ isActive: true });

  const setWindowActive = (state) => {
    setWindow({ isActive: state });
  };

  const menu = {
    id: 1,
    title: "contact",
    isActive: true,
    icon: "/navIcons/contact.svg",
  };
  const Window = (content) => {
    return (
      <div className={styles.app}>
        <div className={styles.titleBar}>
          <li  className={styles.title}>
            <img
              src={menu.icon}
              className={`icon ${styles.icon}`}
              alt={menu.title}
            />
            {menu.title}
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
        onClick={setWindowActive.bind(this, true)}
        className={styles.background}
      >
        <div className={styles.overlay}>
          <img
            src="/brand/logo.svg"
            alt="Paa-Kofi Aidoo"
            className={styles.backIcon}
          />
          <p>Paa-Kofi Aidoo</p>
        </div>
      </div>
    );
  };

  return window.isActive ? Window(props.children) : Icon();
}

export default Application;
