import React, { useState, useEffect } from 'react'
import CloseMenu from './CloseMenu'
import MenuMobile from './MenuMobile'
import { MenuScreenMobile } from './styles/header.styles'

const Menu = ({children}) => {
    const [mobile, setMobile] = useState(false)
    const [showmenu, setShowMenu] = useState(false)

    const width = useScreenWidth()
    useEffect(() =>{
        if(width < 400){
            setMobile(true)
        }else{
            setMobile(false)
        }
    }, [width])
    
    return (
        <>
        {mobile ?
            !showmenu ?
                <MenuMobile handleClick={() => setShowMenu(true)} /> :
                <CloseMenu handleClick={() => setShowMenu(false)} /> 
            :
            children
        }
        {showmenu &&
            <MenuScreenMobile>
                {children}
            </MenuScreenMobile>}
        </>
    )
}

function useScreenWidth() {
    const [width, setWidth] = useState(undefined);
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
}

export default Menu
