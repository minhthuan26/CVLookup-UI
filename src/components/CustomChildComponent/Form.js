import styled from 'styled-components'
import { Col, Container, Row } from 'react-bootstrap'

export const Form = styled.form`
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 50px;
    height: auto;
    width: 100%;
    text-align: center;
    border-radius: 10px;
`
export const TitleForm = styled.h2`
    font-weight: bold;
    color: #2a1892;
    margin: 0;
    margin: 0.5rem;
`

export const InputForm = styled.input`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    border-radius: 8px;
`
export const InputForm2 = styled(InputForm)`
    margin-left: 0.75rem;
    padding: 8px 12px;
`

export const ButtonForm = styled.button`
    border-radius: 10px;
    border: 1px solid #0d0053;
    background-color: #5767aa;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    margin-top: 1rem;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: 0.3s;
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: #84adea;
    }
`
export const GhostButton = styled(ButtonForm)`
    background-color: transparent;
    border-color: #5767aa;
    color: #5767aa;

    &:hover {
        background-color: #eee;
        color: #5767aa;
    }
`
export const LabelForm = styled.label`
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
export const TitleInput = styled.h5`
    font-weight: 500;
    color: #0d0053;
    margin-top: 1rem;
    text-align: start;
    font-size: 1.25rem;
`

export const TextArea = styled.textarea`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    height: 120px;
    border-radius: 8px;
`
