import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = ({ links = [], open }) => {
  return (
    <nav className={`navbar  ${styles.navbar}`}>
      <div className={`links  ${styles.links}`}>
        <>
          <li>
            <a
              style={{ display: "flex" }}
              href="/brand/cover.png"
              target="_blank"
              download
              title="Click to download Resume"
            >
              <Image
                className={`icon ${styles.linksIcon}`}
                src="/brand/vector/default-monochrome.svg"
                alt="Paa-Kofi Aidoo logo"
                width={60}
                height={60}
              />
            </a>
          </li>

          {links.map(({ title, icon, isActive, id, fa }, i) => (
            <li
              className={`${isActive ? styles.isActive : ""}`}
              onClick={() => {
                open(id);
              }}
              key={i}
            >
              {fa ? (
                <FontAwesomeIcon
                  className={` ${styles.linksIcon}`}
                  title={title}
                  icon={fa}
                  color="#25BBA8"
                />
              ) : (
                <img src={icon} className={styles.linksIcon} alt={title} />
              )}

              <a href="#">{title}</a>
            </li>
          ))}
        </>
      </div>
      {/* <FontAwesomeIcon
        className={`icon`}
        title="Download Resume"
        icon={faDownload}
      /> */}
    </nav>
  );
};

export default Nav;
