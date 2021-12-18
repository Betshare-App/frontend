import React, { useContext } from 'react'
import Balance from '../components/Balance'
import CartLink from '../components/CartLink'
import LoginButton from '../components/LoginButton'
import Logo from '../components/Logo'
import LogoutButton from '../components/LogoutButton'
import { ContainerAuth, ContainerHeader, Inner } from '../components/styles/header.styles'
import TicketsLink from '../components/TicketsLink'
import AuthContext from '../context/AuthContext'

const Header = () => {
    const { access_token } = useContext(AuthContext)
    return (
        <ContainerHeader>
            <Inner>
                <Logo />
                {access_token && <Balance access_token={access_token} />}
                <ContainerAuth>
                {access_token ?
                <>
                    <CartLink />
                    <TicketsLink />
                    <LogoutButton />
                </> : 
                    <LoginButton />
                }
                </ContainerAuth>
            </Inner>
        </ContainerHeader>
    )
}

export default Header
