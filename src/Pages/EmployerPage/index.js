import React from 'react'
import bannerWelcome from '~/assets/BannerWelcomeEmployer.svg'
import bannerBook from '~/assets/BannerBook.svg'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import imgWorking from '~/assets/imgWorking.svg'
import imgWorking2 from '~/assets/imgWorking2.svg'
import check from '~/assets/check.svg'

const StyledBanner = styled.div`
    background-image: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: ${(props) => props.gridTemplateColumns};
`

const StyledHeading = styled.h1`
    color: ${(props) => props.color};
    padding: 1rem 0 0.5rem 3rem;
    font-weight: bold;
    font-size: 5rem;
`

const StyledButton = styled.button`
    margin: 0 3rem;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 15px;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    border: none;
`

const StyledBenefitDiv = styled.div`
    background-color: white;
    border-radius: 1rem;
    padding: 2rem;
`

const StyledBenefitImage = styled.img`
    width: 100%;
    height: auto;
    padding: 1rem;
    box-shadow: 1px 1px 1px 1px #d9d9d9;
`

const StyledBenefitHeading = styled.h2`
    color: #383838;
    border-left: 0.5rem solid #166795;
    margin: 1rem 0;
`

const StyledBenefitList = styled.ul`
    list-style-image: url(${check});
    font-size: 1.4rem;
    font-weight: 400;
    color: #0d0053;
`

function EmployerPage() {
    return (
        <Container>
            <StyledBanner
                background={bannerWelcome}
                gridTemplateColumns="30% 65%">
                <div>
                    <StyledHeading color="#fff">
                        Đăng tin tuyển dụng tìm kiếm ứng viên hiệu quả
                    </StyledHeading>
                    <StyledButton color="#0D0053" backgroundColor="#eee">
                        Đăng tin miễn phí -&gt;
                    </StyledButton>
                </div>
                <div></div>
            </StyledBanner>

            <StyledBanner background={bannerBook} gridTemplateColumns="60% 40%">
                <div></div>
                <div>
                    <StyledHeading color="#0d0053">
                        Các bài blog tuyển dụng
                    </StyledHeading>
                    <br />
                    <StyledButton color="#eee" backgroundColor="#6877B2">
                        Blog tuyển dụng -&gt;
                    </StyledButton>
                </div>
            </StyledBanner>
            <hr />
            <div
                style={{
                    display: 'grid',
                    gridTemplateRows: 'auto',
                    backgroundColor: '#eee',
                    padding: '5rem',
                    gap: '2rem',
                }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <StyledHeading>
                        Các lợi ích của CVLookup mang lại
                    </StyledHeading>
                </div>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto auto',
                        columnGap: '2rem',
                    }}>
                    <StyledBenefitDiv>
                        <StyledBenefitImage src={imgWorking} alt="imgWorking" />
                        <StyledBenefitHeading>
                            &ensp; Đối với doanh nghiệp
                        </StyledBenefitHeading>
                        <StyledBenefitList>
                            <li>
                                Đưa tuyển dụng trở thành lợi thế cạnh tranh của
                                doanh nghiệp: gia tăng cơ hội tuyển đúng người,
                                giúp thúc đẩy hoạt động kinh doanh hiệu quả,
                                hướng đến chuyển đổi số thành công.
                            </li>
                            <li>
                                Chuẩn hóa toàn bộ quy trình tuyển dụng thống
                                nhất.
                            </li>
                            <li>
                                Xây dựng thương hiệu tuyển dụng uy tín, chuyên
                                nghiệp.
                            </li>
                            <li>
                                Tiết kiệm thời gian, chi phí cho hoạt động tuyển
                                dụng.
                            </li>
                        </StyledBenefitList>
                    </StyledBenefitDiv>
                    <StyledBenefitDiv>
                        <StyledBenefitImage
                            src={imgWorking2}
                            alt="imgWorking2"
                        />
                        <StyledBenefitHeading>
                            &ensp;Đối với Nhà tuyển dụng
                        </StyledBenefitHeading>
                        <StyledBenefitList>
                            <li>
                                Quản lý tập trung tất cả các hoạt động tạo ra
                                hiệu quả cho mỗi vị trí tuyển dụng theo chiến
                                dịch tuyển dụng.
                            </li>
                            <li>
                                Đăng tin tuyển dụng, tạo & quản lý nguồn ứng
                                viên hiệu quả.
                            </li>
                            <li>
                                Đánh giá ứng viên toàn diện dựa trên dữ liệu cụ
                                thể, giúp định tuyển đưa ra quyết dụng chính
                                xác, giảm tỷ lệ tuyển sai người.
                            </li>
                            <li>
                                Chủ động lên kế hoạch & tối ưu chi phí tuyển
                                dụng theo các số liệu đo lường.
                            </li>
                        </StyledBenefitList>
                    </StyledBenefitDiv>
                </div>
            </div>
        </Container>
    )
}

export default EmployerPage
