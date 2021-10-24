import AwesomeSlider from "react-awesome-slider";
//import "react-awesome-slider/dist/styles.css";
import styles from "../../styles/apps/Projects.module.scss";
import stylesCos from "../../styles/apps/ProjectsCos.module.scss";
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
      img: "/projects/karibe-valley-farms-vercel-app-480x800phone-08dd37.png",
    },
    {
      name: "Special relativity calculator",
      href: "https://artsan-hr.herokuapp.com",
      description: "",
      img: "/projects/karibe.png",
    },
  ];
  return (
    <>

      <AwesomeSlider
        fillParent
        cssModule={[styles]}
      >
        {projects.map(({ name, href, description, img }) => {
          return (
            <div className={stylesCos.slide}>
              <div id={stylesCos.phone}>
                <div id={stylesCos.back}></div>
                <div id={stylesCos.front}></div>
                <div id={stylesCos.camera}></div>
                <div id={stylesCos.button}></div>
                <div id={stylesCos.display}>
                  <span className={stylesCos.upperbefore}>
                    <img className={`${stylesCos.scrollMin}`} src="/projects/karibe.png" alt="" />
                  </span>
                </div>
              </div>
              <div className={stylesCos.laptop}>
                <div className={stylesCos.upper}>
                  <span className={` ${stylesCos.upperbefore}`}>
                    <img className={`${stylesCos.scroll}`} src="/projects/karibe.png" alt="" />
                  </span>
                </div>
                <div className={stylesCos.lower}></div>
              </div>

              
            </div>
          );
        })}
      </AwesomeSlider>
    </>
  );
};

export default Projects;
