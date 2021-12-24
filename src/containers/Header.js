import React, { useContext, useState } from 'react'
import Balance from '../components/Balance'
import CartLink from '../components/CartLink'
import InfoLink from '../components/InfoLink'
import LoginButton from '../components/LoginButton'
import Logo from '../components/Logo'
import LogoutButton from '../components/LogoutButton'
import Menu from '../components/Menu'
import { ContainerAuth, ContainerHeader, Inner } from '../components/styles/header.styles'
import TicketsLink from '../components/TicketsLink'
import AuthContext from '../context/AuthContext'

const Header = () => {
    const { access_token } = useContext(AuthContext)
    return (
        <ContainerHeader>
            <Inner>
                <Logo />
                <ContainerAuth>
                {access_token ?
                    <Menu>
                        <InfoLink />
                        <CartLink />
                        <TicketsLink />
                        <LogoutButton />
                    </Menu> : 
                    <LoginButton />
                }
                </ContainerAuth>
            </Inner>
        </ContainerHeader>
    )
}

export default Header
