import styled from 'styled-components'

export const Container = styled.div`
    margin: auto;
    margin-top: 3% 0;
    margin-bottom: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 800px;
    max-width: 100%;
    min-height: 800px;
`

export const SignUpContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 70%;
    opacity: 0;
    z-index: 1;
    ${(props) =>
        props.signin !== 1
            ? `
            transform: translateX(45%);
            opacity: 1;
            z-index: 5;
            `
            : null}
`

export const SignInContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 70%;
    z-index: 2;
    ${(props) => (props.signin !== 1 ? `transform: translateX(100%);` : null)}
`

export const Form = styled.form`
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
`

export const LogoutContainer = styled.div`
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
`

export const Title = styled.h1`
    font-weight: bold;
    color: #2a1892;
    margin: 0;
`

export const Input = styled.input`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
`
export const TextArea = styled.textarea`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    height: 120px;
`
export const Label = styled.label`
    cursor: pointer;
    display: flex;
    background-color: #eee;
    text-align: center;
    align-items: center;
    padding: 12px 15px;
    margin: 8px 0;
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    width: 100%;
`
export const Button = styled.button`
    border-radius: 20px;
    border: 1px solid #0d0053;
    background-color: #5767aa;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    /* transition: transform 80ms ease-in;
    &:active {
        transform: scale(0.3);
    } 
    Thêm hiệu ứng này nó ảnh hưởng transition của overlay nên cmt lại
    */
    &:focus {
        outline: none;
    }
`
export const GhostButton = styled(Button)`
    background-color: transparent;
    border-color: #ffffff;
    padding: 15px;
    &:hover {
        background-color: #eee;
        color: #5767aa;
    }
`
export const WrapGhostButton = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Anchor = styled.a`
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
`
export const OverlayContainer = styled.div`
    position: absolute;
    top: 0;
    left: 70%;
    width: 30%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
    ${(props) => (props.signin !== 1 ? `transform: translateX(-234%);` : null)}
`

export const Overlay = styled.div`
    background: #ff416c;
    background: -webkit-linear-gradient(to right, #0d0053, #2a1892);
    background: linear-gradient(to right, #0d0053, #2a1892);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    ${(props) => (props.signin !== 1 ? `transform: translateX(50%);` : null)}
`

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`

export const LeftOverlayPanel = styled(OverlayPanel)`
    transform: translateX(-20%);
    ${(props) => (props.signin !== 1 ? `transform: translateX(0);` : null)}
`

export const RightOverlayPanel = styled(OverlayPanel)`
    right: 0;
    transform: translateX(0);
    ${(props) => (props.signin !== 1 ? `transform: translateX(20%);` : null)}
`

export const Paragraph = styled.p`
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    margin: 8px 0;
`
