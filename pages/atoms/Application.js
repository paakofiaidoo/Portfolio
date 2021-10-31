import styles from "../../styles/Application.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Application({ style, children, close, layer, app = {} }) {
  const { title, icon, id } = app;

  const Window = (children) => {
    return (
      <div className={styles.app} style={{ zIndex: layer + 2, ...style }}>
        <div className={styles.titleBar} draggable>
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
