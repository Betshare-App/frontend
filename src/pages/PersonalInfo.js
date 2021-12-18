import React, { useState } from 'react'
import DropDown from '../components/DropDown'
import FormAdressInfo from '../containers/FormAdressInfo'
import FormFinanceInfo from '../containers/FormFinanceInfo'
import FormPersonalInfo from '../containers/FormPersonalInfo'
import Layout from '../containers/Layout'

const PersonalInfo = () => {
    const initialData = [
        { 
            name: 'Pessoal',
            active: true,
            element: <FormPersonalInfo />,
        },
        { 
            name: 'Endereço',
            active: false,
            element: <FormAdressInfo />,
        },
        { 
            name: 'Financeiro',
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
            {choice.map((item) => item.active ? 
            item.element : null)}
        </Layout>
    )
}

export default PersonalInfo
