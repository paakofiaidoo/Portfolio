import Head from "next/head";
import styles from "../styles/Home.module.css";
import Intro from "./components/Intro"

const Home = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Paa-Kofi Aidoo</title>
				<link rel="icon" href="/brand/logo.svg" height='100%' width='100%' />
			</Head>
			<main className={styles.main}>
				<div className={styles.overlay}>
					<Intro />
				</div>
			</main>
		</div>
	);
};


	


export default Home;
