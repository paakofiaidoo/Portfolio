import styles from "../../styles/Browsers.module.scss";

// create browser component
const Browsers = ({ mobile, desktop }) => {
  return (
    <div>
      <div className={styles.devices}>
        <div className={styles.desktop}>
          <div className={styles.deskIn}>
            <div className={styles.top}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.bar}></div>
            </div>
            <div className={styles.content}>
              <img alt="Laptop screenshot" src={desktop} className={styles.img} />
            </div>
          </div>
        </div>
        <div className={styles.mobile}>
          <div className={styles.mobIn}>
            <div className={styles.content}>
              <img alt="Mobile screenshot" src={mobile} className={styles.img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browsers;
