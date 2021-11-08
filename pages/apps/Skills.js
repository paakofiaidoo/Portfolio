import Lottie from "react-lottie";
import { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slidestyles from "../../styles/apps/SkillsSlider.module.scss";
import styles from "../../styles/apps/Skills.module.scss";
import web from "../../public/animations/pentagramskillsofdeth.json";
import react from "../../public/animations/reactnative.json";
import pro from "../../public/animations/programmingcomputer.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Skills = () => {
  return (
    <>
      <div className={`${styles.skills}`}>
        <Skill
          services={[
            {
              title: "web",
              content: "lorem",
              icon: "",
              animation: web
            },
            {
              title: "web",
              content: "lorem",
              icon: "",
              animation: react
            },
            {
              title: "web",
              content: "lorem",
              icon: "",
              animation: pro
            },
            {
              title: "web",
              content: "lorem",
              icon: "",
              animation: web
            },
            {
              title: "web",
              content: "lorem",
              icon: "",
              animation: react
            },
            {
              title: "web",
              content: "lorem",
              icon: "",
              animation: pro
            },
          ]}
        />
      </div>
    </>
  );
};

export default Skills;


const Skill = ({ services = [] }) => {
  const [active, setActive] = useState(0);
  const [options, setOptions] = useState([
    {
      title: "web",
      content: "something nice about web skills",
      icon: "",
    }
  ])



  return (
    <div id="services" >
      <div className={`${styles.options} `}>
        {services.map(({ title, animation, content, fa, icon }, i) => {
          return (
            <>
              <div
                className={`${styles.option} ${i === active ? styles.active : ""}`}
                key={i}

                onClick={(e) => {
                  setActive(i);
                }}>
                <Lottie
                  options={{ ...defaultOptions, animationData: animation }}
                  height={"100%"}
                  width={"100%"}
                  className={`${styles.anim} ${i === active ? styles.active : ""}`}
                  style={{ display: i === active ? "" : "none" }}
                />
                <div className={`${styles.label} ${styles.shadow}`}>
                  <div className={`${styles.icon}`}>
                    {icon ? <Image src={icon} alt="" width={40} height={40} /> : <FontAwesomeIcon icon={fa} />}
                  </div>

                  <div className={`${styles.info} `}>
                    <div className={`${styles.main} `}>{title}</div>
                    <div className={`${styles.sub} `}>{content}</div>
                  </div>
                </div>
              </div>

            </>
          );
        })}
      </div>
    </div>
  );
};
const Slider = (defaultOptions) => {
  return (
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
          </p>
        </div>
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
          </p>
        </div>
      </AwesomeSlider>
    </div>
  );
};
