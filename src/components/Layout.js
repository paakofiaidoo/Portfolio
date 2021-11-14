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
			</Head>
			<div className={`${styles.body}`} style={{ backgroundImage: "url('./img/man-and-space.jpg')" }} >
				<main className={`main ${styles.main}`}>{children}</main>
				<Nav links={apps} open={open} />
			</div>
		</>
	);
};

export default Layout;
