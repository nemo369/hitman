import { useState } from 'react'
import HeaderContext from './contexts/HeaderContext'

function ContextWrapper({children, navigation}) {
    const [menuItems] = useState(navigation)

    return (
        <HeaderContext.Provider value={{menuItems}}>
            {children}
        </HeaderContext.Provider>
    )
}

export default ContextWrapper;


