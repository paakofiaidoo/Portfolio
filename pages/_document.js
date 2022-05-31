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
                <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-219339413-1">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-219339413-1');
</script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}