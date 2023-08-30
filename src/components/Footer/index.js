import React from 'react'
import { styled } from 'styled-components'
import logo from '~/assets/logo-transparent.png'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <Container>
            <footer class="padding_4x">
                <div class="flex">
                    <section class="flex-content padding_1x">
                        <img src={logo} alt="" />
                    </section>
                    <section class="flex-content padding_1x">
                        <h4>Về CVLookup</h4>
                        <Link to="/">Giới thiệu</Link>
                        <Link to="/">Liên hệ</Link>
                        <Link to="/">Điều khoản & dịch vụ</Link>
                        <Link to="/">Chính sách bảo mật</Link>
                    </section>
                    <section class="flex-content padding_1x">
                        <h4>Hồ sơ của bạn</h4>
                        <Link to="/">Tạo CV</Link>
                        <Link to="/">Quản lý CV</Link>
                        <Link to="/">Mẹo CV</Link>
                    </section>
                    <section class="flex-content padding_1x">
                        <h4>Khám phá</h4>
                        <Link to="/">Tính lương</Link>
                        <Link to="/">Tính lãi suất kép</Link>
                        <Link to="/">Kết hoạch tiết kiệm</Link>
                        <Link to="/">Thu nhập cá nhân</Link>
                    </section>
                    <section class="flex-content padding_1x">
                        <h4>Liên hệ</h4>
                        <p>Điện thoại: 0123456789</p>
                        <p>Địa chỉ: Vương quốc Vĩnh Hưng</p>
                        <p>Email: contact@cvlookup.com</p>
                    </section>
                </div>
                <div class="flex">
                    <section class="flex-content padding_1x">
                        <Link to="/">
                            <i class="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="/">
                            <i class="fab fa-twitter"></i>
                        </Link>
                        <Link to="/">
                            <i class="fab fa-linkedin-in"></i>
                        </Link>
                    </section>
                    <section class="flex-content padding_1x">
                        <p>
                            Copyright ©2023 All rights CVLookup || Angela Trịnh
                            & Lily Lê
                        </p>
                    </section>
                </div>
            </footer>
        </Container>
    )
}
const Container = styled.div`
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
        margin-bottom:30px;
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

    .flex-content {
        width: 100%;
        position: relative;
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

    /***************************
               FOOTER
****************************/
    footer {
        background-color: #000;
        color: #eee;
    }

    footer h3 {
        color: #fff;
        margin-bottom: 1.5rem;
    }

    footer a {
        color: #eee;
        display: block;
        margin: 15px 0;
    }

    footer a:hover {
        color: #5767aa;
    }

    footer .flex:last-child {
        align-items: center;
    }

    footer .flex:last-child .flex-content:last-child {
        text-align: right;
    }

    footer .flex:last-child p {
        color: #fff;
    }

    footer .flex:last-child a {
        display: inline-block;
        background-color: #eee;
        border-radius:100%;
        width:45px;
        height:45px;
        color: #0d0053;
        font-size:25px;
        padding: 0.5rem;
        margin-left:30px;
        margin-top:-30px;
        text-align: center;
    }

    footer .flex:last-child a:hover {
        background-color: #2193d1;
        border-radius
    }

    @media (max-width: 1100px) {
        footer .flex:first-child {
            flex-wrap: wrap;
        }

        footer .flex:first-child .flex-content {
            flex: 1 1 40%;
        }
    }

    @media (max-width: 920px) {
        footer .flex:last-child .flex-content:last-child {
            text-align: left;
        }
    }

    @media (max-width: 320px) {
        footer .flex:first-child .flex-content {
            flex: 1 1 100%;
        }
    }
`
export default Footer
