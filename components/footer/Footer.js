import {useState} from 'react';

const Footer = () => {

    const [time, setTime] = useState(new Date());
    return (
<footer className="footer" >


    <div className="toolbar-left">
        <button className="toolbar-icon ie">Nemo</button>
    </div>

    <div className="toolbar-separator"></div>

    <div className="toolbar-right">
        <div className="time">
        <span className="hour">{time.getHours()}</span>
        :
        <span className="minutes">{time.getMinutes() < 10 ? '0'+time.getMinutes() : time.getMinutes()}</span>
        { time.getHours() >= 12 ? 'PM' : 'AM'}
        </div>
    </div>
    <div className="toolbar-separator"></div>

    <div className="toolbar-start-menu">
    <button className="start-button">
    Start
    </button>


    </div>
</footer>
     );
}
 
export default Footer;