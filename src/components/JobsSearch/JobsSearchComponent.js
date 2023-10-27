import styled from 'styled-components'
import bannerSearch from '~/assets/bannerSearch.png'
export const Container = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    @media (max-width: 1024px) {
        margin-left: 0%;
        margin-right: 0%;
    }
`
export const JobSearchBanner = styled.div`
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
    width: 40%;
    @media (max-width: 1024px) {
        width: 20%;
    }
    height: 40px;
`
export const Dropdown = styled.select`
    height: 40px;
    border-radius: 15px;
    border: 0.7px solid #0085ff;
    background: #fff;
    padding: 5px;
    margin-right: 40px;
    text-align: center;
    color: #656565;
    width: 100%;
    @media (min-width: 768px) {
        width: 150px;
    }
`
export const Option = styled.option`
    background: #fff;
    color: #656565;
    padding: 1rem;
    text-align: center;
    border-radius: 5px;
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
    max-width: 100%;
    margin-right: 40px;

    letter-spacing: 1px;
    transition: transform 80ms ease-in;
    &:active {
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
`

export const RadioLabel = styled.label`
    font-weight: 500;
    color: #656565;
`

export const RadioInput = styled.input`
    margin-right: 5px;
`
export const WrapJobDetail = styled.div`
    border-radius: 15px;
    background: #eee;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border: 1px solid transparent;
    position: relative;
    padding: 5%;
    padding-top: 0;
    position: unset;
    @media (min-width: 768px) {
        padding: 2%;
    }
`
export const WrapJobList = styled.div`
    display: flex;
    border: 1px solid #f4f4f4;
    border-radius: 5px;
    cursor: pointer;
    gap: 16px;
    flex-direction: column;
`
export const WrapElement = styled.div`
    display: flex;
    border-left: #5767aa solid 8px;
    background-color: #e0e4ed;
    border-radius: 10px;
`
export const Image = styled.div`
    align-items: center;
    aspect-ratio: 1/1;
    border: 1px solid #e9eaec;
    border-radius: 8px;
    display: flex;
    height: 100px;
    margin: 0 auto;
    -o-object-fit: contain;
    object-fit: contain;
    padding: 8px;
    position: relative;
    width: 100px;
`
export const Content = styled.div`
    display: inline-grid;
    width: 100%;
`
export const Title = styled.div`
    align-items: baseline;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem 0.5rem 2rem;
`
