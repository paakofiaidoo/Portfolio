import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/apps/About.module.scss";
import { useState } from "react";

const About = () => {
  const [about, setAbout] = useState([])
  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then((data) => {
        setAbout(data);
      });
    return () => {};
  }, []);
  
  return (
    <div className={`${styles.about}`}>
      <div className={`${styles.intro} card`}>
        <img src="./brand/me3.png" alt="picture of me" className={`${styles.pic}`} />
        <header className={`${styles.name}`}>
          <h2>Hi 👋,</h2>
          I am Paa-Kofi Aidoo,
          <br />
          I am a Web Developer
          <br />
          and I live for the pursuit of knowledge
          <a
            className={`${styles.sub}`}
            // style={{ display: "flex" }}
            href="./resume/Paa-Kofi Aidoo resume.pdf"
            target="_blank"
            download
            title="Click to download Resume"
          >
            <FontAwesomeIcon fixedWidth icon={faFilePdf} className={`icon`} />
            <p>Download resume</p>
          </a>
        </header>
      </div>
      <info className={`${styles.info} `}>
        {about.map(({ fa, details }, i) => (
          <div className={`${styles.text} `} key={i}>
            <FontAwesomeIcon fixedWidth icon={fa} className={`icon`} />
            <p>
              {details.split("\n").map((text, ii) => {
                return <p key={ii}>{text}</p>;
              })}
            </p>
          </div>
        ))}
      </info>
    </div>
  );
};

export default About;
