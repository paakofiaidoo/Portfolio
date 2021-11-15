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
			title: "web",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quam debitis totam veritatis aspernatur facilis, velit porro saepe et eligendi a molestiae ullam quasi rem aliquam nihil, odit aut minus?",
			icon: "",
			animation: web,
		},
		{
			title: "web",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quam debitis totam veritatis aspernatur facilis, velit porro saepe et eligendi a molestiae ullam quasi rem aliquam nihil, odit aut minus?",
			icon: "",
			animation: react,
		},
		{
			title: "web",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quam debitis totam veritatis aspernatur facilis, velit porro saepe et eligendi a molestiae ullam quasi rem aliquam nihil, odit aut minus?",
			icon: "",
			animation: pro,
		},
		{
			title: "electronics",
			content: "lorem",
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
										<div className={`${styles.sub} `}>{content}</div>
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
			<AwesomeSlider bullets organicArrows cssModule={[Slidestyles]}>
				<div className={`${styles.cardIn}`}>
					<div className={`icon ${styles.avatar}`}>
						<Lottie
							options={{ ...defaultOptions, animationData: web }}
							height={"100%"}
							width={"100%"}
							style={{ overflow: "visible" }}
						/>
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
					<div className={`icon ${styles.avatar}`}>
						<Lottie
							options={{ ...defaultOptions, animationData: web }}
							height={"100%"}
							width={"100%"}
							style={{ overflow: "visible" }}
						/>
					</div>
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
