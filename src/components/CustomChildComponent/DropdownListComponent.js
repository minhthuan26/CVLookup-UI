import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Dropdown } from 'react-bootstrap'

function DropdownListComponent(props) {
    const [selectedItem, setSelectedItem] = useState(
        props.value ? props.value : null
    )
    useEffect(() => {
        setSelectedItem(props.value ?? null)
    }, [props.value])
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

export default DropdownListComponent

const Dropdowns = styled(Dropdown)`
    display: flex;
    justify-content: flex-start;
    margin-left: 0.75rem;
    width: 300px;

    .dropdown-menu {
        max-height: 30vh;
        overflow-y: auto;
    }
`
