import React, { useState } from 'react'
import Form from '../components/Form'
import { ButtonSubmit, GroupInputs, Input, Label, TitleForm } from '../components/styles/form.styles'

const FormPersonalInfo = () => {
    const [item, setItem] = useState({
        firstname: '',
        lastname: '',
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

    return (
        <Form>
            <TitleForm>Informações Pessoais</TitleForm>
            <GroupInputs>
                <Label htmlFor='firstname'>Nome:</Label>
                <Input 
                    type='text'
                    name='firstname'
                    onChange={handleChange} />
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='lastname'>Sobrenome:</Label>
                <Input
                    type='text'
                    name='lastname'
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
