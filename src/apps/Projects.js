import AwesomeSlider from "react-awesome-slider";
import styles from "../../styles/apps/Projects.module.scss";
import stylesCos from "../../styles/apps/ProjectsCos.module.scss";

const Projects = () => {
  const projects = [
    {
      name: "artisanHR",
      href: "https://artsan-hr.herokuapp.com",
      description: "artisan service center",
      img: { imgDesk: "/projects/artisan-hr.png", imgMob: "/projects/artsan-hr-mob.jpg" },
      scrollDesk: true,
      scrollMob: false,
    },
    {
      name: "karibe valley farms",
      href: "karibe-valley-farms.vercel.app",
      description: "website for karibe-valley-farms",
      img: { imgDesk: "/projects/karibe.png", imgMob: "/projects/karibe-mobi.png" },
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
      img: { imgDesk: "/projects/special relativity.png", imgMob: "" },
      noMobile: true
    }, {
      name: "nonimous",
      href: "https://github.com/paakofiaidoo/nonymous-chat",
      description: "live web messenger with web socket ",
      img: { imgDesk: "/projects/nonymous-chat.png", imgMob: "" },
    },
    , {
      name: "codepen",
      href: "https://codepen.io/paakofiaidoo",
      description: " this contains my playground of works",
      img: { imgDesk: "/projects/codepen.jpeg", imgMob: "/projects/codepenMobi.jpeg" },
    }
  ];
  //https://codepen.io/paakofiaidoo
  return (
    <div>
      <AwesomeSlider
        fillParent
        bullets={false}
        organicArrows
        mobileTouch
        cssModule={[styles]}
        media={[]}
      >
        {projects.map(
          ({ name, href, description, img, scrollDesk = false, scrollMob = false, noMobile = false }, i) => {
            return ProjectSlide(name, description, href, img, scrollDesk, scrollMob, noMobile, i);
          }
        )}

      </AwesomeSlider>
    </div>
  );
};

export default Projects;
const ProjectSlide = (name, description, href, { imgDesk, imgMob }, scrollDesk, scrollMob, noMobile, i) => {
  console.log(scrollMob, scrollDesk);
  return (
    <div className={stylesCos.slide} key={i}>
      <div className={stylesCos.img}>
        <div id={stylesCos.phone} style={{ display: noMobile ? "none" : "" }} >
          <div id={stylesCos.back}></div>
          <div id={stylesCos.front}></div>
          <div id={stylesCos.camera}></div>
          <div id={stylesCos.button}></div>
          <div id={stylesCos.display}>
            <span className={stylesCos.upperbefore}>
              <img
                className={`${scrollMob ? stylesCos.scrollMin : ""}`}
                src={imgMob ? imgMob : imgDesk}
                alt={name}
              />
            </span>
          </div>
        </div>
        <div className={stylesCos.laptop}>
          <div className={stylesCos.upper}>
            <span className={` ${stylesCos.upperbefore}`}>
              <img
                className={`${scrollDesk ? stylesCos.scroll : ""}`}
                src={imgDesk}
                alt={name}
              />
            </span>
          </div>
          <div className={stylesCos.lower}></div>
        </div>
      </div>
      <div className={stylesCos.caption} data-type="caption">

        <h3>{name}</h3> ; <span>{description}</span>
        <a href={href}>View work</a>

      </div>
    </div>
  );
}
