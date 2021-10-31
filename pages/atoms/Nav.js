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

	return (
		<nav className={`navbar  ${styles.navbar}`}>
			<div className={`links  ${styles.links}`}>
				<>
					<li>
						<a
							style={{ display: "flex" }}
							href="/brand/cover.png"
							target="_blank"
							download
							title="Click to download Resume">
							<Image
								className={`icon ${styles.linksIcon}`}
								src="/brand/vector/default-monochrome.svg"
								alt="Paa-Kofi Aidoo logo"
								width={60}
								height={60}
							/>
						</a>
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
								<div>
									<Lottie
										className={` ${styles.linksIcon}`}
										options={{ ...defaultOptions, animationData: animation }}
										height={"100%"}
										width={"100%"}
										title={title}
										speed={speed ? speed : 1}
										isStopped={state.id === id || isActive}
										style={{ height: "2.5rem" }}
									/>
								</div>
							) : (
								<FontAwesomeIcon className={` ${styles.linksIcon}`} title={title} icon={fa} color="#25BBA8" />
							)}

							<a href="#">{title}</a>
						</li>
					))}
				</>
			</div>
		</nav>
	);
};

export default Nav;
