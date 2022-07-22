import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getStrapiURL } from "../../pages/api";
import styles from "../../styles/apps/Message.module.scss";

function Message() {
    const [message, setMessage] = useState({
        name: "",
        email: "",
        subject: "",
        content: "",
    });
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (message.content === "") {
                    toast.error("Content is empty and is required");
                } else {
                    axios.post(getStrapiURL("/messages"), { data: message });
                }
            }}
            className={styles.message}
        >
            <Toaster />
            <div className={styles.name}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    placeholder="Paa-Kofi Aidoo"
                    type="text"
                    onInput={(e) => {
                        e.preventDefault();
                        setMessage((prev) => {
                            // @ts-ignore
                            return { ...prev, name: e.target.value };
                        });
                    }}
                />
            </div>
            <div className={styles.name}>
                <label htmlFor="email" >
                    Email
                </label>
                <input
                    id="email"
                    type="email"placeholder="paakofiaidoo17@gmail.com(required if you want a reply)"
                    onInput={(e) => {
                        e.preventDefault();
                        setMessage((prev) => {
                            // @ts-ignore
                            return { ...prev, email: e.target.value };
                        });
                    }}
                />
            </div>
            <div className={styles.subject}>
                <label htmlFor="subject">Subject</label>
                <input
                    id="subject"
                    type="text"
                    placeholder="Connect"
                    onInput={(e) => {
                        e.preventDefault();
                        setMessage((prev) => {
                            // @ts-ignore
                            return { ...prev, subject: e.target.value };
                        });
                    }}
                />
            </div>
            <div className={styles.content}>
                <label htmlFor="content">Content*</label>
                <textarea
                    id="content"
                    placeholder="Wanted to say Hi👋"
                    onInput={(e) => {
                        e.preventDefault();
                        setMessage((prev) => {
                            // @ts-ignore
                            return { ...prev, content: e.target.value };
                        });
                    }}
                />
            </div>
            <button>Send</button>
        </form>
    );
}

export default Message;
