import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import Script from "next/script";

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
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                            
                            ga('create', 'G-PR9SEYTBCS', 'auto');
                            ga('send', 'pageview');
  `,
                    }}
                />{" "}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
