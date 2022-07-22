import Layout from "../src/components/Layout";
import Application from "../src/atoms/Application";
import { useState, useEffect } from "react";
import About from "../src/apps/About";
import Skills from "../src/apps/Skills";
import Projects from "../src/apps/Projects";
import Contact from "../src/apps/Contact";
import { faUserAstronaut, faProjectDiagram, faAddressBook, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import {  faTelegram } from "@fortawesome/free-brands-svg-icons";
import { logEventFun } from "../src/firebase";
import React from "react";
import Message from "../src/apps/Message";

const Home = () => {
    const [apps, setApps] = useState([
        {
            id: 0,
            title: "About Me",
            isActive: false,
            icon: "/navIcons/man.svg",
            fa: faUserAstronaut,
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
            nav: true,
        },
        {
            id: 2,
            title: "Projects",
            isActive: false,
            icon: "/navIcons/project.svg",
            fa: faProjectDiagram,
            content: <Projects />,
            nav: true,
        },
        {
            id: 3,
            title: "Contact",
            isActive: false,
            icon: "/navIcons/contact.svg",
            content: <Contact />,
            fa: faAddressBook,
            speed: 0.4,
            nav: true,
        },
        {
            id: 4,
            title: "Message Me",
            isActive: false,
            icon: "/navIcons/contact.svg",
            content: <Message />,
            fa: faTelegram,
        },
    ]);
    const [indexes, setIndexes] = useState([]);

    useEffect(() => {
        // open(0);
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
        <Layout open={open} apps={apps} navApps={navApps}>
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
