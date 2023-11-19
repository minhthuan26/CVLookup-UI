import React from 'react'
import backgroundRecruit from '~/assets/background-recruit.png'
import lookingResumeimg from '~/assets/Recruiting manager looking at resume.png'
import magnifying from '~/assets/folder, magnifying glass and check mark.png'
import styled from 'styled-components'
import HrLooking from "~/assets/HR looking through candidates' CVs.png"
import imgWorking from '~/assets/imgWorking.svg'
import imgWorking2 from '~/assets/imgWorking2.svg'
import { useNavigate } from 'react-router-dom'

function EmployerPage() {
    const navigate = useNavigate()
    return (
        <>
            <div
                className="bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url(${backgroundRecruit})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}>
                <div className="w-container flex flex-col justify-center text-center pt-2 md:pt-8 px-4 md:px-0 leading-tight">
                    <StyledHeading>
                        Đăng tin tuyển dụng <br /> Tìm kiếm ứng viên hiệu quả
                    </StyledHeading>
                    <StyledButton onClick={() => navigate('/post-recruitment')}>
                        Đăng tin tuyển dụng -&gt;
                    </StyledButton>
                    <div class="d-flex justify-content-center">
                        <img
                            style={{ maxWidth: '100%', height: 'auto' }}
                            src={lookingResumeimg}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <hr />
            <div class="row pt-3 pl-3 " style={{ marginLeft: '4rem' }}>
                <div class="col-md-5">
                    <img
                        class=" w-50 "
                        style={{ margin: '4rem' }}
                        src={magnifying}
                        title="Đăng tin tuyển dụng miễn phí"
                        alt="Dang tin tuyen dung mien phi"
                    />
                </div>
                <div class="col-md-7 pl-md-6">
                    <div class="d-table h-100">
                        <div class="d-table-cell align-middle">
                            <div class="w-100">
                                <h3 class="text-sm md:text-2xl mb-5 font-weight-bold">
                                    Đăng tin tuyển dụng miễn phí
                                </h3>
                                <ul class="text-sm font-light text-muted">
                                    <li class="mb-4 d-flex align-items-baseline">
                                        <span>
                                            Đăng tin tuyển dụng miễn phí và
                                            không giới hạn số lượng.
                                        </span>
                                    </li>
                                    <li class="mb-4 d-flex align-items-baseline">
                                        <span>
                                            Đăng tin tuyển dụng dễ dàng, không
                                            quá 1 phút.
                                        </span>
                                    </li>
                                    <li class="mb-4 d-flex align-items-baseline">
                                        <span>
                                            Tiếp cận nguồn CV ứng viên khổng lồ
                                        </span>
                                    </li>
                                    <li class="mb-4 d-flex align-items-baseline">
                                        <span>
                                            Dễ dàng kiểm duyệt và đăng tin trong
                                            24h.
                                        </span>
                                    </li>
                                </ul>
                                <div class="text-center text-md-left">
                                    <StyledButton
                                        onClick={() =>
                                            navigate('/recruitment-dashboard')
                                        }>
                                        Quản lý tin tuyển dụng
                                    </StyledButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div
                class="row flex-md-row flex-column-reverse pt-3 pl-3 ml-md-3 mt-md-6"
                style={{ marginLeft: '4rem' }}>
                <div class="col-md-7">
                    <div class="d-table h-100">
                        <div class="d-table-cell align-middle ml-md-10">
                            <h3 class="text-sm md-text-2xl mb-5 font-weight-bold">
                                Quảng cáo tuyển dụng
                            </h3>
                            <ul class="text-sm font-light text-muted">
                                <li class="mb-4 d-flex align-items-baseline">
                                    <span>
                                        Tăng lượt tiếp cận người tìm việc
                                    </span>
                                </li>
                                <li class="mb-4 d-flex align-items-baseline">
                                    <span>
                                        Tin tuyển dụng hiển thị ở những vị trí
                                        nổi bật.
                                    </span>
                                </li>
                                <li class="mb-4 d-flex align-items-baseline">
                                    <span>
                                        Đẩy tin tuyển dụng lên vị trí đầu trong
                                        kết quả tìm kiếm việc làm trên trang web
                                        đăng tin tuyển dụng.
                                    </span>
                                </li>
                                <li class="mb-4 d-flex align-items-baseline">
                                    <span>
                                        Tự động gợi ý tin tuyển dụng với ứng
                                        viên phù hợp, giúp tuyển dụng hiệu quả
                                        hơn.
                                    </span>
                                </li>
                            </ul>
                            <div class="text-center text-md-left">
                                <StyledButton>
                                    Các bài blog tuyển dụng
                                </StyledButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <img
                        class="w-50"
                        style={{ margin: '4rem' }}
                        src={HrLooking}
                        title="Quảng cáo tin tuyển dụng hiệu quả"
                        alt="Quang cao tin tuyen dung hieu qua"
                    />
                </div>
            </div>

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
        </>
    )
}

export default EmployerPage

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
    color: #0d0053;
    padding: 1rem 0 0.5rem 3rem;
    font-weight: bold;
    font-size: 3rem;
`

const StyledButton = styled.button`
    margin: 3rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 15px;
    color: #eee;
    background-color: #6877b2;
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
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 400;
    color: #0d0053;
`
