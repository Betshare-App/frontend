import React from 'react'
import { Container } from '../components/styles/app.styles'
import Header from './Header'
import { CartProvider } from '../context/CartContext'
const Layout = ({children}) => {

    return (
        <Container>
            <CartProvider>
                <Header />
                {children}
            </CartProvider>
        </Container>
    )
}

export default Layout
