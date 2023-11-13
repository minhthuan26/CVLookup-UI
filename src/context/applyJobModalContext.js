const { createContext, useState } = require("react");

const ApplyJobModalContext = createContext({})

export const ApplyJobModalProvider = ({ children }) => {
    const [applyJobModal, setApplyJobModal] = useState(false)

    return (
        <ApplyJobModalContext.Provider value={{
            applyJobModal,
            setApplyJobModal
        }} >
            {children}
        </ApplyJobModalContext.Provider>
    )
}

export default ApplyJobModalContext