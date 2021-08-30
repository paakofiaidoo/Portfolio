import {
  faBrain,
  faSchool,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { IconLookup } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../../styles/apps/About.module.scss";
const About = () => {
  return (
    <div className={`${styles.about}`}>
      <div className={`${styles.intro}`}>
        <Image
          src="/brand/profile.png"
          alt="picture of me"
          height={100}
          width={100}
          className={`${styles.pic}`}
        />
        <h2 className={`${styles.name}`}>
          Aidoo Paa-Kofi Anderson
          <p className={`${styles.sub}`}>Front-end web developer</p>
        </h2>
      </div>
      <div className={`${styles.info}`}>
        <p className={`${styles.text}`}>
         
          <FontAwesomeIcon icon={faSchool} className={`icon`} />
          <FontAwesomeIcon icon={faAddressBook} className={`icon`} />
          BSc Physics 3 year undergraduate, KNUST, Kumasi, Ghana
        </p>
        <p className={`${styles.text}`}>
          <FontAwesomeIcon icon={faBrain} className={`icon`} />i live for the
          pursuit of knowledge
        </p>
      </div>
    </div>
  );
};

export default About;
