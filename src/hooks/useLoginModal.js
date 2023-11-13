import { useContext } from 'react'
import LoginModalContext from '~/context/loginModalContext'

const useLoginModal = () => {
    return useContext(LoginModalContext)
}

export default useLoginModal