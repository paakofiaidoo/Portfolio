import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/atoms/Nav.module.scss";
import React from "react";
import NavIcon from "./NavIcon";

const Nav = ({ links = [], open }) => {
    const [state, setState] = useState({
        id: null,
    });

    return (
        <nav className={`navbar  ${styles.navbar}`}>
            <ul className={`links ${styles.links}`}>
                <>
                    <li>
                        <a href="/">
                            <Image className={`icon ${styles.linksIcon}`} src="/brand/vector/default-monochrome.svg" alt="Paa-Kofi Aidoo logo" width={60} height={60} />
                        </a>
                    </li>

                    {links.map((link, i) => (
                        <NavIcon key={i} {...{ ...link, open, i, state, setState, classN: "link" }} />
                    ))}
                </>
                {/* <a style={{ display: "none" }} href="https://hits.seeyoufarm.com">
                    <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fpaakofi.tech&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false" />
                </a> */}
            </ul>
        </nav>
    );
};

export default Nav;
