import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>

                <meta charSet="utf-8"></meta>
                <link rel="icon" href="/brand/logo.svg" height="100%" width="100%" />
                <meta name="description" content={`Hi 👋,
I am Paa-Kofi Aidoo,
I am a Web Developer
and I live for the pursuit of knowledge`} />
                {/* <meta name="robots" content="noindex,nofollow"></meta> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}