import { useState } from 'react';
import useInterval from '../contexts/useInterval';
import NemoLogo from '../svg/Nemo';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    TwitterIcon,
    FacebookIcon,
    WhatsappIcon
} from "react-share";
import useCurrentUrl from '../contexts/useCurrentUrl';

const Footer = () => {
    const shareUrl = useCurrentUrl();
    const [time, setTime] = useState(new Date());
    const [info, setInfo] = useState(false)

    const stopInterval = useInterval(() => {
        setTime(new Date());
    }, 1000);

    const toglleInfo = () => {
        setInfo(!info)
    }

    return (
        <footer className="footer flex nowrap" >


            <div className="toolbar-start-menu relative">
                <button className="start-button" onClick={toglleInfo}>התחל</button>
                <section className={`info ${info? 'open' : ''}`}>INFO</section>
            </div>


            <div className="flex toolbar-center">
                <div className="toolbar-separator"></div>
                <button className="toolbar-icon ie">
                    <a href="" target="_blank" rel="noopener" >
                        <NemoLogo />
                    </a>
                </button>
                <div className="toolbar-separator"></div>

                <div className="shares flex">
                    <FacebookShareButton url={shareUrl} >
                        <FacebookIcon size={24} round={false} />
                    </FacebookShareButton>
                    <TwitterShareButton url={shareUrl} >
                        <TwitterIcon size={24} round={false} />
                    </TwitterShareButton>
                    <WhatsappShareButton url={shareUrl} >
                        <WhatsappIcon size={24} round={false} />
                    </WhatsappShareButton>
                </div>

            </div>


            <div className="toolbar-left">
                <div className="time">
                    <span className="hour">{time.getHours()}</span>
        :
        <span className="minutes">{time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}</span>
                    {time.getHours() >= 12 ? 'PM' : 'AM'}
                </div>
            </div>



        </footer>
    );
}

export default Footer;