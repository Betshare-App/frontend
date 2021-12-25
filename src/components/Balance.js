import React, { useState, useEffect } from 'react'
import { service } from '../services/api'
import { LabelBalance } from './styles/header.styles'

const Balance = ({access_token}) => {
    const [balance, setBalance] = useState(0)

    return (
        <LabelBalance>
            Saldo R$ {balance},00
        </LabelBalance>
    )
}

export default Balance
