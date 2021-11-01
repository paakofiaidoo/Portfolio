import Lottie from "react-lottie";
import AwesomeSlider from "react-awesome-slider";
import Slidestyles from "../../styles/apps/SkillsSlider.module.scss";
import styles from "../../styles/apps/Skills.module.scss";
import web from "../../public/animations/pentagramskillsofdeth.json";
import react from "../../public/animations/reactnative.json";

const Skills = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={`${styles.skills}`}>
      <div className={`${styles.card}`}>
        <AwesomeSlider bullets organicArrows cssModule={[Slidestyles]}>
          <div className={`${styles.cardIn}`}>
            <div className={`anim ${styles.img}`}>
              <Lottie
                options={{ ...defaultOptions, animationData: web }}
                height={"100%"}
                width={"100%"}
                style={{ overflow: "visible" }}
              />
            </div>
            <h2 className={`${styles.title}`}> front end</h2>
            <p className={`${styles.text}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem cumque exercitationem facilis soluta
              magnam accusamus harum, perferendis consectetur est nostrum voluptate laudantium ex doloribus veritatis,
              incidunt officiis assumenda in.
            </p></div>
          <div className={`${styles.cardIn}`}>
            <div className={`anim ${styles.img}`}>
              <Lottie
                options={{ ...defaultOptions, animationData: react }}
                height={"100%"}
                width={"100%"}
                style={{ overflow: "visible" }}
              />
            </div>
            <h2 className={`${styles.title}`}> front end</h2>
            <p className={`${styles.text}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem cumque exercitationem facilis soluta
              magnam accusamus harum, perferendis consectetur est nostrum voluptate laudantium ex doloribus veritatis,
              incidunt officiis assumenda in.
            </p></div>
        </AwesomeSlider>
      </div>
      <div className={`${styles.card}`}>
        <AwesomeSlider bullets organicArrows={false} cssModule={[Slidestyles]}>
          <div className={`${styles.cardIn}`}>
            <div className={`anim ${styles.img}`}>
              <Lottie
                options={{ ...defaultOptions, animationData: web }}
                height={"100%"}
                width={"100%"}
                style={{ overflow: "visible" }}
              />
            </div>
            <h2 className={`${styles.title}`}> front end</h2>
            <p className={`${styles.text}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem cumque exercitationem facilis soluta
              magnam accusamus harum, perferendis consectetur est nostrum voluptate laudantium ex doloribus veritatis,
              incidunt officiis assumenda in.
            </p></div>
          <div className={`${styles.cardIn}`}>
            <div className={`anim ${styles.img}`}>
              <Lottie
                options={{ ...defaultOptions, animationData: react }}
                height={"100%"}
                width={"100%"}
                style={{ overflow: "visible" }}
              />
            </div>
            <h2 className={`${styles.title}`}> front end</h2>
            <p className={`${styles.text}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem cumque exercitationem facilis soluta
              magnam accusamus harum, perferendis consectetur est nostrum voluptate laudantium ex doloribus veritatis,
              incidunt officiis assumenda in.
            </p></div>
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default Skills;
