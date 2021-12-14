import React, {useContext} from 'react'
import { ContainerCartLink, ViewCountCart } from './styles/header.styles'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'


const CartLink = () => {
    const { cart } = useContext(CartContext)

    return (
            <ContainerCartLink>
                <Link to='/cart'>
                    Carrinho
                    {cart > 0 &&
                        <ViewCountCart>{cart}</ViewCountCart>
                    }
                </Link>
            </ContainerCartLink>
    )
}

export default CartLink