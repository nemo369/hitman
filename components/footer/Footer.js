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
                <section className={`box info ${info? 'open' : ''}`}>
                    <h5>המון תודות ל</h5>
                    <p>
                        לבלוג המדהים 
                        <a href="http://osafim.blogspot.com/2010/08/blog-post_25.html">אוספים, אומרים שהיה פה שמח</a>
                        ולעמוד הפייסבוק המדליק
                        <a href="https://www.facebook.com/hitman90s/">היטמן Hitman</a>
                    </p>
                        <h5>אודות:</h5>
                    <p>
                        אתר זה נבנה לטובת הציבור הרחב ומתוך נוסטלגיה לשנות ה90 ואלבומי ההיטמן האדירים של הד ארצי. אם חסרה אינפורמציה, נפגעו זכויות יוצרים או שסתם בא לכם לחלוק קרדיט אשמח שתצרו איתי קשר
                    </p>
                    <h5>הידעת?</h5>
                    <p>
    לא הרבה זוכרים, אבל שלושת האסופים הראשונים של היטמן יצאו באותו הזמן גם כדיסקים וגם כקלטות, בגרסה שונה. בקסטות הלהיטים הגדולים של צד א' הופיעו במיקס מחוברים זה לזה. המיקס נעשה על ידי הדיג'יי המוכשר אמיר כהן, שבעצם מיקסס מסיבה עכשווית מוכנה וככה כל ילד ניינטיז שרצה להפגיז במסיבה, קנה קלטת היטמן, הכניס לטייפ-קסט וברחבת הריקודים התחיל הטירוף.
    החל מהיטמן 4, סדרת היטמן אמנם המשיכה לצאת בקסטות, אבל בצורה זהה בדיוק לזאת של הדיסק - כלומר כשהשירים מופרדים ללא המיקס של אמיר כהן.
    הקלטות האלו נדירות מאוד ורבים מתגעגעים דווקא אליהן ואל איך שהשירים חוברו, איך שהן יצרו כל כך הרבה מסיבות.
    </p>
                </section>
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
                    <span className="hour">{time.getHours() >12 ? time.getHours()-12 : time.getHours()}</span>
        :
        <span className="minutes">{time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}</span>
                    {time.getHours() >= 12 ? 'PM' : 'AM'}
                </div>
            </div>



        </footer>
    );
}

export default Footer;