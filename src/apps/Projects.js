import AwesomeSlider from "react-awesome-slider";
import styles from "../../styles/apps/Projects.module.scss";
import stylesCos from "../../styles/apps/ProjectsCos.module.scss";
import Browsers from "../atoms/Browsers";

const Projects = () => {
  const projects = [
    {
      name: "nonymous-chat",
      href: "nonymous-chat.vercel.app/",
      description: "a chat where you can feel free to say whatever you want, no one knows it is you",
      img: { imgDesk: "./projects/nonymous-chat.jpeg", imgMob: "/projects/nonymous (2).png" },
    }, {
      name: "juki-audio",
      href: "juki-audio-player.vercel.app/",
      description: "an audio player using the File System Access API",
      img: {
        imgDesk: "./projects/juki-aud.png", imgMob: "/projects/juki-aud-m.jpeg"
      },
    },
    {
      name: "artisanHR",
      href: "artsan-hr.herokuapp.com",
      description: "artisan service center",
      img: { imgDesk: "./projects/artisan-hr.png", imgMob: "./projects/artsan-hr-mob.jpg" },
      scrollDesk: true,
      scrollMob: false,
    },
    {
      name: "karibe valley farms",
      href: "karibe-valley-farms.vercel.app",
      description: "website for karibe-valley-farms",
      img: { imgDesk: "./projects/karibe.png", imgMob: "./projects/karibe-mobi.png" },
      scrollDesk: true,
      scrollMob: false,
    },
    // {
    //   name: "uv sterilizer",
    //   href: "https://artsan-hr.herokuapp.com",
    //   description: "",
    //   img: { imgDesk: "/projects/artisan-hr.png", imgMob: "" },
    // },
    {
      name: "Special relativity calculator",
      href: "https://github.com/paakofiaidoo/Special-reletivity-app",
      description: "a calculator to for problems in special relativity built with C++",
      img: { imgDesk: "./projects/special relativity.png", imgMob: "" },
      noMobile: true,
    },
    ,
    {
      name: "codepen",
      href: "https://codepen.io/paakofiaidoo",
      description: " this contains my playground of works",
      img: { imgDesk: "./projects/codepen.jpeg", imgMob: "./projects/codepenMobi.jpeg" },
    },
  ];
  return (
    <div>
      <AwesomeSlider fillParent bullets={false} organicArrows mobileTouch cssModule={[styles]} media={[]}>
        {projects.map(({ name, href, description, img, scrollDesk = false, scrollMob = false, noMobile = false }, i) => {
          return ProjectSlide(name, description, href, img, scrollDesk, scrollMob, noMobile, i);
        })}
      </AwesomeSlider>
    </div>
  );
};

export default Projects;
const ProjectSlide = (name, description, href, { imgDesk, imgMob }, scrollDesk, scrollMob, noMobile, i) => {
    return (
        <div className={stylesCos.slide} key={i}>
            <div className={stylesCos.caption} data-type="caption">
                <h3>
                    <a target="_blank" href={href}>
                        {name}{" "}
                    </a>
                </h3>{" "}
                <span></span> : <span>{description}</span>
            </div>

            <Browsers mobile={imgMob ? imgMob : imgDesk} desktop={imgDesk}/>
            {/* <div className={stylesCos.img}>
                <div id={stylesCos.phone} style={{ display: noMobile ? "none" : "" }}>
                    <div id={stylesCos.back}></div>
                    <div id={stylesCos.front}></div>
                    <div id={stylesCos.camera}></div>
                    <div id={stylesCos.button}></div>
                    <div id={stylesCos.display}>
                        <span className={stylesCos.upperbefore}>
                            <img className={`${scrollMob ? stylesCos.scrollMin : ""}`} src={imgMob ? imgMob : imgDesk} alt={name} />
                        </span>
                    </div>
                </div>
                <div className={stylesCos.laptop}>
                    <div className={stylesCos.upper}>
                        <span className={` ${stylesCos.upperbefore}`}>
                            <img className={`${scrollDesk ? stylesCos.scroll : ""}`} src={imgDesk} alt={name} />
                        </span>
                    </div>
                    <div className={stylesCos.lower}></div>
                </div>
            </div> */}
        </div>
    );
};
