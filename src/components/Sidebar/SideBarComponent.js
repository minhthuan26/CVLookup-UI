import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.main`
    position: relative;
    margin: 3rem 0 0 0;
    padding: 0 1rem;
    font-size: 1rem;
    font-family: 'Nunito Sans', sans-serif;
    transition: 0.5s;
`

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: 3rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    padding: 0 1rem;
    transition: 0.5s;
`

export const HeaderToggle = styled.div`
    font-size: 1.25rem;
    cursor: pointer;
    color: #0d0053;
`

export const SidebarContainer = styled.aside`
    position: fixed;
    top: 0;
    left: -30%;
    height: 100vh;
    width: 68px;
    background-color: #0d0053;
    padding-top: 1rem;
    transition: 0.5s;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    height: 100%;
`

export const NavLogo = styled(Link)`
    display: grid;
    grid-template-columns: max-content max-content;
    column-gap: 2rem;
    padding: 0.5rem 0 0.5rem 1.5rem;
`

export const NavLogoImg = styled.img`
    height: 50px;
`

export const LogoContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
`

export const NavLink = styled(Link)`
    position: relative;
    color: #82a3f5;
    transition: 0.5s;
    margin-bottom: 1.5rem;
`

export const NavLinkHover = styled(NavLink)`
    color: #eee;
    background-color: rgba(0, 0, 0, 0.1);
`

export const ActiveLink = styled(NavLinkHover)`
    color: #eee;
    background-color: rgba(0, 0, 0, 0.1);
`

export const ActiveLinkBefore = styled.div`
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 38px;
    width: 3px;
    background-color: #eee;
    transition: 0.5s;
`

export const SidebarShow = styled.div`
    left: 0;
`

export const SpaceToggle = styled.div`
    padding-left: calc(68px + 1rem);
`
