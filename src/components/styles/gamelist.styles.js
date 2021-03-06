import styled from 'styled-components/macro'

export const ContainerGameList =  styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 100%;
    width: 100%;
    max-width: 900px;
    margin-top: 40px;
`
export const OpacityFill = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 74px);
    background: black;
    z-index: 2;
    opacity: 0.7;
    margin: -100% 0 0 0;
    p {
        color: white;
        font-family: 'Futura Bold';
        font-size: 1.3rem;
    }
`

export const ContainerGameItem = styled.div`
    border: 7px solid #fff;
    display: flex;
    min-width: 320px;
    min-height: 300px;
    background: #FFFCD5;
    flex-direction: column;
    margin: 5px;
    max-height: ${props => props.toggle ? '150%' : '300px'};
    &:hover{
        background: ${props => props.toggle ? '#FFFCD5' : '#F8F1D1'};
        cursor: ${props => props.toggle ? 'initial' : 'pointer'};
    }
`

export const CloverImage = styled.div`
    height: 20px;
    width: 20px;
    margin-right: 10px;
    align-self: center;
`

export const ContainerInner = styled.div`
    display: flex;
    flex-direction: column;
`

export const GameName = styled.div`
    font-family: 'Futura Bold';
    display: flex;
    color: white;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;
    background: ${props => props.color ? props.color : '#005DA8'};
    padding: 10px;

`
export const GameNumbers = styled.div`
    font-size: 1rem;
    color: white;
    font-family: 'Futura Bold';
    display: flex;
    background: ${props => props.color ? props.color : '#F6941E'};
    justify-content: center;
    align-items: flex-end;
    text-align: center;
    border-top: 5px solid #fff;
`

export const Inner = styled.div`
    width: 100%;
    height: 100vh;
    max-witdh: 900px;
    display: flex;
    justify-content: center;
    padding-top: 2px;
`

export const TicketNumbersStyled = styled.div`
    font-size: 0.9rem;
    display: grid;
    grid-template-columns: repeat(${props => props.total_queue ? props.total_queue : 10}, 1fr);
    justify-items: center;
    border-top: 5px solid white;
    padding-top: 10px;
`

export const TicketNumber = styled.div`
    height: 22px;
    width: 22px;
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 0.8rem;
    font-family: monospace;
    color: ${props => props.selected ? props.color : '#F6941E'};
    cursor: pointer;
    text-decoration: ${props => props.selected ? 'line-through' : 'none'};
    @media screen and (max-width:330px){
        font-size: 0.7rem;
        height: 15px;
        width: 15px;
        margin: 0;
        padding: 0;
    }
`

export const ContainerGameInput = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    max-width: 300px;
    margin: auto 0 0 0;
`
export const GroupGameInput =  styled.div`
    display: flex;
    padding: 15px 0;
    border-top: 5px solid #FFF;
    input[type='number']{
        padding: 5px;
        margin: 0 10px;
        text-align: center;
        font-weight: 600;
        color: #F6941E;
        align-self: center;
        max-width: 33%;
        background: #fff;
    }
    &:nth-child(1){
        flex-direction: column;
        label {
            text-align: center;
        }
    }
`
export const Input = styled.input`
    flex: 1;
    background: rgba(255,255,255,0);
    border: 2px solid #F6941E;
    outline: none;
`
export const TotalQuotes = styled.p`
    font-family: 'Futura Bold';
    color: #F6941E;
    align-self: center;
`
export const Label = styled.label`
    font-size: 0.9rem;
    color: #F6941E;
    text-align: right;
    margin-bottom: 5px;
    min-width: 50%;
    font-weight: 600;
    align-self: center;
`

export const GroupInputInner = styled.div`
    display: flex;
`

export const NumbersView = styled.div`
    display: flex;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    background: ${props => props.color ? props.color : '#FFF'};
    color: ${props => props.color ? '#FFF' : '#000'};
`

export const MoneyView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 70px;
    font-size: 0.8rem;
    margin-left: 10px;
    color: #F6941E;
    font-weight: 600;
    flex: 1;
`
export const CloseToggle = styled.div`
    background: ${props => props.color ? props.color : '#F6941E;'};
    cursor: pointer;
    border-top: 5px solid #fff;
    display: flex;
    justify-content: center;
    font-weight: 600;
    color: #fff;
    &:hover{
        opacity: 0.8;
    }
`
export const OpenToggle = styled.div`
    background: ${props => props.color ? props.color : '#F6941E;'};
    margin: auto 0 0 0;
    cursor: pointer;
    border-top: 5px solid #fff;
    display: flex;
    justify-content: center;
    font-weight: 600;
    color: #fff;
    &:hover{
        opacity: 0.8;
    }
`

export const Button = styled.div`
    font-size: 1rem;
    color: white;
    font-weight: 600;
    display: flex;
    font-family: 'Futura Bold';
    flex: 1;
    cursor: pointer;
    background: ${props => props.color ? props.color : '#F6941E'};
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px 0;
    border-top: 5px solid #fff;
    &:hover{
        opacity: 0.8;
    }
`

export const GroupToggle = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    margin: auto 0 0 0 ;
`

export const GroupButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    margin-bottom: -15px;
    backgrund: red;
    width: 100%;
    
`

export const SuggestText = styled.p`
    font-size: 0.8rem;
    text-align: center;
    flex: 1;
    align-self: center;
    color: #F6941E;
`

export const ActionButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 3px;
    margin-left: 3px;
    cursor: pointer;
    font-weight: 600;
    border: 2px solid #fff;
    background: ${props => props.color ? props.color : '#000'};
    &:hover{
        opacity: 0.8;
    }
`

export const ContainerNumberList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 10px;

`

