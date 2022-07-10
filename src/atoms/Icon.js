import React from "react";
import styles from "../../styles/apps/Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "react-lottie";
import toast from "react-hot-toast";

export const Icon = (index, href, animation, name, fa, link) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <li key={index}>
      <a
        target="_blank"
        // href={href}
        onDoubleClick={(e) => {
          e.preventDefault();
          window.open(href);
        }}
        onClick={async (e) => {
          e.preventDefault();
          // if avalable to compy to clipboard then do it else try the share api else show the toast with the link
          if (navigator.clipboard) {
            navigator.clipboard.writeText(link ? link : href);
            toast.success("Copied to clipboard");
          } else if (navigator.share) {
            await navigator
              .share({ title: name, url: link ? link : href, text: name })
              .then(() => {
                toast.success("Copied to clipboard");
              })
              .catch(() => {
                toast.error("Error copying to clipboard");
              });
          } else {
            toast.error(
              `Error copying to clipboard, please select it link from here:
            \n ${link ? link : href}`,
              { duration: 10000 }
            );
          }
        }}
        rel="noreferrer"
      >
        {animation ? (
          <Lottie
            options={{ ...defaultOptions, animationData: animation }}
            height={"100%"}
            width={"6rem"}
            title={name}
            className={styles.contact}
            // isPaused={hover === index}
            style={{ overflow: "visible" }}
          />
        ) : (
          <FontAwesomeIcon icon={fa} className={styles.contact} color="#25BBA8" alt={name} title={name} />
        )}
      </a>
    </li>
  );
};
