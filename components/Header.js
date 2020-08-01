import Link from 'next/link'
const Header = () => {
    return (
        <header className="header">
              <Link href="/">
                <a>
                    <button>חזרה הביתה</button>
                </a>
                </Link>
            <hr className="hr" />
        </header>
      );
}
 
export default Header;