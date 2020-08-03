import HeaderNav from "./Nav";
import { useState } from 'react';
import useDocumentScrollThrottled from "../contexts/useDocumentScrollThrottled ";

const Header = () => {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
  
    const MINIMUM_SCROLL = 120;
    const TIMEOUT_DELAY = 5;
  
    useDocumentScrollThrottled(callbackData => {
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
  
      setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
      }, TIMEOUT_DELAY);
    });
  
    const style = shouldHideHeader ? 'header--close' : 'header--open';
    return (
        <>
        <header  className={`header ${style}`}>
            <div className="tac header__title">
                <h2 className="wordart rainbow header__h1">ברוכים הבאים להיטמן</h2>
            </div>
            <HeaderNav />
            <hr className="header__hr" />
        </header>
        <div className="header--placeholder"></div>
        </>
      );
}
 
export default Header;