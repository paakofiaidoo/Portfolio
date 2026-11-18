import Lottie from "react-lottie";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/apps/Skills.module.scss";
import web from "../../public/animations/web.json";
import react from "../../public/animations/reactnative.json";
import pro from "../../public/animations/programmingcomputer.json";
import electronics from "../../public/animations/circuit.json";
import cloud from "../../public/animations/isometriclaptop.json";
import data from "../../public/animations/cpuprocessor.json";
import { Recommendations } from "../atoms/Recommendations";
import { logEventFun } from "../firebase";
// import { faUser } from "@fortawesome/free-solid-svg-icons"

const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const Skills = ({ services = [] }) => {
    const [active, setActive] = useState(0);
    services = [
        {
            title: "languages & backend",
            content: `- Go, Rust, Java, JavaScript/TypeScript
			- Python, C++, C#, Dart, SQL
			- Spring Boot, Jmix, Node.js, Strapi
			- REST and event-driven microservices`,
            animation: pro,
        },
        {
            title: "frontend & mobile",
            content: `- Angular, React, Next.js, Svelte
			- PrimeReact
			- Flutter
			- Responsive web design, prototyping UI`,
            animation: react,
        },
        {
            title: "cloud & devops",
            content: `- Azure (AKS), AWS, GCP, DigitalOcean
			- Docker, Kubernetes, Helm, ArgoCD, Istio, GitOps
			- Azure DevOps, CircleCI, GitHub Actions, GitLab CI`,
            animation: cloud,
        },
        {
            title: "data & identity",
            content: `- PostgreSQL, MySQL, MongoDB
			- Firebase, Elasticsearch, Kibana
			- Keycloak`,
            animation: data,
        },
        {
            title: "iot & field",
            content: `- Smart-meter and gateway installation and commissioning
			- On-site deployment
			- Embedded prototyping: Arduino, ESP32, sensors and actuators
			- Digital circuitry`,
            animation: electronics,
        },
        {
            title: "practices",
            content: `- Product development, agile delivery
			- Technical mentorship
			- Tiered customer support management
			- Technical sales support, Jira`,
            animation: web,
        },
    ];

    return (
        <div className={`${styles.skills}`}>
            <div className={`${styles.options} `}>
                {services.map(({ title, animation, content }, i) => {
                    return (
                        <div
                            className={`${styles.option} ${i === active ? styles.active : ""}`}
                            key={i}
                            onClick={(e) => {
                                logEventFun(`viewed skill ${title}`);
                                setActive(i);
                            }}
                        >
                            <Lottie
                                options={{ ...defaultOptions, animationData: animation }}
                                height={"100%"}
                                width={"100%"}
                                className={`${styles.anim} ${i === active ? styles.active : ""}`}
                                style={{ display: i === active ? "" : "none" }}
                            />
                            <div className={`${styles.label} ${styles.shadow}`}>
                                <div className={`${styles.icon}`} style={{ display: i === active ? "none" : "" }}>
                                    <Lottie options={{ ...defaultOptions, animationData: animation }} height={"100%"} width={"100%"} />
                                </div>

                                <div className={`${styles.info} `}>
                                    <div className={`${styles.main} `}>{title}</div>
                                    <p className={`${styles.sub} `}>
                                        {content.split("\n").map((text) => {
                                            return <p>{text}</p>;
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <h2 className={`${styles.title}`}>Recommendations</h2>
            <Recommendations />
        </div>
    );
};
export default Skills;
