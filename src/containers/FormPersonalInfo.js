import React, { useState } from 'react'
import Form from '../components/Form'
import { ButtonSubmit, GroupInputs, Input, Label, TitleForm } from '../components/styles/form.styles'

const FormPersonalInfo = () => {
    const [item, setItem] = useState({
        first_name: '',
        last_name: '',
        rg: '',
        cpf: '',
        phone: '',
        date_of_birth: ''
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setItem({...item, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            fisrt_name: item.first_name,
            last_name: item.last_name,
            rg: item.rg,
            cpf: item.cpf,
            phone: item.phone,
            date_of_birth: item.date_of_birth
        }
    
    }

    return (
        <Form action={handleSubmit}>
            <TitleForm>Informações de Identificação</TitleForm>
            <GroupInputs>
                <Label htmlFor='first_name'>Nome:</Label>
                <Input 
                    type='text'
                    name='first_name'
                    onChange={handleChange} />
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='last_name'>Sobrenome:</Label>
                <Input
                    type='text'
                    name='last_name'
                    onChange={handleChange} /> 
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='rg'>RG:</Label>
                <Input
                    type='text'
                    name='rg'
                    onChange={handleChange} /> 
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='cpf'>CPF:</Label>
                <Input
                    type='text'
                    name='cpf'
                    onChange={handleChange} /> 
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='phone'>Telefone:</Label>
                <Input
                    type='tel'
                    name='phone'
                    onChange={handleChange} /> 
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='date_of_birth'>Data de Nascimento:</Label>
                <Input
                    type='date'
                    name='date_of_birth'
                    onChange={handleChange} /> 
            </GroupInputs>
            <ButtonSubmit>Salvar</ButtonSubmit>
        </Form>
    )
}

export default FormPersonalInfo
