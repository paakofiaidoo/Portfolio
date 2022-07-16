import Nav from "../atoms/Nav";
import styles from "../../styles/components/Layout.module.scss";
import React from "react";
import Background from "./Background";

const Layout = ({ children, navApps, open, apps }) => {
    let stars = [];
    for (let i = 0; i < 20; i++) {
        stars.push(i);
    }

    return (
        <div className={`${styles.body}`}>
            <div className={`${styles.night}`}>
                {stars.map((star, i) => (
                    <div key={i} className={`${styles.shooting_star}`}></div>
                ))}
            </div>
            <Background apps={apps} open={open} />
            <main className={`main ${styles.main}`}>{children}</main>
            <Nav links={navApps} open={open} />
        </div>
    );
};

export default Layout;
