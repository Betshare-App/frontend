import styled from 'styled-components/macro'
import { Link, Navigate } from 'react-router-dom'

export const LogoStyled = styled.h1`
    display: flex;
    align-items: center;
    a{
        font-size: 1.3rem;
        color: white;
        font-family: 'Futura Bold';
        cursor: pointer;
        text-decoration: none;
    }
`
export const ContainerHeader = styled.div`
    width: 100%;
    height: 40px;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #005DA8;
    display: flex;
    justify-content: center;
    z-index: 100;
`
export const HeaderLink = styled(Link)`
    color: white;
    margin-right: 10px;
    font-weight: 600;
    font-family: 'Futura Bold';
    text-decoration: none;
`
export const LabelBalance = styled.div`
    color: white;
    font-weight: 600;
    font-family: 'Futura Bold';
`

export const LogoutBtn = styled.div`
    color: white;
    margin-right: 10px;
    font-weight: 600;
    font-family: 'Futura Bold';
    text-decoration: none;
    cursor: pointer;
`
export const ContainerAuth = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        margin: 0 10px;
    }
`

export const Inner =  styled.div`
    max-width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 90%
`

export const ContainerCartLink = styled.div`
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: 600;
        font-family: 'Futura Bold';
        text-decoration: none;
    }

`

export const ViewCountCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    font-family: 'Futura Bold';
    color: #fff;
    border-radius: 50%;
    background: red;
    position: relative;
    z-index: 2;
    top: 10px;
    left: -15px;
    margin: 0;
`

export const ContainerTicketsLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        text-decoration: none;
        font-family: 'Futura Bold';
        color: #fff;
    }
`

export const MenuScreenMobile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: -10px;
    top: 40px;
    height: 100%;
    width: 100vw;
    background: black;
    opacity: 0.9; 
    padding-top: 20px;
    div{
        margin-top: 40px;
        font-size: 1.8rem;
    }
    a {
        margin-top: 10px;
        font-size: 1.8rem;
    }
`