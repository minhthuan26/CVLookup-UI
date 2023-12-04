import React from 'react'
import { Container } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'

function PopupBase(props) {
    return props.trigger ? (
        <PopUp className="modal" style={{ overflow: 'hidden' }}>
            <WrapPopUp>
                <TitleBar>
                    <Title>{props.title}</Title>
                    <CloseBtn
                        onClick={() => {
                            props.setTriger(false)
                        }}>
                        &times;
                    </CloseBtn>
                </TitleBar>
                <Container>{props.children}</Container>
                <hr />
            </WrapPopUp>
        </PopUp>
    ) : null
}

export default PopupBase

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
const fadeOut = keyframes`
    from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
`

const scaleIn = keyframes`
    to {
        opacity: 1;
        transform: scale(1);
    }
`

const PopUp = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    padding: 10px;
    box-sizing: border-box;
    opacity: 0;
    animation: ${fadeIn} 0.2s forwards;

    display: flex;
    align-items: center;
    justify-content: center;
`
const WrapPopUp = styled.div`
    width: 100%;
    max-width: 55vw;
    height: auto;
    max-height: 100vh;
    background: white;
    font-size: 14px;
    font-family: 'Noto Sans', sans-serif;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    opacity: 0;
    transform: scale(0.75);
    animation: ${scaleIn} 0.2s forwards 0.2s;
`

const TitleBar = styled.div`
    background: #0d0053;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem;
`
const Title = styled.span`
    font-weight: bold;
    font-size: 1.1rem;
`
const CloseBtn = styled.button`
    background: none;
    outline: none;
    border: none;
    transform: scale(2.5);
    color: #ffffff;
    transition: color 0.15s;
    animation-name: ${fadeOut};
    &:hover {
        color: #ff0000;
        cursor: pointer;
    }
`
