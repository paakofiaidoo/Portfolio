import Layout from "../src/components/Layout";
import Application from "../src/atoms/Application";
import { useState, useEffect } from "react";
import About from "../src/apps/About";
import Skills from "../src/apps/Skills";
import Projects from "../src/apps/Projects";
import Contact from "../src/apps/Contact";
import { faUserAstronaut, faProjectDiagram, faAddressBook, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import avatar from "../public/animations/user.json";
import skills from "../public/animations/dumbleiconfitnesshealth.json";
import projects from "../public/animations/balanceloop.json";
import contact from "../public/animations/contact.json";
import { logEventFun } from "../src/firebase";

const Home = () => {
    const [apps, setApps] = useState([
        {
            id: 0,
            title: "About Me",
            isActive: false,
            icon: "/navIcons/man.svg",
            fa: faUserAstronaut,
            animation: avatar,
            content: <About />,
            nav: true,
        },
        {
            id: 1,
            title: "Skills",
            isActive: false,
            icon: "/navIcons/competence.svg",
            content: <Skills />,
            fa: faLaptopCode,
            animation: skills,
            nav: true,
        },
        {
            id: 2,
            title: "Projects",
            isActive: false,
            icon: "/navIcons/project.svg",
            fa: faProjectDiagram,
            content: <Projects />,
            animation: projects,
            nav: true,
        },
        {
            id: 3,
            title: "Contact",
            isActive: false,
            icon: "/navIcons/contact.svg",
            content: <Contact />,
            fa: faAddressBook,
            animation: contact,
            speed: 0.4,
            nav: true,
        },
    ]);
    const [indexes, setIndexes] = useState([]);

    useEffect(() => {
        open(0);
    }, []);

    const open = (idn) => {
        // if app is in index remove it from list and add it to the end or just push it to the list
        if (indexes.includes(idn)) {
            setIndexes((cur) => {
                return [...cur.filter((id) => id !== idn), idn];
            });
        } else {
            setIndexes((cur) => {
                return [...cur, idn];
            });
        }
    };
    // logEventFun(newApp.title);
    const close = (idn) => {
        //remove id from list
        setIndexes((cur) => {
            return [...cur.filter((id) => id !== idn)];
        });
    };
    const navApps = apps
        .filter(({ nav }) => nav)
        .map((app) => {
            return indexes.includes(app.id) ? { ...app, isActive: true } : app;
        });
    return (
        <Layout open={open} navApps={navApps}>
            {indexes.map((index, i) => (
                <Application close={close} app={apps[index]} layer={i} key={i}>
                    <>{apps[index].content}</>
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
