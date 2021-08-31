import Layout from "./components/Layout";
import Application from "./atoms/Application";
import { useState } from "react";
import About from "./apps/About";
import Skills from "./apps/Skills";
import Projects from "./apps/Projects";
import Contact from "./apps/Contact";
import {
  faUserAstronaut,
  faProjectDiagram,
  faAddressBook,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [apps, setApps] = useState([
    {
      id: 1,
      title: "about me",
      isActive: false,
      icon: "/navIcons/man.svg",
      fa: faUserAstronaut,
      content: <About />,
    },
    {
      id: 2,
      title: "skills",
      isActive: false,
      icon: "/navIcons/competence.svg",
      content: <Skills />,
      fa: faLaptopCode,
    },
    {
      id: 3,
      title: "projects",
      isActive: false,
      icon: "/navIcons/project.svg",
      fa: faProjectDiagram,
      content: <Projects />,
    },
    {
      id: 4,
      title: "contact",
      isActive: false,
      icon: "/navIcons/contact.svg",
      content: <Contact />,
      fa: faAddressBook,
    },
  ]);
  const [mousePosition, setMousePosition] = useState({ curX: 0, curY: 0 });
  const [indexes, setIndexes] = useState([]);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    dragEvent: false,
  });
  const { left, top, dragEvent } = position;
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
  const MouseMove = (e) => {
    //console.log(e.clientX, e.clientY, position);
    if (dragEvent) {
      setPosition((pre) => {
        pre.left = e.clientX;
        pre.top = e.clientY;
        return pre;
      });
    }

    return { x: e.clientX, y: e.clientY };
  };
  const dragFun = (e) => { };
  return (
    <Layout open={open} apps={apps} onMove={MouseMove}>
      {indexes.map((app, i) => (
        <Application
          close={close}
          app={app}
          layer={i}
          key={i}
          mousePosition={mousePosition}
          style={{ top: `${top}px`, left: `${left}px` }}
        >
          <>{app.content}</>
        </Application>
      ))}
    </Layout>
  );
};

export default Home;
