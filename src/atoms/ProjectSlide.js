import stylesCos from "../../styles/apps/ProjectsCos.module.scss";
import Browsers from "../atoms/Browsers";
import React from "react";

export const ProjectSlide = (name, description, href, { imgDesk, imgMob }, i) => {
    return (
        <div className={stylesCos.slide} key={i}>
            <Browsers mobile={imgMob ? imgMob : imgDesk} desktop={imgDesk} />
            <div className={stylesCos.caption} data-type="caption">
                <h3>
                    <a target="_blank" href={href}>
                        {name}
                    </a>
                </h3>
                <span>{description}</span>
            </div>
        </div>
    );
};
