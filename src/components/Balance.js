import React, { useState, useEffect } from 'react'
import { service } from '../services/api'
import { LabelBalance } from './styles/header.styles'

const Balance = ({access_token}) => {
    const [balance, setBalance] = useState(0)
    useEffect(() => {
        const getData = async () => {
            const data = await service.getBalance(access_token)
            setBalance(data)
        }
        getData()
    })

    return (
        <LabelBalance>
            Saldo R$ {balance},00
        </LabelBalance>
    )
}

export default Balance
