import React, { useState } from 'react'
import Form from '../components/Form'
import { ButtonSubmit, 
        ErrorMessage, 
        GroupInputs, 
        Input, 
        Label, 
        Select, 
        TitleForm } from '../components/styles/form.styles'
import states from '../utils/br_states'
import validators from '../utils/validators'

const FormAdressInfo = () => {
    const [item, setItem] = useState({
        street: '',
        quarter: '',
        postal_code: '',
        city: '',
        state: ''
    })
    
    const [error, setError] = useState([
    {
        field: 'postal_code',
        error: false,
        message: 'O CEP deve conter 8 dígitos'
    },
    {
        field: 'isNull',
        error: false,
        message: 'Preencha todos os campos'
    }
    ])

    const handleValidate = () => {
        setError([...error, error.map(item => 
            item.field === 'postal_code' ? 
            item.error = !validators.ValidatePostalCode :
            null
        )])
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setItem({...item, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError([...error, error.map(item =>
            item.field === 'isNull' ? 
            item.error = validators.NotIsNull(item) :
            null)])
        console.log(error)
    }

    return (
        <Form action={handleSubmit}>
            <TitleForm>Informação de Endereço</TitleForm>
            <ErrorMessage>{error.map(item => item.error ? item.message : null)}</ErrorMessage>
            <GroupInputs>
                <Label htmlFor='street'>Rua: </Label>
                <Input
                type='text'
                name='street'
                onChange={handleChange} 
                value={item.street} />
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='quarter'>Bairro: </Label>
                <Input 
                type='text'
                name='quarter'
                onChange={handleChange}
                value={item.quarter} />
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='postal_code'>CEP: </Label>
                <Input 
                type='number'
                name='postal_code'
                onChange={handleChange}
                onBlur={handleValidate}
                value={item.postal_code} />
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='city'>Cidade:</Label>
                <Input
                type='text'
                name='city'
                onChange={handleChange}
                value={item.city} />
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='state'>Estado:</Label>
                <Select
                name='state'
                onChange={handleChange}
                value={item.state}>
                    {states.map((state) =>
                        <option value={state}>{state}</option>
                    )}
                </Select>
            </GroupInputs>
            <ButtonSubmit>Salvar</ButtonSubmit>
        </Form>
    )
}

export default FormAdressInfo
