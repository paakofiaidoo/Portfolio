import styles from "../../styles/Application.module.scss";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Application({ style, children, close, layer, app={}, mousePosition }) {
  const { title, icon, id } = app;
  console.log(children);
  const [mouse, setMouse] = useState({ initX: 0, initY: 0, dragEvent: false });

  const inputEl = useRef();

  const Window = (children) => {
    return (
      <div
        className={styles.app}
        ref={inputEl}
        onMove={(e) => {
          console.log(e.clientY);
        }}
        style={{ zIndex: layer + 2, ...style }}
      >
        <div
          // onDrag={(e) => {
          //   console.log(style);
          // }}
          // onDragEnd={(e) => {
          //   console.log("end");
          // }}
          // onDragStart={(e) => {
          //   console.log("start");
          // }}
          className={styles.titleBar}
          draggable
        >
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

  return Window(children);
}

export default Application;
