import Layout from "../../src/components/Layout";
import Application from "../../src/atoms/Application";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { faSmileBeam } from "@fortawesome/free-solid-svg-icons";
import styles from '../../styles/hbd.module.scss'


const Home = () => {
	const router = useRouter()
	const { name } = router.query
	useEffect(() => { }, []);

	return (
		<Layout open={() => { }} apps={[]}>
			<Application close={() => { }} app={{
				id: 1,
				title: "Happy Birthday",
				isActive: false,
				icon: "/navIcons/man.svg",
				fa: faSmileBeam,
			}}  >
				<div className={styles.card} >
					<img src="https://raw.githubusercontent.com/DenverCoder1/Responsive-Birthday-Card/main/birthday.svg" alt="birthday" className={styles.birthday} />
					<div className={styles.text}>
						<div className={styles.cake} >
							<div className={styles.velas} >
								<div className={styles.fuego}  />
								<div className={styles.fuego}  />
								<div className={styles.fuego}  />
								<div className={styles.fuego}  />
								<div className={styles.fuego}  />
							</div>
							<div className={styles.cobertura}  />
							<div className={styles.bizcocho}  />
						</div>

						<h1>Happy Birthday!🥳{name}🥳</h1>
						<p>I hope you have a wonderful birthday</p>
						<p>And may God do for you what you can't do for yourself</p>
						<p class="muted">-😘Paa-Kofi</p>
					</div>
				</div>
			</Application>
		</Layout>
	);
};



export default Home;
