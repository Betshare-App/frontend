import React, {useState, useEffect} from 'react'
import { TicketNumber } from './styles/gamelist.styles'

const Number = ({number, index, handleSelected, isSelected, color}) => {
    const [selected, setSelected] = useState(false)
    const handleClick = () => {
        handleSelected('i'+index.toString(), number, !selected)
    }

    useEffect(()=>{
        setSelected(isSelected);
    }, [isSelected])

    return (
        <TicketNumber key={index} onClick={handleClick} selected={selected} color={color}>
            {number}
        </TicketNumber>
    )
}

export default Number
