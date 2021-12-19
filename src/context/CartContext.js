import React, {useEffect, useState, createContext, useContext} from 'react'
import AuthContext from './AuthContext'
import { service } from '../services/api'

const CartContext = createContext()

export default CartContext

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState()
    const { access_token } = useContext(AuthContext)
    
    const addCart = () => {
        setCart(cart+1)
    }

    const removeCart = () => {
        setCart(cart-1)
    }

    const clear = () => {
        setCart(0)
    }

    useEffect(() => {
        const getData = async () => {
            const length = access_token ? await service.getLengthCart(access_token) : null 
            setCart(length)
        }
        getData()
    }, [cart])


    const context = {
        cart: cart,
        add: addCart,
        remove: removeCart,
        clearCart: clear
    }
    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}


