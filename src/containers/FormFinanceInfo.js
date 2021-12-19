import React, { useState } from 'react'
import Form from '../components/Form'
import { ButtonSubmit, 
        GroupInputs, 
        Label, 
        TitleForm, 
        Input } from '../components/styles/form.styles'

const FormFinanceInfo = () => {
    const [item, setItem] = useState({
        bank: '',
        agency: '',
        account: ''
    })    

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setItem({...item, [name]:value})
    }

    return (
        <Form>
            <TitleForm>Informações Bancárias</TitleForm>
            <GroupInputs>
                <Label htmlFor='bank'>Banco:</Label>
                <Input 
                type='text'
                name='bank'
                onChange={handleChange} />
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='agency'>Agência:</Label>
                <Input 
                type='text'
                name='agency'
                onChange={handleChange} />
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='account'>Conta:</Label>
                <Input
                type='text'
                name='account'
                onChange={handleChange} />
            </GroupInputs>
            <ButtonSubmit>Salvar</ButtonSubmit>
        </Form>
    )
}

export default FormFinanceInfo
