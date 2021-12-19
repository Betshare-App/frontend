import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form'
import { ButtonSubmit, ErrorMessage, GroupInputs, Input, Label, TitleForm } from '../components/styles/form.styles'
import { service } from '../services/api'
import AuthContext from '../context/AuthContext'

const FormPersonalInfo = () => {
    const navigate = useNavigate()
    const { access_token, personal_info } = useContext(AuthContext)
    const [error, setError] = useState([
        {field: 'CPF', 
        error: false, 
        message: 'CPF/CPNJ inválido'},
        {field: 'phone', 
        error: false, 
        message: 'Número de celular inválido'},
        {field: 'date', 
        error: false, 
        message: 'A idade mínima é 18 anos!'}
    ])

    const [item, setItem] = useState({
        first_name: personal_info ? personal_info.first_name : '',
        last_name: personal_info ? personal_info.last_name : '',
        rg: personal_info ? personal_info.rg : '',
        cpf: personal_info ? personal_info.cpf : '',
        phone: personal_info ? personal_info.phone : '',
        date_of_birth: personal_info ? personal_info.date_of_birth : ''
    })

    console.log(personal_info)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setItem({...item, [name]:value})
    }

    const NotIsNull = () => {
        if(item.first_name !== '' &&
        item.last_name !== '' &&
        item.rg !== '' &&
        item.cpf !== '' &&
        item.phone !== '' &&
        item.date_of_birth !== ''){
            return true
        }
        return false
    }

    const ValidateCPF = () => {
        const regex_cpf_cnpj = /(^[0-9]{14})$|^([0-9]{11})$/
        const validator_cpf = regex_cpf_cnpj.test(item.cpf)
        if(!validator_cpf){
            setError([...error, error.map(item => 
                item.field === 'CPF' ? item.error = true : null)])
        }else{
            setError([...error, error.map(item => 
                item.field === 'CPF' ? item.error = false : null)])
        }
    }

    const ValidatePhone = () => {
        const regex_phone = /^[0-9]{11}$/
        const validator_phone = regex_phone.test(item.phone)
        if(!validator_phone){
            setError([...error, error.map(item => 
                item.field === 'phone' ? item.error = true : null)])
        }else{
            setError([...error, error.map(item => 
                item.field === 'phone' ? item.error = false : null)])
        }
    }

    const ValidateDateOfBirth = () => {
        const birth_year = Number(item.date_of_birth.split('-')[0])
        const birth_month = Number(item.date_of_birth.split('-')[1])
        const birth_day = Number(item.date_of_birth.split('-')[2])
        const now =  Date.now()
        const currentDate = new Date(now)
        const currentYear = Number(currentDate.getFullYear())
        const currentMonth = Number(currentDate.getMonth()) + 1
        const currentDay = Number(currentDate.getDate())

        if((currentYear - birth_year) < 18){   
            setError([...error, error.map(item => 
                item.field === 'date' ? item.error = true : null)])
        }else if(currentYear - birth_year === 18){
            if(currentMonth < birth_month){
                setError([...error, error.map(item => 
                    item.field === 'date' ? item.error = true : null)])
            }else if(currentMonth === birth_month){
                if(currentDay < birth_day){
                    setError([...error, error.map(item => 
                        item.field === 'date' ? item.error = true : null)])
                }else{
                    setError([...error, error.map(item => 
                        item.field === 'date' ? item.error = false : null)])
                }
            }else{
                setError([...error, error.map(item => 
                    item.field === 'date' ? item.error = false : null)])
            }
        }else{
            setError([...error, error.map(item => 
                item.field === 'date' ? item.error = false : null)])
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        const isValid = true

        error.map(item => item.error ? isValid = false : null)
        if(isValid && NotIsNull()){
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
                    />
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='last_name'>Sobrenome:</Label>
                <Input
                    type='text'
                    name='last_name'
                    onChange={handleChange}
                    value={item.last_name} /> 
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='rg'>RG:</Label>
                <Input
                    type='number'
                    name='rg'
                    onChange={handleChange}
                    value={item.rg} /> 
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='cpf'>CPF:</Label>
                <Input
                    type='number'
                    name='cpf'
                    onChange={handleChange}
                    onBlur={ValidateCPF}
                    value={item.cpf} /> 
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='phone'>Celular:</Label>
                <Input
                    type='number'
                    name='phone'
                    onChange={handleChange}
                    onBlur={ValidatePhone}
                    value={item.phone} /> 
            </GroupInputs>
            <GroupInputs>
                <Label htmlFor='date_of_birth'>Data de Nascimento:</Label>
                <Input
                    type='date'
                    name='date_of_birth'
                    onChange={handleChange}
                    onBlur={ValidateDateOfBirth}
                    value={item.date_of_birth} /> 
            </GroupInputs>
            <ButtonSubmit>Salvar</ButtonSubmit>
        </Form>
    )
}

export default FormPersonalInfo
