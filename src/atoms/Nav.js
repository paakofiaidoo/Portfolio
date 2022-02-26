import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "react-lottie";

const Nav = ({ links = [], open }) => {
	const [state, setState] = useState({
		id: null,
	});
	const defaultOptions = {
		loop: true,
		autoplay: true,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const interactivity = {
		mode: "cursor",
		actions: [
			{
				visibility: [0, 0.2],
				type: "stop",
				frames: [0],
			},
			{
				visibility: [0.2, 0.45],
				type: "seek",
				frames: [0, 45],
			},
			{
				visibility: [0.45, 1.0],
				type: "loop",
				frames: [45, 60],
			},
		],
	};
	return (
		<nav className={`navbar  ${styles.navbar}`}>
			<div className={`links  ${styles.links}`}>
				<>
					<li>
						<Image
							className={`icon ${styles.linksIcon}`}
							src="/brand/vector/default-monochrome.svg"
							alt="Paa-Kofi Aidoo logo"
							width={60}
							height={60}
						/>
					</li>

					{links.map(({ title, isActive, id, fa, animation, speed }, i) => (
						<li
							className={`${isActive ? styles.isActive : ""}`}
							onClick={() => {
								open(id);
							}}
							key={i}
							onMouseEnter={() => {
								if (state.id !== id) {
									setState((prev) => {
										return { ...prev, id };
									});
								}
							}}
							onMouseLeave={() => {
								setState({});
							}}>
							{animation ? (
								<div className={`${styles.anim}  ${styles.linksIcon}`}>
									<Lottie
										options={{ ...defaultOptions, animationData: animation }}
										height={"100%"}
										width={"100%"}
										title={title}
										className={styles.animation}
										speed={speed ? speed : 1}
										isStopped={state.id === id || isActive}
										style={{ height: "2.2rem" }}
										interactivity={interactivity}
									/>
								</div>
							) : (
								<FontAwesomeIcon className={` ${styles.linksIcon}`} title={title} icon={fa} color="#25BBA8" />
							)}

							<a href="#">{title}</a>
						</li>
					))}
				</>
				{/* <a style={{ display: "none" }} href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fpaakofiaidoo.tech&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false" /></a> */}
			</div>
		</nav>
	);
};

export default Nav;
