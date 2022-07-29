import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/brand/logo.svg"  />
                <meta
                    name="description"
                    content={`Hi 👋,
I am Paa-Kofi Aidoo,
I am a Web Developer
and I live for the pursuit of knowledge`}
                />
                <meta name="google-site-verification" content="HYCtj1fXyFWpicxWAGkerf1QQmfGML5KlrYk5qe6q9o" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
