import Layout from "../src/components/Layout";
import Application from "../src/atoms/Application";
import { useState } from "react";
import About from "../src/apps/About";
import Skills from "../src/apps/Skills";
import Projects from "../src/apps/Projects";
import Contact from "../src/apps/Contact";
import { faUserAstronaut, faProjectDiagram, faAddressBook, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import avatar from "../public/animations/user.json";
import skills from "../public/animations/dumbleiconfitnesshealth.json";
import projects from "../public/animations/balanceloop.json";
import contact from "../public/animations/contact.json";

const Home = () => {
	const [apps, setApps] = useState([
		{
			id: 1,
			title: "About Me",
			isActive: false,
			icon: "/navIcons/man.svg",
			fa: faUserAstronaut,
			animation: avatar,
			content: <About />,
		},
		{
			id: 2,
			title: "Skills",
			isActive: false,
			icon: "/navIcons/competence.svg",
			content: <Skills />,
			fa: faLaptopCode,
			animation: skills,
		},
		{
			id: 3,
			title: "Projects",
			isActive: false,
			icon: "/navIcons/project.svg",
			fa: faProjectDiagram,
			content: <Projects />,
			animation: projects,
		},
		{
			id: 4,
			title: "Contact",
			isActive: false,
			icon: "/navIcons/contact.svg",
			content: <Contact />,
			fa: faAddressBook,
			animation: contact,
			speed: 0.4,
		},
	]);
	const [indexes, setIndexes] = useState([]);

	const open = (idn) => {
		const newApps = apps.map((app) => {
			const newApp = { ...app };
			const { isActive, id } = newApp;
			if (id === idn) {
				if (!isActive) {
					newApp.isActive = true;
					setIndexes((cur) => {
						return [...cur, newApp];
					});
				} else {
					setIndexes((cur) => {
						return [...cur.filter(({ id }) => id !== idn), newApp];
					});
				}
			}
			return newApp;
		});
		setApps(newApps);
	};
	const close = (idn) => {
		const newApps = apps.map((app) => {
			const newApp = { ...app };
			const { isActive, id } = newApp;
			if (id === idn) {
				if (isActive) {
					newApp.isActive = false;
					setIndexes((cur) => {
						return cur.filter(({ id }) => id !== idn);
					});
				}
			}
			return newApp;
		});
		setApps(newApps);
	};

	return (
		<Layout open={open} apps={apps}>
			{indexes.map((app, i) => (
				<Application close={close} app={app} layer={i} key={i}>
					<>{app.content}</>
				</Application>
			))}
		</Layout>
	);
};

// export async function getStaticProps(context) {
//   const url = !process.env.VERCEL_URL
//     ? `http://localhost:3000/api/animations`
//     : `https://${process.env.VERCEL_URL}/api/animations`;

//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data);
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       ... await data,
//     }, // will be passed to the page component as props
//   };
// }

export default Home;
