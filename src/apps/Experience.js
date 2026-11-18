import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faLocationDot, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/apps/Experience.module.scss";
import React from "react";

const education = [
    { school: "Kwame Nkrumah University of Science and Technology, Kumasi", award: "BSc Physics (Electronics option)", period: "2018 – 2022" },
    { school: "Udacity (ALX-T)", award: "Cloud DevOps Engineer Nanodegree", period: "2022" },
];

const Experience = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch("/api/experience")
            .then((res) => res.json())
            .then((data) => setJobs(data));
        return () => {};
    }, []);

    return (
        <div className={styles.experience}>
            <ol className={styles.timeline}>
                {jobs.map(({ company, location, product, roles }, i) => (
                    <li className={styles.company} key={i}>
                        <header className={styles.head}>
                            <h3>
                                <FontAwesomeIcon fixedWidth icon={faBuilding} className="icon" /> {company}
                            </h3>
                            <span className={styles.where}>
                                <FontAwesomeIcon fixedWidth icon={faLocationDot} className="icon" /> {location}
                            </span>
                        </header>
                        {product && <p className={styles.product}>{product}</p>}
                        {roles.map(({ title, period, points }, ii) => (
                            <section className={styles.role} key={ii}>
                                <div className={styles.roleHead}>
                                    <h4>{title}</h4>
                                    <time>{period}</time>
                                </div>
                                <ul>
                                    {points.map((p, iii) => (
                                        <li key={iii}>{p}</li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </li>
                ))}
            </ol>
            <h3 className={styles.eduTitle}>
                <FontAwesomeIcon fixedWidth icon={faGraduationCap} className="icon" /> Education
            </h3>
            <ul className={styles.edu}>
                {education.map(({ school, award, period }, i) => (
                    <li key={i}>
                        <strong>{award}</strong>
                        <span>{school}</span>
                        <time>{period}</time>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;
