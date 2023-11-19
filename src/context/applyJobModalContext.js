const { createContext, useState } = require("react");

const ApplyJobModalContext = createContext({})

export const ApplyJobModalProvider = ({ children }) => {
    const [applyJobModal, setApplyJobModal] = useState(false)
    const [isAlreadyApply, setIsAlreadyApply] = useState(false)
    const [appliedCv, setAppliedCv] = useState()
    const [user, setUser] = useState()

    return (
        <ApplyJobModalContext.Provider value={{
            applyJobModal,
            setApplyJobModal,
            isAlreadyApply,
            setIsAlreadyApply,
            appliedCv,
            setAppliedCv,
            user,
            setUser
        }} >
            {children}
        </ApplyJobModalContext.Provider>
    )
}

export default ApplyJobModalContext