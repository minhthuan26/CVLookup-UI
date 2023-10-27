import React from 'react'
import { styled } from 'styled-components'
import logo from '~/assets/logo-transparent.png'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    a {
        text-decoration: none !important;
        min-width: fit-content;
        width: fit-content;
        width: -webkit-fit-content;
        width: -moz-fit-content;
    }

    a,
    button {
        transition: 0.5s;
    }

    a,
    p {
        font-size: 14px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #fff;
        font-weight: 600;
        margin-bottom: 30px;
    }

    a,
    button,
    input,
    textarea,
    select {
        outline: none !important;
    }

    fieldset {
        border: 0;
    }

    .title {
        color: #fff;
    }

    .flex,
    .fixed_flex {
        display: flex;
    }

    .padding_1x {
        padding: 1rem;
    }

    .padding_2x {
        padding: 2rem;
    }

    .padding_3x {
        padding: 3rem;
    }

    .padding_4x {
        background-image: linear-gradient(120deg, #0b0044 40%, #6876b2 100%);
        position: relative;
        width: 100%;
        height: 100%;
        top: 402px;
    }

    @media (max-width: 920px) {
        .flex {
            flex-wrap: wrap;
        }

        .padding_1x,
        .padding_2x,
        .padding_3x,
        .padding_4x {
            padding: 1rem;
        }

        .btn {
            padding: 0.5rem 1rem;
        }

        a,
        p {
            font-size: 12px;
        }
    }
`
export const FooterContainer = styled.footer`
    background-color: #000;
    color: #eee;
`
export const FlexContainer = styled.div`
    display: flex;
`
export const FlexContent = styled.section`
    width: 100%;
    position: relative;
`

export const Padding1x = styled.div`
    padding: 1rem;
`

export const SocialLink = styled(Link)`
    color: #eee;
    display: block;
    margin: 15px 0;
    text-decoration: none;
`

export const SocialIcon = styled.i`
    display: inline-block;
    background-color: #eee;
    border-radius: 100%;
    width: 45px;
    height: 45px;
    color: #0d0053;
    font-size: 25px;
    padding: 0.5rem;
    margin-left: 30px;
    margin-top: -30px;
    text-align: center;
    &:hover {
        background-color: #2193d1;
    }
`

export function Logo() {
    return (
        <FlexContent>
            <Padding1x>
                <img src={logo} alt="" />
            </Padding1x>
        </FlexContent>
    )
}

export function AboutSection() {
    return (
        <FlexContent>
            <Padding1x>
                <h4>Về CVLookup</h4>
                <SocialLink to="/">Giới thiệu</SocialLink>
                <SocialLink to="/">Liên hệ</SocialLink>
                <SocialLink to="/">Điều khoản & dịch vụ</SocialLink>
                <SocialLink to="/">Chính sách bảo mật</SocialLink>
            </Padding1x>
        </FlexContent>
    )
}

export function ProfileSection() {
    return (
        <FlexContent>
            <Padding1x>
                <h4>Hồ sơ của bạn</h4>
                <SocialLink to="/">Tạo CV</SocialLink>
                <SocialLink to="/">Quản lý CV</SocialLink>
                <SocialLink to="/">Mẹo CV</SocialLink>
            </Padding1x>
        </FlexContent>
    )
}

export function DiscoverSection() {
    return (
        <FlexContent>
            <Padding1x>
                <h4>Khám phá</h4>
                <SocialLink to="/">Tính lương</SocialLink>
                <SocialLink to="/">Tính lãi suất kép</SocialLink>
                <SocialLink to="/">Kế hoạch tiết kiệm</SocialLink>
                <SocialLink to="/">Thu nhập cá nhân</SocialLink>
            </Padding1x>
        </FlexContent>
    )
}

export function ContactSection() {
    return (
        <FlexContent>
            <Padding1x>
                <h4>Liên hệ</h4>
                <p>Điện thoại: 0123456789</p>
                <p>Địa chỉ: Vương quốc Vĩnh Hưng</p>
                <p>Email: contact@cvlookup.com</p>
            </Padding1x>
        </FlexContent>
    )
}

export function SocialMediaSection() {
    return (
        <FlexContent>
            <Padding1x>
                <SocialIcon>
                    <i className="fab fa-facebook-f"></i>
                </SocialIcon>
                <SocialIcon>
                    <i className="fab fa-twitter"></i>
                </SocialIcon>
                <SocialIcon>
                    <i className="fab fa-linkedin-in"></i>
                </SocialIcon>
            </Padding1x>
        </FlexContent>
    )
}

export function CopyrightSection() {
    return (
        <FlexContent>
            <Padding1x>
                <p>
                    Copyright ©2023 All rights CVLookup || Angela Trịnh & Lily
                    Lê
                </p>
            </Padding1x>
        </FlexContent>
    )
}
