import {
	faSchool,
	faBullseye,
	faCalendarDay,
	faHeart,
	faQuoteLeft,
	faUserTag,
	faHouseUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/apps/About.module.scss";
import anim from "../../public/animations/avatar.json"
const About = () => {
	const about = [
		{ fa: faCalendarDay, details: "21 years" },
		{ fa: faHouseUser, details: "Fijai, Ghana" },
		{ fa: faSchool, details: "BSc Physics (electronics option) 3rd year undergrad, KNUST, Kumasi, Ghana", },
		{ fa: faHeart, details: "Coding, Philosophy (Ontology and Epistemology), movies & animations, gaming" },
		{ fa: faQuoteLeft, details: "I live for the pursuit of knowledge" },
		{ fa: faBullseye, details: "I live to solve problems " },
		{
			fa: faUserTag, details: `René Descartes said, "cogito, ergo sum",  (Latin: “I think, therefore I am),	
so firstly I am thinking thing and a good thinker if I might add, I prioritize a good mental well being . 	
I am a passionate person who loves to learn and seek to apply knowledge in to solutions.
I sleep and wake up with technology on my mind always trying to be in step with the latest technology
I am always looking for new ways to improve myself and my work.
I work well with persons with different backgrounds and personalities in both remote and physical work environments.
` },
	];
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: anim,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};
	return (
		<div className={`${styles.about}`}>
			<div className={`${styles.intro} card`}>
				<img src="/brand/profile.png" alt="picture of me" className={`${styles.pic}`} />
				<h2 className={`${styles.name}`}>
					Aidoo Paa-Kofi Anderson
					<p className={`${styles.sub}`}>Web developer, Electronics hobbist</p>
				</h2>
			</div>
			<div className={`${styles.info} `}>

				{about.map(({ fa, details }) => (
					<pre className={`${styles.text} `}>
						<FontAwesomeIcon icon={fa} className={`icon`} />
						{details}
					</pre>
				))}
			</div>
			<span>click on logo in taskbar to download resume</span>
		</div>
	);
};

export default About;
