import Lottie from "react-lottie";
import { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slidestyles from "../../styles/apps/SkillsSlider.module.scss";
import styles from "../../styles/apps/Skills.module.scss";
import web from "../../public/animations/pentagramskillsofdeth.json";
import react from "../../public/animations/reactnative.json";
import pro from "../../public/animations/programmingcomputer.json";
import electronics from "../../public/animations/circuit.json";
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
				CSS / SCSS
				JAVASCRIPT
				Prototyping UI with Adobe XD
				(Design practices: Responsive web design)
`,
			animation: web,
		},
		{
			title: "frame works and libraries",
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
const Recommendations = (defaultOptions) => {
	return (
		<div className={`${styles.card}`}>
			<AwesomeSlider organicArrows bullets={false} className={`${styles.slider}`} cssModule={[Slidestyles]} style={{ maxHeight: "25rem", }} >
				<div className={`${styles.cardIn}`}>
					<img className={`icon ${styles.avatar}`} src="https://media-exp1.licdn.com/dms/image/C4D03AQELPVaWYZVk4Q/profile-displayphoto-shrink_800_800/0/1606950045787?e=1644451200&v=beta&t=smx0c1NehMvszdeLBgljEhI7PW0PTs-8qjoQIl1cb-8" />
					<h2 className={`${styles.title}`}>Felix Awortwe Kwamena, <span>Junior Python Developer</span></h2>
					<p className={`${styles.text}`}>
						I know only some few good Developers and Anderson is  a part of it .
						He knows what to do and when to do it , I am happy to be connected to such a Determined Dev, I know you deserve more

					</p>
					<a href="https://www.linkedin.com/in/felix-awortwe-kwamena-%F0%9F%87%AC%F0%9F%87%AD-4644a7140/">link to contact</a>
				</div>
				
			</AwesomeSlider>
		</div>
	);
};

export default Skills;
