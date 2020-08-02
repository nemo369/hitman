import HeaderNav from "./Nav";
const Header = () => {
    return (
        <header className="header">
            <div className="tac">
                <h1 className="wordart rainbow header__h1">ברוכים הבאים להיטמן</h1>
            </div>
            <HeaderNav />
            <hr className="header__hr" />
        </header>
      );
}
 
export default Header;