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
import Image from "next/image";
import styles from "../../styles/apps/About.module.scss";
//import Lottie from "react-lottie";
import anim from "../../public/animations/avatar.json"
const About = () => {
	const about = [
		{ fa: faCalendarDay, details: "21 years" },
		{ fa: faHouseUser, details: "Fijai, Ghana" },
		{
			fa: faSchool,
			details: " BSc Physics (electronics option) 3rd year undergrad, KNUST, Kumasi, Ghana",
		},
		{ fa: faHeart, details: "coding, philosophy, movies(marvel), gaming" },
		{ fa: faUserTag, details: "introvet,..." },
		{ fa: faQuoteLeft, details: " live for the pursuit of knowledge" },
		{ fa: faBullseye, details: "goals,.." },
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
				<Image src="/brand/profile.png" alt="picture of me" height={300} width={300} className={`${styles.pic}`} />
				<h2 className={`${styles.name}`}>
					Aidoo Paa-Kofi Anderson
					<p className={`${styles.sub}`}>Front-end web developer</p>
				</h2>
			</div>
			<div className={`${styles.info} `}>

				{about.map(({ fa, details }) => (
					<p className={`${styles.text} `}>
						<FontAwesomeIcon icon={fa} className={`icon`} />
						{details}
					</p>
				))}
			</div>
		</div>
	);
};

export default About;
