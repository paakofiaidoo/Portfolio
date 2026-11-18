import Nav from "../atoms/Nav";
import styles from "../../styles/components/Layout.module.scss";
import React from "react";
import Background from "./Background";
import Starfield from "./Starfield";

const Layout = ({ children, navApps, open, apps }) => {
    return (
        <div className={`${styles.body}`}>
            <div className={`${styles.night}`}>
                <Starfield />
            </div>
            <Background apps={apps} open={open} />
            <main className={`main ${styles.main}`}>{children}</main>
            <Nav links={navApps} open={open} />
        </div>
    );
};

export default Layout;
