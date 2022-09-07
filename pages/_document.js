import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/brand/logo.svg" />
                <meta
                    name="description"
                    content={`Hi 👋,
I am Paa-Kofi Aidoo,
I am a Web Developer
and I live for the pursuit of knowledge`}
                />
                <meta name="google-site-verification" content="j1IX5sg3yUGLD73PULPJ4hsk8iFWR145MmStStQXUZI" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
