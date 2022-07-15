import Lottie from "react-lottie";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/apps/Skills.module.scss";
import web from "../../public/animations/web.json";
import react from "../../public/animations/reactnative.json";
import pro from "../../public/animations/programmingcomputer.json";
import electronics from "../../public/animations/circuit.json";
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
			title: "web skills",
			content: `HTML
				CSS & SCSS
				JAVASCRIPT
				Prototyping UI with Adobe XD
				(Design practices: Responsive web design)
`,
			animation: web,
		},
		{
			title: "frameworks and libraries",
			content: `React
				Next.js
				Svelte`,
			animation: react,
		},
		{
			title: "programing stack and other skills",
			content: `C++
				Python
				Java
				Git
				Googling
				Building of Chrome extensions
				Basic Networking
			`,
			animation: pro,
		},
		{
			title: "electronics",
			content: `Arduino
				Digital Circuitry
				Working with sensors and actuators
				IOT`,
			icon: "",
			animation: electronics,
		},

	];

	return (
		<div className={`${styles.skills}`}>
			<div className={`${styles.options} `}>
				{services.map(({ title, animation, content }, i) => {
					return (
						<>
							<div
								className={`${styles.option} ${i === active ? styles.active : ""}`}
								key={i}
								onClick={(e) => {
									console.log("click");
									logEventFun(`viewed skill ${title}`);
									setActive(i);
								}}>
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
										<p className={`${styles.sub} `}>{content.split("\n").map((text) => {
											return <p>{text}</p>
										})}</p>
									</div>
								</div>
							</div>
						</>
					);
				})}
			</div>
			<h2 className={`${styles.title}`}>Recommendations</h2>
			<Recommendations />
		</div>
	);
};
export default Skills;
