import React, { Component } from "react";
import styles from "../../styles/Intro.module.css";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "react-lottie";
import fb from "../../public/animations/facebook3dbutton.json";
import email from "../../public/animations/emailtitle.json";
import instagram from "../../public/animations/instagrambuttonflat3d.json";
import twitter from "../../public/animations/twitterbutton3dflat.json";
import linkedin from "../../public/animations/linkedin.json";
import whatsapp from "../../public/animations/whatsapp.json";
import github from "../../public/animations/githubtest.json";
import call from "../../public/animations/phone-ringing.json";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.intro = React.createRef();
    this.avatar = React.createRef();
    this.state = {};
    this.hover = null;
  }
  contacts = [
    {
      name: "Facebook",
      src: "/contactIcons/facebook.svg",
      href: "https://web.facebook.com/paakofi.aidoo",
      fa: faFacebook,
      animation: fb,
    },
    {
      name: "instagram",
      src: "/contactIcons/instagram.svg",
      href: "https://www.instagram.com/pk_aidoo",
      fa: faInstagram,
      animation: instagram,
    },
    {
      name: "twitter",
      src: "/contactIcons/twitter.svg",
      href: "https://twitter.com/PaaKofiaidoo2",
      fa: faTwitter,
      animation: twitter,
    },
    {
      name: "linkedin",
      src: "/contactIcons/linkedin.svg",
      href: "https://www.linkedin.com/in/paa-kofi-aidoo-a98036183/",
      fa: faLinkedin,
      animation: linkedin,
    },
    {
      name: "whatsapp",
      src: "/contactIcons/whatsapp.svg",
      href: "https://wa.me/233202396856",
      fa: faWhatsapp,
      animation: whatsapp,
    },
    {
      name: "github",
      src: "/contactIcons/github.svg",
      href: "https://github.com/paakofiaidoo",
      fa: faGithub,
      animation: github,
    },
    {
      name: "Email",
      src: "/contactIcons/mail.svg",
      href: "mailto:paakofiaidoo17@gmail.com",
      fa: faMailBulk,
      animation: email,
    },
    {
      name: "call",
      src: "/contactIcons/telephone.svg",
      href: "tel:+233553214812",
      fa: faPhone,
      animation: call,
    },
  ];
  defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  componentDidMount() {
    this.intreact();
  }

  intreact = () => {
    let container = this.intro.current;
    let inner = this.avatar.current;
    let newStyle = "rotateX(0.05deg) rotateY(-0.24deg)";

    let mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function (event) {
        let e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function (e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function () {
        return "(" + this.x + ", " + this.y + ")";
      },
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    //----------------------------------------------------

    let counter = 0;
    let refreshRate = 10;
    let isTimeToUpdate = function () {
      return counter++ % refreshRate === 0;
    };

    //----------------------------------------------------

    let onMouseEnterHandler = function (event) {
      update(event);
    };

    let onMouseLeaveHandler = function () {
      inner.style = "";
    };

    let onMouseMoveHandler = function (event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //----------------------------------------------------

    let update = function (event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    let updateTransformStyle = function (x, y) {
      let style =
        "rotateX(" +
        angleTransform(x) +
        "deg) rotateY(" +
        angleTransform(y) +
        "deg)";
      newStyle = style;
      setStyle(style);
    };
    let angleTransform = (val) => {
      val = parseFloat(val) * 40;
      if (val < 0) {
        return val;
      } else {
        return val;
      }
    };

    //--------------------------------------------------------
    let setStyle = (newStyle) => {
      this.setState({ transform: newStyle });
    };

    container.onmousemove = onMouseMoveHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmouseenter = onMouseEnterHandler;
  };

  render() {
    return (
      <div id="intro" className={styles.intro} ref={this.intro}>
        <img
          src="/brand/vector/default-monochrome.svg"
          alt="profile pic"
          className={styles.avatar}
          ref={this.avatar}
          style={this.state}
          load="lazy"
        />
        <div className={styles.details}>
          <div className={styles.contactName}>
            {this.contacts
              .slice(0, 3)
              .map(({ href, src, name, fa, animation }, index) => {
                return this.Icon(index, href, animation, name, fa);
              })}
          </div>
          <div className={styles.contactName}>
            {this.contacts
              .slice(3, 6)
              .map(({ href, src, name, fa, animation }, index) => {
                return this.Icon(index, href, animation, name, fa);
              })}
          </div>
          <div className={styles.contactName}>
            {this.contacts
              .slice(6)
              .map(({ href, src, name, fa, animation }, index) => {
                return this.Icon(index, href, animation, name, fa);
              })}
          </div>
        </div>
      </div>
    );
  }

  Icon(index, href, animation, name, fa) {
    return (
      <li key={index}>
        <a target="_blank" href={href} rel="noreferrer">
          {animation ? (
            <Lottie
              options={{ ...this.defaultOptions, animationData: animation }}
              height={"100%"}
              width={"6rem"}
              title={name}
              className={styles.contact}
              isPaused={this.hover === index}
              style={{ overflow: "visible" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={fa}
              className={styles.contact}
              color="#25BBA8"
              alt={name}
              title={name}
            />
          )}
        </a>
      </li>
    );
  }
}

export default Intro;
