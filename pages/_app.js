import "../styles/globals.css";
import "../styles/Normalizer.css";
import "../styles/index.scss";
import axios from "axios";
import { useEffect } from "react";
import { detect } from "detect-browser";
import { getStrapiURL } from "./api";
import Head from "next/head";
import { analytics, logEventFun } from "../src/firebase";
import "firebase/analytics";
import React from "react";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
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
                    if (location.org !== "AMAZON-02") {
                        axios.post(getStrapiURL("/visitors"), {
                            data: {
                                location,
                                browser: detect(),
                            },
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
            <Analytics />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
