import React, { useContext } from 'react'
import SearchContext from '~/context/searchContext'

const useSearch = () => {
    return useContext(SearchContext)
}

export default useSearch