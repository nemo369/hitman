import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html dir="rtl">
                <Head>

                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=UA-175979529-1"
                    />

                    <script
                        dangerouslySetInnerHTML={
                            {
                                __html: `window.dataLayer = window.dataLayer || 
                            [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-175979529-1');`
                            }}
                    />
                    <meta property="og:image" content="https://hitman.co.il/hitman.png" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body style={{ backgroundImage: `url(/grid-bg.png)` }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument