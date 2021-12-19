import React from 'react'
import { ItemMenu, Menu } from './styles/form.styles'

const DropDown = ({data, handle}) => {
    return (
        <>
        <Menu>
        {data.map((item) =>
            <ItemMenu 
            key={item.name} 
            active={item.active}
            onClick={() => handle(item.name)}>
                {item.name}
            </ItemMenu>)
        }
        </Menu>
        {data.map((item) => item.active ? 
            item.element : null)
        }
        </>
    )
}

export default DropDown
