import Nav from "../atoms/Nav";
import Head from "next/head";
import styles from "../../styles/Layout.module.scss";

const Layout = ({ children, apps, open }) => {

	let stars = [];
	for (let i = 0; i < 20; i++) {
		stars.push(i);
	}


	return (
		<>


			{/* style={{ backgroundImage: "url('./img/man-and-space.jpg')" }}  */}
			<div className={`${styles.body}`} >
				{/* <video autoPlay muted loop className={`${styles.myVideo}`}  >
					<source src="./videos/Space.mp4" type="video/mp4" />
					<source src="./videos/Mountain.mp4" type="video/mp4" />
					<source src="./videos/Nebula Blue.mp4" type="video/mp4" />
					<source src="./videos/Nebula.mp4" type="video/mp4" />
				</video> */}
				<div className={`${styles.night}`}>
					{stars.map((star, i) => (
						<div key={i} className={`${styles.shooting_star}`} ></div>
					))}
				</div>
				<main className={`main ${styles.main}`}>{children}</main>
				<Nav links={apps} open={open} />
			</div>
		</>
	);
};

export default Layout;
