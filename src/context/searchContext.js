const { createContext, useState } = require("react");

const SearchContext = createContext({})

export const SearchProvider = ({ children }) => {
    const [searchResult, setSearchResult] = useState([])
    return (
        <SearchContext.Provider value={{ searchResult, setSearchResult }} >
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext

