import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form'
import { ButtonSubmit, ErrorMessage, GroupInputs, Input, Label, SecundaryButton, TertiaryButton, TitleForm } from '../components/styles/form.styles'
import { service } from '../services/api'
import AuthContext from '../context/AuthContext'
import validators from '../utils/validators'

const FormPersonalInfo = () => {
    const navigate = useNavigate()
    const { access_token } = useContext(AuthContext)
    const [personalInfo, setPersonalInfo] = useState({})
    const [editableInputs, setEditableInputs] = useState(true)
    const [error, setError] = useState([
        {
            field: 'CPF', 
            error: false, 
            message: 'CPF/CNPJ inválido'},
        {
            field: 'phone', 
            error: false, 
            message: 'Número de celular inválido'},
        {
            field: 'date_of_birth', 
            error: false, 
            message: 'A idade mínima é 18 anos!'},
    ])
    const [item, setItem] = useState({
        first_name: '',
        last_name: '',
        rg: '',
        cpf: '',
        phone: '',
        date_of_birth: '',
    })

    useEffect(() => {
        const getPersonalInfo = async () => {
            const data = await service.getPersonalInfo(access_token)
            setPersonalInfo(data)
        }
        getPersonalInfo()
    }, [])

    useEffect(() => {
        if(Object.keys(personalInfo).length > 0){
            setItem({
                first_name: personalInfo.first_name,
                last_name: personalInfo.last_name,
                rg: personalInfo.rg,
                cpf: personalInfo.cpf,
                phone: personalInfo.phone,
                date_of_birth: personalInfo.date_of_birth,
            })
            setEditableInputs(false)
        }
    }, [personalInfo])

    const handleValidate = (e) => {
        const field = e.target.name
        const value = e.target.value
        switch(field){
            case 'cpf':
                setError([...error, error.map(item =>
                    item.field === 'CPF' ? 
                    item.error = !validators.ValidateCPF(value) :
                    null)])
                break;
            case 'date_of_birth':
                setError([...error, error.map(item => 
                    item.field === 'date_of_birth' ? 
                    item.error = !validators.ValidateDateOfBirth(value) :
                    null)])
                break;
            case 'phone':
                setError([...error, error.map(item => 
                    item.field === 'phone' ? 
                    item.error = !validators.ValidatePhone(value) :
                    null)])
                break;
        }
    }
    
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setItem({...item, [name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isValid = true
        error.map(item => item.error ? isValid = false : null)
        if(isValid && validators.NotIsNull(item)){
            const data = {
                first_name: item.first_name,
                last_name: item.last_name,
                rg: item.rg,
                cpf: item.cpf,
                phone: item.phone,
                date_of_birth: item.date_of_birth
            }
            const status = await service.registerPersonalInfo(access_token, data)
            if(status === 200){
                navigate('/home')
            }else{
                alert('Algo deu errado com a sua atualização!' + status)
            }
        }
    }

    return (
        <Form action={handleSubmit}>
            <TitleForm>Informações de Identificação</TitleForm>
            <GroupInputs>
                {error.map(item => item.error ? <ErrorMessage>{item.message}</ErrorMessage> : null)}
                <Label htmlFor='first_name'>Nome:</Label>
                <Input 
                    type='text'
                    name='first_name'
                    onChange={handleChange}
                    value={item.first_name}
                    readOnly={!editableInputs}
                    />
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='last_name'>Sobrenome:</Label>
                <Input
                    type='text'
                    name='last_name'
                    onChange={handleChange}
                    value={item.last_name} 
                    readOnly={!editableInputs}
                    /> 
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='rg'>RG:</Label>
                <Input
                    type='number'
                    name='rg'
                    onChange={handleChange}
                    value={item.rg} 
                    readOnly={!editableInputs}
                    /> 
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='cpf'>CPF:</Label>
                <Input
                    type='number'
                    name='cpf'
                    onChange={handleChange}
                    onBlur={handleValidate}
                    value={item.cpf} 
                    readOnly={!editableInputs}
                    /> 
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='phone'>Celular:</Label>
                <Input
                    type='number'
                    name='phone'
                    onChange={handleChange}
                    onBlur={handleValidate}
                    value={item.phone}
                    readOnly={!editableInputs} 
                    /> 
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='date_of_birth'>Data de Nascimento:</Label>
                <Input
                    type='date'
                    name='date_of_birth'
                    onChange={handleChange}
                    onBlur={handleValidate}
                    value={item.date_of_birth}
                    readOnly={!editableInputs}
                    /> 
            </GroupInputs>
            {!editableInputs ?
            <TertiaryButton to='/' onClick={() => setEditableInputs(true)}>Editar</TertiaryButton> :
            <ButtonSubmit type='submit'>Salvar</ButtonSubmit>
            }   
        </Form>
    )
}

export default FormPersonalInfo
