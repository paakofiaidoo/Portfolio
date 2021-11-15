import Lottie from "react-lottie";
import { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slidestyles from "../../styles/apps/SkillsSlider.module.scss";
import styles from "../../styles/apps/Skills.module.scss";
import web from "../../public/animations/pentagramskillsofdeth.json";
import react from "../../public/animations/reactnative.json";
import pro from "../../public/animations/programmingcomputer.json";
import electronics from "../../public/animations/circuit.json";
import { faUser } from "@fortawesome/free-solid-svg-icons"

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
			title: "programing stack",
			content: `C++
Python
Java
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
										<pre className={`${styles.sub} `}>{content}</pre>
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
					<div className={`icon ${styles.avatar}`}>
						<FontAwesomeIcon icon={faUser} />
					</div>
					<h2 className={`${styles.title}`}> Name of person, title</h2>
					<p className={`${styles.text}`}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem cumque exercitationem facilis soluta
						magnam accusamus harum, perferendis consectetur est nostrum voluptate laudantium ex doloribus veritatis,
						incidunt officiis assumenda in.

					</p>
					<a href="/#">link to contact</a>
				</div>
				<div className={`${styles.cardIn}`}>
					<img className={`icon ${styles.avatar}`} src="/navIcons/man.svg" />
					<h2 className={`${styles.title}`}> Name of person, title</h2>
					<p className={`${styles.text}`}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem cumque exercitationem facilis soluta
						magnam accusamus harum, perferendis consectetur est nostrum voluptate laudantium ex doloribus veritatis,
						incidunt officiis assumenda in.
					</p>
				</div>
			</AwesomeSlider>
		</div>
	);
};

export default Skills;
