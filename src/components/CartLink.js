import React, {useContext} from 'react'
import { ContainerCartLink, ViewCountCart, HeaderLink } from './styles/header.styles'
import CartContext from '../context/CartContext'


const CartLink = () => {
    const { cart } = useContext(CartContext)

    return (
        <HeaderLink to='/cart'>
            Carrinho
            {cart > 0 &&
                <ViewCountCart>{cart}</ViewCountCart>
            }
        </HeaderLink>
    )
}

export default CartLink