import Header from 'components/Header'
import '../styles/main.scss'
import '98.css';
// import { DefaultSeo } from 'next-seo'
// import SEO from '../next-seo.config'

const MyApp =({ Component, pageProps }) =>{
    return (
        <>
            {/* <DefaultSeo {...SEO} /> */}
            <Header />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;