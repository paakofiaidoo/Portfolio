import Image from "next/image";
import styles from "../../styles/Nav.module.scss";
import { useState } from "react";
const Nav = ({ links, open }) => {

  return (
    <nav className={`navbar  ${styles.navbar}`}>
      <div className={`links  ${styles.links}`}>
        <>
          <li>
            <Image
              className={`icon`}
              src="/brand/vector/default-monochrome.svg"
              alt="Paa-Kofi Aidoo logo"
              width={60}
              height={60}
            />
          </li>
          {links.map(({ title, icon, isActive, id, index }, i) => (
            <li
              className={`${isActive ? styles.isActive : ""}`}
              onClick={() => {
                open(id);
              }}
            >
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
