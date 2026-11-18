import styles from "../../styles/components/Background.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import NavIcon from "../atoms/NavIcon";

const shortcuts = [
    { title: "Fittaa", href: "https://fittaa.com", icon: "/shortcuts/fittaa.svg" },
    { title: "Ownaz", href: "https://ownaz.tech", icon: "/shortcuts/ownaz.png" },
    { title: "cowtree", href: "https://github.com/paakofiaidoo/cowtree", icon: "/shortcuts/cowtree.svg" },
    // { title: "Lyk Africa", href: "https://lykafrica.com", icon: "/shortcuts/lykafrica.svg" },
    // { title: "SignalHive", href: "https://signalhive.net", icon: "/shortcuts/signalhive.svg" },
    // { title: "Sonarox", href: "https://sonarox.tech", icon: "/shortcuts/sonarox.svg" },
    // { title: "Mitosis", href: "https://mitosis.ownaz.tech", icon: "/shortcuts/mitosis.svg" },
];

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
            <div className={styles.shortcuts}>
                {shortcuts.map(({ title, href, icon }) => (
                    <a key={title} href={href} target="_blank" rel="noreferrer" className={styles.link} title={`Open ${title}`}>
                        <span className={styles.shot}>
                            <img src={icon} alt="" width="34" height="34" />
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.out} />
                        </span>
                        <span>{title}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Background;
