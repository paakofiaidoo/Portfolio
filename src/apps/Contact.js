import { useState, useEffect } from "react";
import styles from "../../styles/apps/Contact.module.scss";
import { Toaster } from "react-hot-toast";
import { Icon } from "../atoms/Icon";

const Intro = () => {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        fetch("/api/contact")
            .then((res) => res.json())
            .then((data) => {
                setContacts(data);
            });

        return () => {};
    }, []);

    return (
        <div id="intro" className={styles.intro}>
            <div>
                <Toaster />
            </div>
            <img
                src="/brand/vector/default-monochrome.svg"
                alt="profile pic"
                className={`${styles.mobile} ${styles.avatar}`}
                // @ts-ignore
                load="lazy"
            />
            <div className={styles.details}>
                {/* <div className={styles.contactName}>
          {contacts
            .slice(0, 1)
            .map(({ href, name, fa, animation }, index) => {
              return Icon(index, href, animation, name, fa);
            })}
        </div> */}
                <div className={styles.contactName}>
                    {contacts.length > 0 &&
                        contacts.map(({ href, name, fa, animation, link }, index) => {
                            return Icon(index, href, animation, name, fa, link);
                        })}
                </div>
                <p>(Click to copy link / Double-Click to open)</p>
            </div>
        </div>
    );
};

export default Intro;
