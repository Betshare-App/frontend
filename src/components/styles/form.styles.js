import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const FormContainer = styled.div`
    max-width: 400px;
    width: 98%;
    background: #fff;
    border-radius: 10px;
    margin-top: 50px;
    padding: 20px;
    display: flex;
    justify-content: center;
`

export const FormElement = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleForm = styled.h1`
    font-size: 1.3rem;
    font-family: 'Futura Bold';
    margin: 5px;
`

export const GroupInputs = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 15px;
`
export const Label = styled.label`
    font-weight: 600;
    font-size: 0.8rem;
    margin-bottom: 3px;
`

export const Input = styled.input`
    flex: 1;
    padding: 5px;
    border: 1px solid;
    outline: none;
`

export const Select = styled.select`
    flex: 1;
    padding: 5px;
    border: 1px solid;
    outline: none;
`

export const SecundaryButton = styled(Link)`
    font-family: 'Futura Bold';
    text-decoration: none;
    color: #000;
    margin-top: 5px;
    &:hover{
        opacity: 0.8;
    }
`

export const TertiaryButton = styled.div`
    font-family: 'Futura Bold';
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: orange;
    margin-top: 5px;
    &:hover{
        opacity: 0.8;
    }
`

export const ButtonSubmit = styled.button`
    border: none;
    width: 50%;
    padding: 8px;
    background: orange;
    color: #fff;
    font-family: 'Futura Bold';
    margin-top: 10px;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`

export const ErrorMessage = styled.span`
    font-size: 0.9rem;
    color: red;
    text-align: center;
`

export const Menu = styled.div`
    display: flex;
    margin: 50px 0 -40px 0;
    height: 40px;
    width: 210px;
    background: #fff;
`

export const ItemMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 70px;
    font-family: 'Futura Bold';
    font-size: 0.8rem; 
    color: ${props => props.active ? '#fff' : '#000'};
    background: ${props => props.active ? '#005DA8' : '#fff' };
    cursor: pointer;
`