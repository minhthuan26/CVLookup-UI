import React, { useState } from 'react'
import styled from 'styled-components'
import { Dropdown } from 'react-bootstrap'

function DropdownListCoponent(props) {
    const [selectedItem, setSelectedItem] = useState(null)

    const handleItemClick = (selected) => {
        setSelectedItem(selected)
        if (props.onSelect) {
            props.onSelect(selected)
        }
    }

    return (
        <Dropdowns drop="down">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {selectedItem
                    ? selectedItem[props.item]
                    : `--Chọn ${props.title}--`}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {props.data && props.data.length > 0 ? (
                    props.data.map((items) => (
                        <Dropdown.Item
                            key={items.id}
                            onClick={() => handleItemClick(items)}>
                            {items[props.item]}
                        </Dropdown.Item>
                    ))
                ) : (
                    <Dropdown.Item disabled>
                        --Không có {props.title}--
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdowns>
    )
}

export default DropdownListCoponent

const Dropdowns = styled(Dropdown)`
    display: flex;
    justify-content: flex-start;
    margin-left: 0.75rem;
    .dropdown-menu {
        max-height: 20vh;
        overflow-y: auto;
    }
`
