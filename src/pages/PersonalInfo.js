import React, { useState } from 'react'
import DropDown from '../components/DropDown'
import FormAdressInfo from '../containers/FormAdressInfo'
import FormFinanceInfo from '../containers/FormFinanceInfo'
import FormPersonalInfo from '../containers/FormPersonalInfo'
import Layout from '../containers/Layout'

const PersonalInfo = () => {
    const initialData = [
        { 
            name: 'Identificação',
            active: true,
            element: <FormPersonalInfo />,
        },
        { 
            name: 'Endereço',
            active: false,
            element: <FormAdressInfo />,
        },
        { 
            name: 'Conta Bancária',
            active: false,
            element: <FormFinanceInfo />,
        }
    ]

    const [choice, setChoice] = useState(initialData)

    const handleData = (name) => {
        choice.map((item) => 
            item.name === name ?
                item.active = true :
                item.active = false)
        setChoice([...choice])
    } 
    return (
        <Layout>
            <DropDown data={choice} handle={handleData} />
        </Layout>
    )
}

export default PersonalInfo
