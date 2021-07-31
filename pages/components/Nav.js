import Image from "next/image";
import styles from "../../styles/Nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

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
          {links.map(({ title, icon, isActive, id }, i) => (
            <li
              className={`${isActive ? styles.isActive : ""}`}
              onClick={() => {
                open(id);
              }}
              key={i}
            >
              <img src={icon} className={styles.linksIcon} alt={title} />
              <a href="#">{title}</a>
            </li>
          ))}
        </>
      </div>
      <FontAwesomeIcon
        className={`icon`}
        title="Download Resume"
        icon={faDownload}
      />
    </nav>
  );
};

export default Nav;
