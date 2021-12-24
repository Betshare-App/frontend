import React from 'react'
import { MenuHamburguer } from './styles/header.styles'

const MenuMobile = ({handleClick}) => {
    return (
        <svg onClick={handleClick} viewBox="0 0 100 80" width="30" height="30" fill='#FFF'>
            <rect x="20" y="12" width="80" height="14"></rect>
            <rect x="20" y="36" width="80" height="14"></rect>
            <rect x="20" y="60" width="80" height="14"></rect>
        </svg>
    )
}

export default MenuMobile
