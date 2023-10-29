import axios from 'axios'
import {
    loginFail,
    loginStart,
    loginSuccess,
    registerFail,
    registerStart,
    registerSuccess,
} from './authSlice'
import { authUrl } from '~/utils/ApiUrl'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post(authUrl.login, user)
        if (res.data.success) {
            dispatch(loginSuccess(res.data))
            navigate('/')
        } else {
            toast.error('Sai email hoặc mật khẩu, vui lòng kiểm tra lại.')
            dispatch(loginFail())
        }
    } catch (error) {
        dispatch(loginFail())
        toast.error(
            'Đã xảy ra lỗi trong quá trình đăng nhập. Vui lòng thử lại sau.'
        )
    }
}

export const registerCandidate = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        const res = await axios.post(authUrl.registerCandidate, user)
        console.log(res.data)
        if (res.data.success) {
            toast.info(
                'Đăng ký tài khoản thành công, vui lòng kiểm tra hòm thư email để kích hoạt.'
            )
            dispatch(registerSuccess(res.data))
            navigate('/login')
        } else {
            toast.error('Email đã tồn tại vui lòng thử lại.')
            dispatch(registerFail())
        }
    } catch (error) {
        toast.error(
            'Đã xảy ra lỗi trong quá trình xử lý. Vui lòng thử lại sau.'
        )
        dispatch(registerFail())
    }
}
