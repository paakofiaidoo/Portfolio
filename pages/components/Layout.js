import Nav from "../atoms/Nav";
import Head from "next/head";
import styles from "../../styles/Layout.module.scss";

const Layout = ({ children, apps, open, onMove }) => {
  return (
    <>
      <Head>
        <title>Paa-Kofi Aidoo</title>
        <link rel="icon" href="/brand/logo.svg" height="100%" width="100%" />
        <meta name="description" content="My portfolio website" />
      </Head>
      <div className={`${styles.body}`}>
        <main
          className={`main ${styles.main}`}
          // onMouseMove={(e) => {
          //   onMove(e);
          // }}
        >
          {children}
        </main>
        <Nav links={apps} open={open} />
      </div>
    </>
  );
};

export default Layout;
