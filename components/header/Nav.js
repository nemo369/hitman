import Link from 'next/link';
import HitmanLogo from '../svg/Logo';
import { useRouter } from 'next/router'
import { useContext } from 'react'
import HeaderContext from '../contexts/HeaderContext'

const HeaderNav = () => {
    const router = useRouter()
    const { menuItems } = useContext(HeaderContext);
    const navigate = (event)=>{
        if( event.target.value){
            router.push('/volume/[albumId]', event.target.value, { shallow: true });
        }
    }
    return ( 
        <nav className="flex around">

            <Link href="/">
                <a> <HitmanLogo width="80px"/> </a>
            </Link>
            <select value={router.asPath} onChange={navigate}>
            <option ></option>
                {menuItems.map((item,i) =>(
                    <option key={i} value={item.url}>{item.name}</option>
                ))}
            </select>
  
    </nav>
     );
};

export default HeaderNav;