import Nav from "../atoms/Nav";
import Head from "next/head";
import styles from "../../styles/Layout.module.scss";

const Layout = ({ children, apps, open }) => {
	return (
		<>
			<Head>
				<title>Paa-Kofi Aidoo</title>
				<meta charSet="utf-8"></meta>
				<link rel="icon" href="/brand/logo.svg" height="100%" width="100%" />
				<meta name="description" content="Aidoo Paa-Kofi Anderson; Web developer, Electronics hobbist" />
				<meta name="robots" content="noindex,nofollow"></meta>
			</Head>

			{/* style={{ backgroundImage: "url('./img/man-and-space.jpg')" }}  */}
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
