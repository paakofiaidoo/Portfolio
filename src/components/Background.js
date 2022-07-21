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
            </div>
        </div>
    );
};

export default Background;
