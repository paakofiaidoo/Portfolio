import Nav from "../atoms/Nav";
import Head from "next/head";
import styles from "../../styles/Layout.module.scss";

const Layout = ({ children, apps, open }) => {
	return (
		<>
			<Head>
				<title>Paa-Kofi Aidoo</title>
				<link rel="icon" href="/brand/logo.svg" height="100%" width="100%" />
				<meta name="description" content="My portfolio website" />
				<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
				<script src="./particle.js"></script>
			</Head>

			{/* style={{ backgroundImage: "url('./img/man-and-space.jpg')" }}  */}
			<head style={{ display: "none" }} >
				René Descartes said, "cogito, ergo sum",  (Latin: “I think, therefore I am),
				so firstly I am thinking thing and a good thinker if I might add, I prioritize a good mental well being .
				I am a passionate person who loves to learn and seek to apply knowledge in to solutions.
				I sleep and wake up with technology on my mind always trying to be in step with the latest technology
				I am always looking for new ways to improve myself and my work.
				I work well with persons with different backgrounds and personalities in both remote and physical work environments.
			</head>
			<div className={`${styles.body}`} >
				<video autoPlay muted loop className={`${styles.myVideo}`}  >
					<source src="./videos/Space.mp4" type="video/mp4" />
					<source src="./videos/Mountain.mp4" type="video/mp4" />
					<source src="./videos/Nebula Blue.mp4" type="video/mp4" />
					<source src="./videos/Nebula.mp4" type="video/mp4" />
				</video>
				<main className={`main ${styles.main}`}>{children}</main>
				<Nav links={apps} open={open} />
			</div>
		</>
	);
};

export default Layout;
