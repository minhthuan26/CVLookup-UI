import React from 'react'
import * as SearchBarComponent from './SearchBarComponent'

const SearchBar = () => {
    return (
        <SearchBarComponent.WrapSearch>
            <SearchBarComponent.SearchBarItem></SearchBarComponent.SearchBarItem>
            <SearchBarComponent.SearchBox>
                <SearchBarComponent.BtnSearch>
                    <i className="fas fa-search"></i>
                </SearchBarComponent.BtnSearch>
                <SearchBarComponent.InputSearch
                    type="text"
                    placeholder="Nhập công việc..."
                />
            </SearchBarComponent.SearchBox>
        </SearchBarComponent.WrapSearch>
    )
}

export default SearchBar
