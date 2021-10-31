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
      img: { phone: "/projects/artisan-hr.png", desktop: "" },
      scroll: true,
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
      <AwesomeSlider fillParent bullets={false} organicArrows mobileTouch cssModule={[styles]}>
        {projects.map(({ name, href, description, imgDesk, imgMob, scroll = false }) => {
          return (
						<div className={stylesCos.slide}>
							<div className={stylesCos.img}>
								<div id={stylesCos.phone}>
									<div id={stylesCos.back}></div>
									<div id={stylesCos.front}></div>
									<div id={stylesCos.camera}></div>
									<div id={stylesCos.button}></div>
									<div id={stylesCos.display}>
										<span className={stylesCos.upperbefore}>
											<img className={`${scroll ? stylesCos.scrollMin : ""}`} src="/projects/karibe.png" alt="" />
										</span>
									</div>
								</div>
								<div className={stylesCos.laptop}>
									<div className={stylesCos.upper}>
										<span className={` ${stylesCos.upperbefore}`}>
											<img className={`${scroll ? stylesCos.scroll : ""}`} src="/projects/karibe.png" alt="" />
										</span>
									</div>
									<div className={stylesCos.lower}></div>
								</div>
							</div>
							<div data-type="caption">
								<p>
									<h3>{name}</h3>:<span>{description}</span>
									<a href={href}>View projects</a>
								</p>
							</div>
						</div>
					);
        })}
      </AwesomeSlider>
    </>
  );
};

export default Projects;
