import Image from "next/image";
import styles from "../../styles/Nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Nav = () => {
  const [state, setState] = useState({ isActive: false });
  const [nav, setNav] = useState([
    {
      id: 1,
      title: "contact",
      isActive: true,
      icon: "/navIcons/contact.svg",
    },
    {
      id: 2,
      title: "skills",
      isActive: false,
      icon: "/navIcons/competence.svg",
    },
    {
      id: 3,
      title: "about me",
      isActive: false,
      icon: "/navIcons/man.svg",
    },
    {
      id: 4,
      title: "projects",
      isActive: false,
      icon: "/navIcons/project.svg",
    },
    {
      id: 5,
      title: "resume",
      isActive: false,
      icon: "/navIcons/resume.svg",
    },
  ]);
  const { isActive } = state;
  return (
    <nav
      className={`navbar ${isActive ? `isActive ${styles.isActive}` : ""} ${
        styles.navbar
      }`}
    >
      <div className={`links  ${styles.links}`}>
        <>
          <li className={`${isActive ? styles.isActive : ""}`}>
            <Image
              className={`icon`}
              src="/brand/vector/default-monochrome.svg"
              alt="karibe Logo"
              width={60}
              height={60}
            />
          </li>
          {nav.map(({ title, icon, isActive }, i) => (
            <li className={`${isActive ? styles.isActive : ""}`}>
              <img src={icon} className={styles.linksIcon} alt={title} />
              <a href="#">{title}</a>
            </li>
          ))}
        </>
      </div>
    </nav>
  );
};

export default Nav;
