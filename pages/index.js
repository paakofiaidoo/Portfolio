import Layout from "./components/Layout";
import Intro from "./components/Intro";
import Application from "./components/Application";
import { useState } from "react";

const Home = () => {
  const [apps, setApps] = useState([
    {
      id: 1,
      title: "contact",
      isActive: false,
      icon: "/navIcons/contact.svg",
      index: 0,
    },
    {
      id: 2,
      title: "skills",
      isActive: false,
      icon: "/navIcons/competence.svg",
      index: 0,
    },
    {
      id: 3,
      title: "about me",
      isActive: false,
      icon: "/navIcons/man.svg",
      index: 0,
    },
    {
      id: 4,
      title: "projects",
      isActive: false,
      icon: "/navIcons/project.svg",
      index: 0,
    },
    {
      id: 5,
      title: "resume",
      isActive: false,
      icon: "/navIcons/resume.svg",
      index: 0,
    },
  ]);
  const [indexes, setIndexes] = useState([]);
  const open = (idn) => {
    const newApps = apps.map(({ id, isActive, title, icon }) => {
      if (id === idn) {
        if (!isActive) {
          isActive = true;
          setIndexes((cur) => {
            return [...cur, id];
          });
        }
      }
      return { id, title, isActive, icon };
    });
    setApps(newApps);
  };
  const close = (idn) => {
    const newApps = apps.map(({ id, isActive, title, icon }) => {
      if (id === idn) {
        if (isActive) {
          isActive = false;
          setIndexes((cur) => {
            return cur.filter(({ id }) => id !== idn);
          });
        }
      }
      return { id, title, isActive, icon };
    });
    setApps(newApps);
  };
  return (
    <Layout open={open} apps={apps}>
      <Application close={close}>
        <Intro />
      </Application>
    </Layout>
  );
};

export default Home;
