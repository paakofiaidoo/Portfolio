import styles from "../../styles/components/Background.module.scss";
import { useState } from "react";
import NavIcon from "../atoms/NavIcon";

const Background = ({ apps, open }) => {
    const [state, setState] = useState({
        id: null,
    });

    return (
        <div className={`${styles.back}`}>
            <div className={`links  ${styles.links}`}>
                {apps.map((app, i) => (
                    <NavIcon key={i} {...{ ...app, open, i, state, setState, animation: false, classN: styles.link }} />
                ))}
                {/* <a href="https://www.canva.com/design/DAFR92_dtkg/ZoB3bGimK1zqx9GqxS1ZRA/view" target={"_blank"} className={styles.link}      >
                    <img src="/efems.png" style={{ width: "3rem", height: "100%" }} className={`${styles.linksIcon}`} />
                    <p>{"FEMSBOOTCAMP22"}</p>
                </a> */}
            </div>
        </div>
    );
};

export default Background;
