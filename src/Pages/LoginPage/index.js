import React, { useEffect, useState } from 'react'
import * as LoginComponents from './LoginComponents'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
    doLogin,
    doLogout,
    doRegisterCandidate,
    doRegisterEmployer,
} from '~/action/authApi'
import usePrivateAxios from '~/action/AxiosCredentials'
function LoginPage() {
    const [signIn, toggle] = useState(true)
    const [isCandidate, setIsCandidate] = useState(true)
    const [selectedFileName, setSelectedFileName] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [retryPass, setRetryPass] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [birthDay, setBirthDay] = useState('')
    const [avatar, setAvatar] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')
    const user = useSelector((state) => state.auth.credentials.user)
    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleNameFileChange = (event) => {
        const fileName = event.target.files[0]?.name
        setSelectedFileName(fileName)
        setAvatar(event.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        if (!email.trim()) {
            toast.error('Email không được để trống')
            return
        }
        if (!password.trim()) {
            toast.error('Password không được để trống')
            return
        }

        const account = {
            email: email,
            password: password,
        }

        const login = async (account, dispatch, navigate, from) =>
            await doLogin(account, dispatch, navigate, from)
        login(account, dispatch, navigate, from)
    }

    const handleRegisterTransform = (check) => {
        toggle(false)
        setIsCandidate(check)
    }

    const handleRegisterCandidate = (e) => {
        e.preventDefault()

        const phoneRegex = /^\d{10}$/

        if (
            userName === '' ||
            registerEmail === '' ||
            registerPassword === '' ||
            retryPass === '' ||
            lastName === '' ||
            firstName === '' ||
            birthDay === '' ||
            avatar === '' ||
            phoneNumber === ''
        ) {
            toast.error('Vui lòng điền đầy đủ thông tin.')
        } else if (!phoneRegex.test(phoneNumber)) {
            toast.error('Số điện thoại không đúng định dạng.')
        } else if (registerPassword !== retryPass) {
            toast.error('Mật khẩu không khớp.')
        }
        const newUser = {
            candidate: {
                email: registerEmail,
                phoneNumber: phoneNumber,
                avatar: avatar,
                username: userName,
                lastName: lastName,
                firstName: firstName,
                dateOfBirth: birthDay,
            },
            account: {
                password: registerPassword,
                email: registerEmail,
            },
        }
        const registerCandidate = async (newUser, dispatch, navigate, from) =>
            await doRegisterCandidate(newUser, dispatch, navigate, from)
        registerCandidate(newUser, dispatch, navigate, from)
    }

    const handleRegisterEmployer = (e) => {
        e.preventDefault()

        const phoneRegex = /^\d{10}$/

        if (
            registerEmail === '' ||
            registerPassword === '' ||
            retryPass === '' ||
            avatar === '' ||
            phoneNumber === '' ||
            userName === '' ||
            description === ''
        ) {
            toast.error('Vui lòng điền đầy đủ thông tin.')
        } else if (!phoneRegex.test(phoneNumber)) {
            toast.error('Số điện thoại không đúng định dạng.')
        } else if (registerPassword !== retryPass) {
            toast.error('Mật khẩu không khớp.')
        }
        const newUser = {
            employer: {
                email: registerEmail,
                phoneNumber: phoneNumber,
                avatar: avatar,
                username: userName,
                employerName: fullName,
                address: address,
                description: description,
            },
            account: {
                password: registerPassword,
                email: registerEmail,
            },
        }
        const registerEmployer = async (newUser, dispatch, navigate, from) =>
            await doRegisterEmployer(newUser, dispatch, navigate, from)
        registerEmployer(newUser, dispatch, navigate, from)
    }

    const handleLogout = (e) => {
        const currentPage = '/login'
        const logout = async (axiosPrivate, dispatch, navigate, from) =>
            await doLogout(axiosPrivate, dispatch, navigate, from)
        logout(axiosPrivate, dispatch, navigate, currentPage)
    }
    return (
        <>
            <LoginComponents.Container>
                {isCandidate ? (
                    <LoginComponents.SignUpContainer signin={+signIn}>
                        <LoginComponents.Form
                            onSubmit={handleRegisterCandidate}>
                            <LoginComponents.Title>
                                Đăng ký tài khoản
                            </LoginComponents.Title>
                            <LoginComponents.Row>
                                <LoginComponents.Input
                                    type="text"
                                    placeholder="Họ"
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                                <LoginComponents.Input
                                    type="text"
                                    placeholder="Tên"
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                            </LoginComponents.Row>
                            <LoginComponents.Input
                                type="text"
                                placeholder="Tên tài khoản"
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <LoginComponents.Input
                                type="text"
                                placeholder="Số điện thoại"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <LoginComponents.Input
                                type="email"
                                placeholder="Email"
                                onChange={(e) =>
                                    setRegisterEmail(e.target.value)
                                }
                            />
                            <LoginComponents.Input
                                type="password"
                                placeholder="Mật khẩu"
                                onChange={(e) =>
                                    setRegisterPassword(e.target.value)
                                }
                            />
                            <LoginComponents.Input
                                type="password"
                                placeholder="Nhập lại mật khẩu"
                                onChange={(e) => setRetryPass(e.target.value)}
                            />
                            <LoginComponents.Row>
                                <label
                                    style={{
                                        width: '30%',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}>
                                    Ngày sinh:
                                </label>
                                <LoginComponents.Input
                                    type="date"
                                    placeholder="Ngày sinh"
                                    onChange={(e) =>
                                        setBirthDay(e.target.value)
                                    }
                                />
                            </LoginComponents.Row>
                            <LoginComponents.Row>
                                <LoginComponents.Label
                                    htmlFor="getImage"
                                    style={{ position: 'relative' }}>
                                    {selectedFileName
                                        ? `Chọn ảnh: ${selectedFileName}`
                                        : 'Chọn ảnh đại diện'}
                                </LoginComponents.Label>
                            </LoginComponents.Row>

                            <LoginComponents.Input
                                type="File"
                                placeholder="Chọn Avatar"
                                accept="image/png, image/jpeg"
                                id="getImage"
                                style={{
                                    visibility: 'hidden',
                                    height: '0',
                                    padding: '0',
                                    margin: '0',
                                }}
                                onChange={handleNameFileChange}
                            />
                            <LoginComponents.Button>
                                Đăng ký
                            </LoginComponents.Button>
                        </LoginComponents.Form>
                    </LoginComponents.SignUpContainer>
                ) : (
                    <LoginComponents.SignUpContainer signin={+signIn}>
                        <LoginComponents.Form onSubmit={handleRegisterEmployer}>
                            <LoginComponents.Title>
                                Đăng ký tuyển dụng
                            </LoginComponents.Title>
                            <LoginComponents.Input
                                type="text"
                                placeholder="Họ và tên"
                                onChange={(e) => setFullName(e.target.value)}
                            />
                            <LoginComponents.Input
                                type="text"
                                placeholder="Tên tài khoản"
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <LoginComponents.Input
                                type="text"
                                placeholder="Số điện thoại"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <LoginComponents.Input
                                type="email"
                                placeholder="Email"
                                onChange={(e) =>
                                    setRegisterEmail(e.target.value)
                                }
                            />
                            <LoginComponents.Input
                                type="password"
                                placeholder="Mật khẩu"
                                onChange={(e) =>
                                    setRegisterPassword(e.target.value)
                                }
                            />
                            <LoginComponents.Input
                                type="password"
                                placeholder="Nhập lại mật khẩu"
                                onChange={(e) => setRetryPass(e.target.value)}
                            />
                            <LoginComponents.Input
                                type="text"
                                placeholder="Địa chỉ công ty"
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <LoginComponents.Label
                                htmlFor="getImage"
                                style={{ position: 'relative' }}>
                                {selectedFileName
                                    ? `Chọn ảnh: ${selectedFileName}`
                                    : 'Chọn ảnh đại diện hoặc logo công ty'}
                            </LoginComponents.Label>
                            <LoginComponents.Input
                                type="File"
                                placeholder="Chọn Avatar"
                                accept="image/png, image/jpeg"
                                id="getImage"
                                style={{
                                    visibility: 'hidden',
                                    height: '0',
                                    padding: '0',
                                    margin: '0',
                                }}
                                onChange={handleNameFileChange}
                            />
                            <LoginComponents.TextArea
                                placeholder="Viết mô tả ngắn về công ty"
                                rows="4"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <LoginComponents.Button>
                                Đăng ký
                            </LoginComponents.Button>
                        </LoginComponents.Form>
                    </LoginComponents.SignUpContainer>
                )}

                {!user ? (
                    <LoginComponents.SignInContainer signin={+signIn}>
                        <LoginComponents.Form onSubmit={handleLogin}>
                            <LoginComponents.Title>
                                Đăng nhập
                            </LoginComponents.Title>
                            <LoginComponents.Input
                                type="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <LoginComponents.Input
                                type="password"
                                placeholder="Mật khẩu"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <LoginComponents.Anchor href="#">
                                Quên mật khẩu?
                            </LoginComponents.Anchor>
                            <LoginComponents.Button
                                type="submit"
                                value="Submit">
                                Đăng nhập
                            </LoginComponents.Button>
                        </LoginComponents.Form>
                    </LoginComponents.SignInContainer>
                ) : (
                    <LoginComponents.SignInContainer signin={+signIn}>
                        <LoginComponents.LogoutContainer>
                            <span
                                style={{ color: 'red', marginBottom: '2rem' }}>
                                * Vui lòng đăng xuất khỏi tài khoản hiện tại
                                trước khi đăng nhặp 1 tài khoản khác.
                            </span>
                            <LoginComponents.Button
                                type="submit"
                                value="Submit"
                                onClick={handleLogout}>
                                Đăng xuẩt
                            </LoginComponents.Button>
                        </LoginComponents.LogoutContainer>
                    </LoginComponents.SignInContainer>
                )}

                <LoginComponents.OverlayContainer signin={+signIn}>
                    <LoginComponents.Overlay signin={+signIn}>
                        <LoginComponents.LeftOverlayPanel signin={+signIn}>
                            <LoginComponents.Title style={{ color: 'white' }}>
                                Chào mừng bạn
                            </LoginComponents.Title>
                            <LoginComponents.Paragraph>
                                Hãy điền đầy đủ thông tin để có thể dễ dàng kết
                                nối với chúng tôi nhé
                            </LoginComponents.Paragraph>
                            <LoginComponents.GhostButton
                                onClick={() => toggle(true)}>
                                Đăng nhập
                            </LoginComponents.GhostButton>
                        </LoginComponents.LeftOverlayPanel>

                        <LoginComponents.RightOverlayPanel signin={+signIn}>
                            <LoginComponents.Title style={{ color: 'white' }}>
                                Xin chào
                            </LoginComponents.Title>
                            <LoginComponents.Paragraph>
                                Hãy điền đầy đủ và chính xác thông tin để trải
                                nghiệm CVLookup nhé!
                            </LoginComponents.Paragraph>
                            <LoginComponents.Title
                                style={{
                                    color: 'white',
                                    fontSize: '1rem',
                                    paddingBottom: '2rem',
                                }}>
                                Đăng ký tài khoản:
                            </LoginComponents.Title>
                            <LoginComponents.WrapGhostButton
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                }}>
                                <LoginComponents.GhostButton
                                    onClick={() =>
                                        handleRegisterTransform(true)
                                    }>
                                    Ứng viên
                                </LoginComponents.GhostButton>
                                <br />
                                <LoginComponents.GhostButton
                                    onClick={() =>
                                        handleRegisterTransform(false)
                                    }>
                                    Tuyển dụng
                                </LoginComponents.GhostButton>
                            </LoginComponents.WrapGhostButton>
                        </LoginComponents.RightOverlayPanel>
                    </LoginComponents.Overlay>
                </LoginComponents.OverlayContainer>
            </LoginComponents.Container>
        </>
    )
}
export default LoginPage
