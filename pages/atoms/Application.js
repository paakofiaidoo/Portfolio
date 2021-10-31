import styles from "../../styles/Application.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Lottie from "react-lottie";

function Application({ style, children, close, layer, app = {} }) {
  const { title, icon, id, animation } = app;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    speed: "1s",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const Window = (children) => {
    return (
      <div className={`glass1 ${styles.app}`} style={{ zIndex: layer + 2, ...style }}>
        <div className={styles.titleBar} draggable>
          <li className={styles.title}>
            {animation ? (
              <div>
                <Lottie
                  className={` ${styles.linksIcon}`}
                  options={{ ...defaultOptions, animationData: animation }}
                  height={"100%"}
                  width={"100%"}
                  title={title}
                  className={`icon ${styles.icon}`}
                  style={{ height: "2.5rem" }}
                />
              </div>
            ) : (
              <FontAwesomeIcon className={`icon ${styles.icon}`} title={title} icon={fa} color="#25BBA8" />
            )}
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
