import React from 'react'
import styled from 'styled-components'

import { doAddRecruitment } from '~/action/recruitmentApi'
import { TitleForm } from '~/components/CustomChildComponent/Form'
import FormRecruitment from '~/components/FormRecruitment/FormRecruitment'

function PostRecruitmentPage() {
    const addRecruitment = async (
        newRecruitment,
        dispatch,
        navigate,
        axiosPrivate
    ) =>
        await doAddRecruitment(newRecruitment, dispatch, navigate, axiosPrivate)

    return (
        <StyledContainer>
            <div>
                <TitleForm style={{ textAlign: 'center' }}>
                    Đăng tin tuyển dụng mới
                </TitleForm>
                <FormRecruitment
                    handleAcction={addRecruitment}></FormRecruitment>
            </div>
        </StyledContainer>
    )
}

export default PostRecruitmentPage

const StyledContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: #ecf0ff;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 5rem;
`
