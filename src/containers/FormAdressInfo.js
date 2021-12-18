import React, { useState } from 'react'
import Form from '../components/Form'
import { ButtonSubmit, 
        GroupInputs, 
        Input, 
        Label, 
        TitleForm } from '../components/styles/form.styles'

const FormAdressInfo = () => {
    const [item, setItem] = useState({
        street: '',
        quarter: '',
        postal_code: '',
        city: '',
        state: ''
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setItem({...item, [name]:value})
    }

    return (
        <Form>
            <TitleForm>Endereço</TitleForm>
            <GroupInputs>
                <Label htmlFor='street'>Rua: </Label>
                <Input
                type='text'
                name='street'
                onChange={handleChange} />
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='quarter'>Bairro: </Label>
                <Input 
                type='text'
                name='quarter'
                onChange={handleChange} />
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='postal_code'>CEP: </Label>
                <Input 
                type='text'
                name='postal_code'
                onChange={handleChange} />
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='city'>Cidade:</Label>
                <Input
                type='text'
                name='city'
                onChange={handleChange} />
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='state'>Estado:</Label>
                <Input
                type='text'
                name='state'
                onChange={handleChange} />
            </GroupInputs>
            <ButtonSubmit>Salvar</ButtonSubmit>
        </Form>
    )
}

export default FormAdressInfo
