const { createContext, useState } = require("react");

const LoginModalContext = createContext({})

export const LoginModalProvider = ({ children }) => {
    const [loginModal, setLoginModal] = useState(false)
    return (
        <LoginModalContext.Provider value={{
            loginModal,
            setLoginModal
        }} >
            {children}
        </LoginModalContext.Provider>
    )
}

export default LoginModalContext