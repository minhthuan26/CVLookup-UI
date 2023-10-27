import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: start;
    height: 80px;
    padding: 0 2rem;
    background-color: #0d0053;
    color: #eee;
`
export const Logo = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`
export const NavList = styled.nav`
    padding: 2rem;
`

export const LinkStyled = styled(Link)`
    margin: 0 1rem;
    color: #eee;
    font-weight: 400;
    text-decoration: none;
    transition: 0.5s;

    &:hover {
        color: #2193d1;
    }
`

export const LinkName = styled(Link)`
    margin-left: auto;
    padding: 10px;
    border-radius: 8px;
    background-color: #5767aa;
    color: #eee;
    transition: 0.75s;

    &:hover {
        background-color: #eee;
        color: #0d0053;
    }
`

export const LinkName2 = styled(Link)`
    margin-left: 10px;
    padding: 10px;
    border-radius: 8px;
    background-color: #eee;
    color: #2193d1;
    transition: 0.75s;

    &:hover {
        background-color: #5767aa;
        color: #0d0053;
    }
`
