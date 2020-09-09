import React, { useState } from "react";
import styles from "../../styles/Browser.module.css";

function Browser(props) {
	const [nav, setNav] = useState([
		{
			id: 1,
			title: "contact",
			isActive: true,
			icon: "/navIcons/contact.svg",
		},
		{
			id: 2,
			title: "skills",
			isActive: false,
			icon: "/navIcons/competence.svg",
		},
		{
			id: 3,
			title: "about me",
			isActive: false,
			icon: "/navIcons/man.svg",
		},
		{
			id: 4,
			title: "projects",
			isActive: false,
			icon: "/navIcons/project.svg",
		},
		{
			id: 5,
			title: "resume",
			isActive: false,
			icon: "/navIcons/resume.svg",
		},
	]);

	const [window, setWindow] = useState({ isActive: true });

	const setNavActive = (id) => {
		setNav((prevNav) => {
			return prevNav.map((menu) => {
				if (menu.id === id) {
					menu.isActive = true;
				} else {
					menu.isActive = false;
				}
				return menu;
			});
		});
	};
	const setWindowActive = (state) => {
		setWindow({ isActive: state });
	};

	const Window = (content) => {
		return (
			<div className={styles.browser}>
				<div className={styles.overlay}>
					<div className={styles.nav}>
						<ul>
							{nav.map((menu, index) => (
								<li
									className={menu.isActive ? styles.isActive : styles.notActive}
									key={index}
								>
									<a onClick={setNavActive.bind(this, menu.id)}>
										<img
											src={menu.icon}
											className={styles.navIcon}
											alt={menu.title}
										/>
										{menu.title}
									</a>
								</li>
							))}
						</ul>
						<span
							className={styles.cancel}
							onClick={setWindowActive.bind(this, false)}
						></span>
					</div>
					<div className={styles.content}>{content}</div>
				</div>
			</div>
		);
	};
	const Icon = () => {
		return (
			<div
				onClick={setWindowActive.bind(this, true)}
				className={styles.background}
			>
				<div className={styles.overlay}>
					<img
						src="/brand/logo.svg"
						alt="Paa-Kofi Aidoo"
						className={styles.backIcon}
					/>
					<p>Paa-Kofi Aidoo</p>
				</div>
			</div>
		);
	};

	return window.isActive ? Window(props.children) : Icon();
}

export default Browser;
