import "../styles/globals.css";
import "../styles/Normalizer.css";
import "../styles/index.scss";
import axios from "axios";
import { useEffect } from "react";
import { detect } from "detect-browser";
import Head from "next/head";
import { analytics, logEventFun, db } from "../src/firebase";
import { ref, set, push } from "firebase/database";
// import "firebase/analytics";

function MyApp({ Component, pageProps }) {
    const MessageListRef = ref(db, "users");

    const writeMessageData = (message) => {
        const newMessageRef = push(MessageListRef);
        set(newMessageRef, {
            ...message,
        });
        return newMessageRef.key;
    };
    useEffect(() => {
        if (process.env.NODE_ENV !== "development") {
            logEventFun("opened");
            analytics;
            axios
                .get("https://api.ipify.org?format=json")
                .then((res) => {
                    return res.data.ip;
                })
                .then(async (ip) => {
                    return await axios.get("https://ipapi.co/" + ip + "/json/").then((res) => {
                        return res.data;
                    });
                })
                .then((location) => {
                    if (location.org !== "AMAZON-02" || location.org !== "AMAZON-AES") {
                        const {
                            city,
                            country_name,
                            ip,
                            languages,
                            latitude,
                            longitude,
                            network,
                            org,
                            postal,
                            region,
                            timezone
                        } = location;
                        writeMessageData({
                            city,
                            country_name,
                            ip,
                            languages,
                            latitude,
                            longitude,
                            network,
                            org,
                            postal,
                            region,
                            timezone,
                            browser: detect(),
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Paa-Kofi Aidoo</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
