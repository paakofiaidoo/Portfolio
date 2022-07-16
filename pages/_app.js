import "../styles/globals.css";
import "../styles/Normalizer.css";
import "../styles/index.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { detect } from "detect-browser";
import { getStrapiURL } from "./api";
import Head from "next/head";
import { analytics, logEventFun } from "../src/firebase";
import "firebase/analytics";
import React from "react";

let send = false;

function MyApp({ Component, pageProps }) {
    //get user ip address
    const [ip, setIp] = useState("");
    const [browser, setBrowser] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        logEventFun("opened");
        analytics;
        const browser = detect();
        // @ts-ignore
        setBrowser(browser);
        axios
            .get("https://api.ipify.org?format=json")
            .then((res) => {
                setIp(res.data.ip);
            })
            // @ts-ignore
            .catch((err) => {
                // console.log(err);
            });
    }, []);

    useEffect(() => {
        axios
            .get("https://ipapi.co/" + ip + "/json/")
            .then((res) => {
                setLocation(res.data);
                // console.log(res.data);
            })
            // @ts-ignore
            .catch((err) => {
                // console.log(err);
            });
    }, [ip]);

    useEffect(() => {
        if (process.env.NODE_ENV !== "development") {
            // console.log("development");
            // @ts-ignore
            if (location && browser && !send && location.org !== "AMAZON-02") {
                // console.log("send");
                axios
                    .post(getStrapiURL("/visitors"), {
                        data: {
                            location: location,
                            browser: browser,
                        },
                    })
                    // @ts-ignore
                    .then((res) => {
                        // console.log(res);
                    })
                    // @ts-ignore
                    .catch((err) => {
                        // console.log(err);
                    });
                send = true;
            }
        }
    }, [location, browser]);

    // @ts-ignore
    return (
        <>
            <Head>
                <title>Paa-Kofi Aidoo</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
