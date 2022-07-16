import Nav from "../atoms/Nav";
import styles from "../../styles/components/Layout.module.scss";

const Layout = ({ children, navApps, open }) => {
    let stars = [];
    for (let i = 0; i < 20; i++) {
        stars.push(i);
    }

    return (
        <>
            {/* style={{ backgroundImage: "url('./img/man-and-space.jpg')" }}  */}
            <div className={`${styles.body}`}>
                <div className={`${styles.night}`}>
                    {stars.map((star, i) => (
                        <div key={i} className={`${styles.shooting_star}`} />
                    ))}
                </div>
                <main className={`main ${styles.main}`}>{children}</main>
                <Nav links={navApps} open={open} />
            </div>
        </>
    );
};

export default Layout;
