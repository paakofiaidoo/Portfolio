import AwesomeSlider from "react-awesome-slider";
//import "react-awesome-slider/dist/styles.css";
import styles from "../../styles/apps/Projects.module.scss";

const Projects = () => {
  const projects = [
    {
      name: "artisanHR",
      href: "https://artsan-hr.herokuapp.com",
      description: "",
      img: "/projects/artisan-hr.png",
    },
    {
      name: "karibe",
      href: "karibe-valley-farms.vercel.app/",
      description: "",
      img: "/projects/karibe.png",
    },
    {
      name: "nonimous",
      href: "https://artsan-hr.herokuapp.com",
      description: " ",
      img: "/projects/nonimous-chat.png",
    },
    {
      name: "uv sterilizer",
      href: "karibe-valley-farms.vercel.app/",
      description: "",
      img: "/projects/karibe.png",
    },
    {
      name: "Special relativity calculator",
      href: "https://artsan-hr.herokuapp.com",
      description: "",
      img: "/projects/karibe.png",
    },
  ];
  return (
    <AwesomeSlider
      fillParent
      cssModule={[styles]}
      customContent={<Test />}>
      {projects.map(({ name, href, description, img }) => {
        return (
          <div>
            <img src={img} alt={name} />
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        );
      })}
    </AwesomeSlider>
  );
};
const Test = () => {
  return (
    <div>
      <h1>this is Skills</h1>
    </div>
  );
};

export default Projects;
