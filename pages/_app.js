import '../styles/main.scss'
import '98.css';
import ContextWrapper from '../components/ContextWrapper';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Bgs from '../components/Bgs';
import { DefaultSeo } from 'next-seo'
import {seoObj} from '../next-seo.config'

const navigation = [
    {url:'/volume/10', name:'Hitman vol.10'},
];


const MyApp =({ Component, pageProps  }) =>{
    return (
        <>
        <ContextWrapper  navigation={navigation}>
            <DefaultSeo {...seoObj} />
            <Header />
        </ContextWrapper>
            <main  className="container">
                <Component {...pageProps} />
            </main>
            <Footer/>
            <Bgs />
        </>
    )
}

export default MyApp;


