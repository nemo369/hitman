import '../styles/main.scss'
import '98.css';
import ContextWrapper from '../components/ContextWrapper';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Bgs from '../components/Bgs';
import { DefaultSeo } from 'next-seo'
import { seoObj } from '../next-seo.config';
import Router from 'next/router';
import { useState } from 'react'


const navigation = [
    { url: '/volume/10', name: 'Hitman vol.10' },
    { url: '/volume/9', name: 'Hitman vol.9' },
    { url: '/volume/8', name: 'Hitman vol.8' },
    { url: '/volume/7', name: 'Hitman vol.7' },
    { url: '/volume/6', name: 'Hitman vol.6' },
    { url: '/volume/5', name: 'Hitman vol.5' },
    { url: '/volume/4', name: 'Hitman vol.4' },
    { url: '/volume/3', name: 'Hitman vol.3' },
    { url: '/volume/2', name: 'Hitman vol.2' },
    { url: '/volume/1', name: 'Hitman vol.1' },

];


const MyApp = ({ Component, pageProps }) => {
    Router.onRouteChangeStart = () => {
        console.log('onRouteChnageStart triggered');
        setisLoader(true)

    };

    Router.onRouteChangeComplete = () => {
        console.log('onRouteChnageComplete triggered');
        setisLoader(false)

    };

    Router.onRouteChangeError = () => {
        console.log('onRouteChnageError triggered');
        setisLoader(false)
    };
    const [isLoader, setisLoader] = useState(false)
    return (
        <>
            {isLoader && <div className="between-pages-loader"></div>}
            <ContextWrapper navigation={navigation}>
                <DefaultSeo {...seoObj} />
                <Header />
            </ContextWrapper>
            <main className="container">
                <Component {...pageProps} />
            </main>
            <Footer />
            <Bgs />
        </>
    )
}

export default MyApp;


