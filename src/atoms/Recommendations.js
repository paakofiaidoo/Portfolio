import AwesomeSlider from "react-awesome-slider";
import Slidestyles from "../../styles/apps/SkillsSlider.module.scss";
import styles from "../../styles/apps/Skills.module.scss";

export const Recommendations = () => {
	const recommendations = [
		{
			name: "Felix Awortwe Kwamena",
			role: "Junior Python Developer",
			image: "https://res.cloudinary.com/dzqbzqgjw/image/upload/v1599087361/felix_awortwe_kwamena_qjqjqz.png",
			text: `I know only some few good Developers and Anderson is  a part of it .
			He knows what to do and when to do it , I am happy to be connected to such a Determined Dev, I know you deserve more`,
			link: "https://www.linkedin.com/in/felix-awortwe-kwamena-%F0%9F%87%AC%F0%9F%87%AD-4644a7140/"
		},
		{
			name: "Edem Morny",
			role: "CEO",
			company: "Amatsii",
			image: "https://res.cloudinary.com/dzqbzqgjw/image/upload/v1599087361/felix_awortwe_kwamena_qjqjqz.png",
			text: `Paa-Kofi is a passionate software developer who has a keen interest in learning and building his skill set up. He's not afraid to take up new challenges,
			and applies himself diligently to the task at hand. He also helps other developers whenever he can, with the goal of ensuring that his team is capable of 
			delivering as expected. He's an invaluable member of any team, and i'm glad for our ongoing association with him.`,
			link: "https://www.linkedin.com/in/felix-awortwe-kwamena-%F0%9F%87%AC%F0%9F%87%AD-4644a7140/"
		}

	]
	return (
		<div className={`${styles.card}`}>
			<AwesomeSlider organicArrows bullets={false} className={`${styles.slider}`} cssModule={[Slidestyles]} style={{ maxHeight: "25rem", }}>
				{recommendations.map(({ text, name, image, role, company, link }) => (<div className={`${styles.cardIn}`}>
					<img className={`icon ${styles.avatar}`} src={image} />
					<h2 className={`${styles.title}`}>{name},
						<br />
						<span>{role}</span>,
						<span> {company}</span>
					</h2>
					<p className={`${styles.text}`}>
						{text}
					</p>
					<a href={link}>link to contact</a>
				</div>))}

			</AwesomeSlider>
		</div>
	);
};
