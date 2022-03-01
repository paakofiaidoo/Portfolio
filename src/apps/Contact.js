import React, { Component } from "react";
import styles from "../../styles/apps/Contact.module.scss";
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
import { logEventFun } from "../firebase";

const Intro = () => {

  const contacts = [
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
      href: "https://twitter.com/PaaKofiaidoo",
      fa: faTwitter,
      animation: twitter,
    },
    {
      name: "linkedin",
      src: "/contactIcons/linkedin.svg",
      href: "https://www.linkedin.com/in/paakofiaidoo/",
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



  return (
    <div id="intro" className={styles.intro} >
      <img
        src="./brand/vector/default-monochrome.svg"
        alt="profile pic"
        className={`${styles.mobile} ${styles.avatar}`}
        load="lazy"
      />
      <div className={styles.details}>
        <div className={styles.contactName}>
          {contacts
            .slice(0, 3)
            .map(({ href, name, fa, animation }, index) => {
              return Icon(index, href, animation, name, fa);
            })}
        </div>
        <div className={styles.contactName}>
          {contacts
            .slice(3, 6)
            .map(({ href, name, fa, animation }, index) => {
              return Icon(index, href, animation, name, fa);
            })}
        </div>
        <div className={styles.contactName}>
          {contacts
            .slice(6)
            .map(({ href, name, fa, animation }, index) => {
              return Icon(index, href, animation, name, fa);
            })}
        </div>
      </div>
    </div>
  );



}

export default Intro;
const Icon = (index, href, animation, name, fa) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <li key={index}>
      <a target="_blank" href={href}
        onClick={() => {
          logEventFun(`used contact ${name}`);
        }}
        rel="noreferrer">
        {animation ? (
          <Lottie
            options={{ ...defaultOptions, animationData: animation }}
            height={"100%"}
            width={"6rem"}
            title={name}
            className={styles.contact}
            // isPaused={hover === index}
            style={{ overflow: "visible" }} />
        ) : (
          <FontAwesomeIcon
            icon={fa}
            className={styles.contact}
            color="#25BBA8"
            alt={name}
            title={name} />
        )}
      </a>
    </li>
  );
}

