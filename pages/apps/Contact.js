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

class Intro extends Component {
  constructor(props) {
    super(props);
    this.intro = React.createRef();
    this.avatar = React.createRef();
    this.state = {};
  }
  contacts = [
    {
      name: "Facebook",
      src: "/contactIcons/facebook.svg",
      href: "https://web.facebook.com/paakofi.aidoo",
      fa: faFacebook,
    },
    {
      name: "instagram",
      src: "/contactIcons/instagram.svg",
      href: "https://www.instagram.com/pk_aidoo",
      fa: faInstagram,
    },

    {
      name: "twitter",
      src: "/contactIcons/twitter.svg",
      href: "https://twitter.com/PaaKofiaidoo2",
      fa: faTwitter,
    },
    {
      name: "linkedin",
      src: "/contactIcons/linkedin.svg",
      href: "https://www.linkedin.com/in/paa-kofi-aidoo-a98036183/",
      fa: faLinkedin,
    },
    {
      name: "whatsapp",
      src: "/contactIcons/whatsapp.svg",
      href: "https://wa.me/233202396856",
      fa: faWhatsapp,
    },
    {
      name: "github",
      src: "/contactIcons/github.svg",
      href: "https://github.com/paakofiaidoo",
      fa: faGithub,
    },
    {
      name: "Email",
      src: "/contactIcons/mail.svg",
      href: "mailto:paakofiaidoo17@gmail.com",
      fa: faMailBulk,
    },
    {
      name: "call",
      src: "/contactIcons/telephone.svg",
      href: "tel:+233202396856",
      fa: faPhone,
    },
  ];

  componentDidMount() {
    this.intreact();
  }

  intreact = () => {
    var container = this.intro.current;
    var inner = this.avatar.current;
    let newStyle = "rotateX(0.05deg) rotateY(-0.24deg)";

    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function (event) {
        var e = event || window.event;
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

    var counter = 0;
    var refreshRate = 10;
    var isTimeToUpdate = function () {
      return counter++ % refreshRate === 0;
    };

    //----------------------------------------------------

    var onMouseEnterHandler = function (event) {
      update(event);
    };

    var onMouseLeaveHandler = function () {
      inner.style = "";
    };

    var onMouseMoveHandler = function (event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //----------------------------------------------------

    var update = function (event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    var updateTransformStyle = function (x, y) {
      var style =
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
          {this.contacts.map(({ href, src, name, fa }, index) => (
            <li key={index}>
              <a target="_blank" href={href}>
                {!fa ? (
                  <img
                    src={src}
                    alt={name}
                    title={name}
                    className={styles.contact}
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
          ))}
        </div>
      </div>
    );
  }
}

export default Intro;
