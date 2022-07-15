import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8"></meta>
                <link rel="icon" href="/brand/logo.svg" height="100%" width="100%" />
                <title>Paa-Kofi Aidoo's Portfolio</title>
                <meta name="description" content={`Hi 👋,
I am Paa-Kofi Aidoo,
I am a Web Developer
and I live for the pursuit of knowledge`} />
                <meta name="google-site-verification" content="HYCtj1fXyFWpicxWAGkerf1QQmfGML5KlrYk5qe6q9o" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}