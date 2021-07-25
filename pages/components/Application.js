import styles from "../../styles/Application.module.scss";

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

          <span
            className={styles.cancel}
            onClick={() => {
              close(id);
            }}
          ></span>
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
