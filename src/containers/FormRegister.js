import React, { useState, useEffect } from 'react'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'
import { ButtonSubmit, 
        GroupInputs, 
        Input, 
        Label, 
        SecundaryButton, 
        TitleForm,
        ErrorMessage } from '../components/styles/form.styles'
import { service } from '../services/api'

const FormRegister = () => {
    const [error, setError] = useState()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const navigate = useNavigate()

    useEffect(() => {

        const verify_credentials = async () => {
            const credentials = await service.credentialsIsValid(username, email)
            if(!credentials.username_isvalid){
                setError('Usuário indisponível')
            }else if(!credentials.email_isvalid){
                setError('e-mail indisponível')
            }else{
                setError('')
            }
        }
        const debounce = setTimeout(() => verify_credentials(), 500)

        return () => clearTimeout(debounce)
    }, [username, email])

    useEffect(() => {
        const msg_error = 'As senhas não coincidem'
        if(password !== password2){
            setError(msg_error)
        }else if(error === msg_error){
            setError('')
        }
    }, [password2])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(error === ''){
            const response = await service.register(username, password, email)
            if(response === 201){
                navigate('/login')
            }else{
                alert('Algo deu errado com o seu cadastro!')
            }
        }else{
            alert(error)
        }
    }

    const checkLength = (e) => {
        const pwd = e.target.value
        const msg_error = 'A senha deve conter pelo menos 8 digitos'
        if(pwd.length < 8){
            setError(msg_error)
        }else if(error === msg_error){
            setError('')
        }
    }

    return (
            <Form action={handleSubmit}>
                <TitleForm>Registre-se</TitleForm>
                {error &&
                <ErrorMessage>{error}</ErrorMessage>}
                <GroupInputs>
                    <Label htmlFor='username'>Usuário</Label>
                    <Input 
                        type='text' 
                        name='username' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                </GroupInputs>
                <GroupInputs>
                    <Label htmlFor='email'>E-mail</Label>
                    <Input 
                        type='email' 
                        name='email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </GroupInputs>
                <GroupInputs>
                    <Label htmlFor='password'>Senha</Label>
                    <Input 
                        type='password' 
                        name='password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={checkLength}/>
                </GroupInputs>
                <GroupInputs>
                    <Label htmlFor='password2'>Confirme a senha</Label>
                    <Input 
                        type='password' 
                        name='password2'
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)} />
                </GroupInputs>
                <ButtonSubmit>Registrar</ButtonSubmit>
                <SecundaryButton to='/login'>Voltar</SecundaryButton>
            </Form>
    )
}

export default FormRegister
