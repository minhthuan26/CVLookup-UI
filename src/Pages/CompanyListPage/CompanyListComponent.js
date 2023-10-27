import styled from 'styled-components'
import bannerSearch from '~/assets/bannerSearch.png'

export const CompanySearchBanner = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 90px;
    background-image: url(${bannerSearch});
    background-repeat: no-repeat;
`
export const InputField = styled.input`
    padding: 10px;
    border-radius: 15px;
    border: 0.7px solid #0085ff;
    background: #fff;
    margin-right: 40px;
    color: #656565;
    width: 60%;
    height: 40px;
`
export const Button = styled.button`
    border-radius: 20px;
    height: 40px;
    text-align: center;
    align-items: center;
    border: 1px solid #0085ff;
    background-color: #5767aa;
    color: #ffffff;
    font-size: 15px;
    font-weight: bold;
    padding: 0 45px;
    max-width: 20%;
    letter-spacing: 1px;
    transition: transform 80ms ease-in;
    &:active {
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
    @media (max-width: 768px) {
        font-size: 10px;
        width: 20%;
    }
`
