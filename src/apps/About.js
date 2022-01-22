import {
	faSchool,
	faBullseye,
	faCalendarDay,
	faHeart,
	faQuoteLeft,
	faUserTag,
	faHouseUser,
	faLanguage
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/apps/About.module.scss";
import anim from "../../public/animations/avatar.json"
const About = () => {
	const about = [
		{ fa: faCalendarDay, details: "21 years" },
		{ fa: faHouseUser, details: "Fijai, Ghana" },
		{ fa: faLanguage, details: "English, Akan(Fanti)" },
		{ fa: faSchool, details: "BSc Physics (electronics option) 4rd year undergrad, KNUST, Kumasi, Ghana", },
		{ fa: faHeart, details: "Coding, Philosophy (Ontology and Epistemology), Movies & Animations, Gaming" },
		{ fa: faQuoteLeft, details: "I live for the pursuit of knowledge" },
		{ fa: faBullseye, details: "I live to solve problems \nI want to get a score for humanity in terms of knowledge and the life of the African" },
		{
			fa: faUserTag, details: `René Descartes said, "cogito, ergo sum",  (Latin: “I think, therefore I am),	
so firstly I am thinking thing and a good thinker if I might add, I prioritize a good mental well being . 	
I am a passionate person who loves to learn and seek to apply knowledge in to solutions.
I sleep and wake up with technology on my mind always trying to be in step with the latest technology
I am always looking for new ways to improve myself and my work.
I work well with persons with different backgrounds and personalities in both remote and physical work environments.
` },
	];
	return (
		<div className={`${styles.about}`}>
			<div className={`${styles.intro} card`}>
				<img src="./brand/me2.jpg" alt="picture of me" className={`${styles.pic}`} />
				<header className={`${styles.name}`}>
					Aidoo Paa-Kofi Anderson
					<p className={`${styles.sub}`}>Physics undergrad, Web developer, Electronics hobbist</p>
				</header>
			</div>
			<info className={`${styles.info} `}>
				{about.map(({ fa, details }, i) => (
					<div className={`${styles.text} `} key={i} >
						<FontAwesomeIcon fixedWidth icon={fa} className={`icon`} />
						<p>{details.split("\n").map((text) => {
							return <p>{text}</p>
						})}</p>
					</div>
				))}
			</info>
			<span>click on logo in taskbar to download resume</span>
		</div>
	);
};

export default About;
