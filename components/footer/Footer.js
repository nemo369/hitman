import {useState} from 'react';
import useInterval from '../contexts/useInterval';

const Footer = () => {

    const [time, setTime] = useState(new Date());

    const stopInterval = useInterval(()=>{
        setTime(new Date());
    }, 1000);
    return (
<footer className="footer flex nowrap" >


    <div className="toolbar-start-menu">
        <button className="start-button">התחל</button>
    </div>


    <div className="flex toolbar-center">
        <div className="toolbar-separator"></div>
        <button className="toolbar-icon ie">Nemo</button>
        <button className="toolbar-icon ie">share buuton</button>
        <div className="toolbar-separator"></div>
    </div>


    <div className="toolbar-left">
        <div className="time">
        <span className="hour">{time.getHours()}</span>
        :
        <span className="minutes">{time.getMinutes() < 10 ? '0'+time.getMinutes() : time.getMinutes()}</span>
        { time.getHours() >= 12 ? 'PM' : 'AM'}
        </div>
    </div>



</footer>
     );
}
 
export default Footer;