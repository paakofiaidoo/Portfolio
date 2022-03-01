import {
	faSchool,
	faBullseye,
	faCalendarDay,
	faHeart,
	// faQuoteLeft,
	faUserTag,
	faHouseUser,
	faLanguage,
	faCertificate,
	faFilePdf
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/apps/About.module.scss";
// import anim from "../../public/animations/avatar.json"
import { logEventFun } from "../firebase";


const About = () => {
	const about = [
		{ fa: faCertificate, details: "Web developer, Electronics hobbist" },
		{ fa: faCalendarDay, details: "21 years" },
		{ fa: faHouseUser, details: "Fijai, Ghana" },
		{ fa: faLanguage, details: "English, Akan(Fanti)" },
		{ fa: faSchool, details: "BSc Physics (Electronics Option) 4th Year Undergrad, Kwame Nkrumah University of Science and Technology, Kumasi, Ghana", },
		{ fa: faHeart, details: "Coding, Philosophy (Ontology and Epistemology), Movies & Animations, Gaming" },
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
				<img src="./brand/me2.png" alt="picture of me" className={`${styles.pic}`} />
				<header className={`${styles.name}`}>
					<h2>Hi 👋,</h2>
					I am Paa-Kofi Aidoo,
					<br />
					I am a Web Developer
					<br />
					and I live for the pursuit of knowledge
					<a className={`${styles.sub}`}
						// style={{ display: "flex" }}
						href="./resume/Paa-Kofi Aidoo resume.pdf"
						target="_blank"
						download
						onClick={() => {
							logEventFun('resume');
						}}
						title="Click to download Resume">
						<FontAwesomeIcon fixedWidth icon={faFilePdf} className={`icon`} />
						<p>Download resume</p>
					</a>
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
		</div>
	);
};

export default About;
