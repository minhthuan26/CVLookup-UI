import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCV, deleteCV, downloadCV, getCVbyId } from '~/action/CVApi'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEye, faDownload } from '@fortawesome/free-solid-svg-icons'
import usePrivateAxios from '~/action/AxiosCredentials'
import { Confirm } from '~/components/Popup/Confirm'
import PopupBase from '~/components/Popup/PopupBase'
import CVViewer from '~/components/CVViewer/CVViewer'
import FormAddCV from '~/components/FormAddCV/FormAddCV'
import { toast } from 'react-toastify'

function CVPage() {
    const [CVlist, setCVlist] = useState([])
    const [showCV, setShowCV] = useState(false)
    const [showAddCV, setShowAddCV] = useState(false)

    const [CVDetail, setCVDetail] = useState([])
    const dispatch = useDispatch()
    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)

    const handleGetAllCV = async (dispatch, axiosPrivate) =>
        await getAllCV(dispatch, axiosPrivate)

    const handleDelete = (id) => {
        Confirm.open({
            title: 'Xoá CV',
            message: 'Bạn có muốn xoá CV?',
            onok: () => {
                try {
                    const deleteCurriculumViate = async (
                        axiosPrivate,
                        id,
                        dispatch
                    ) => await deleteCV(axiosPrivate, id, dispatch)
                    deleteCurriculumViate(axiosPrivate, id, dispatch)
                    setCVlist(CVlist.filter((cv) => cv.id !== id))
                } catch (error) {
                    console.log(error)
                }
            },
        })
    }
    useEffect(
        () => {
            handleGetAllCV(dispatch, axiosPrivate).then((data) =>
                setCVlist(data)
            )
        },
        // eslint-disable-next-line
        []
    )

    const handleDownload = (id) => {
        try {
            const downloadCurriculumViate = async (
                axiosPrivate,
                id,
                dispatch
            ) => await downloadCV(axiosPrivate, id, dispatch)
            downloadCurriculumViate(axiosPrivate, id, dispatch)
        } catch (error) {
            console.log(error)
        }
    }

    const handleViewDetail = (id) => {
        setShowCV(true)
        const getDetail = async (axiosPrivate, id, dispatch) =>
            await getCVbyId(axiosPrivate, id, dispatch)

        getDetail(axiosPrivate, id, dispatch).then((data) => setCVDetail(data))
    }
    return (
        <PageWrapper>
            <HeaderWrapper>
                <HeaderContent>
                    <Title>Danh sách CV:</Title>
                    <UploadLink
                        onClick={(e) => {
                            if (CVlist.length >= 6) {
                                toast.error('Chỉ tạo tối đa 6 hồ sơ.')
                            } else {
                                setShowAddCV(true)
                            }
                        }}>
                        Thêm mới CV
                    </UploadLink>
                </HeaderContent>
                <hr />
                <div>
                    <Row className="m-2">
                        {CVlist.map((cv) => (
                            <CVCard key={cv.id} sm={6} md={4}>
                                <ContentRow>
                                    <CVViewer
                                        base64StringFile={cv.base64StringFile}
                                        check={false}
                                    />
                                </ContentRow>
                                <ContentRow>
                                    <InfoRow>
                                        <h4>{cv.introdution}</h4>
                                    </InfoRow>
                                    <hr />
                                    <ActionContainer>
                                        <ActionLink
                                            onClick={() =>
                                                handleViewDetail(cv.id)
                                            }>
                                            <FontAwesomeIcon icon={faEye} />
                                            &nbsp;&nbsp;Xem chi tiết
                                        </ActionLink>
                                        <div>
                                            <ActionLink
                                                onClick={() =>
                                                    handleDownload(cv.id)
                                                }>
                                                <FontAwesomeIcon
                                                    icon={faDownload}
                                                />
                                            </ActionLink>
                                            &nbsp;&nbsp;&nbsp;
                                            <ActionLink
                                                onClick={() =>
                                                    handleDelete(cv.id)
                                                }>
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                />
                                            </ActionLink>
                                        </div>
                                    </ActionContainer>
                                </ContentRow>
                            </CVCard>
                        ))}
                    </Row>
                    {/* Popup */}
                    <PopupBase
                        trigger={showCV}
                        setTriger={setShowCV}
                        title={`${CVDetail.introdution} - ${CVDetail.fullName}`}>
                        <div style={{ height: '100vh' }}>
                            <CVViewer
                                base64StringFile={CVDetail.base64StringFile}
                                check={true}
                            />{' '}
                        </div>
                    </PopupBase>
                    <PopupBase
                        trigger={showAddCV}
                        setTriger={setShowAddCV}
                        title={'Thêm mới CV'}>
                        <FormAddCV
                            setShowAddCV={setShowAddCV}
                            handleGetAllCV={handleGetAllCV}
                            setCVlist={setCVlist}
                            CVlist={CVlist}
                        />
                    </PopupBase>
                </div>
            </HeaderWrapper>
        </PageWrapper>
    )
}

export default CVPage

const PageWrapper = styled.div`
    margin: 0 5rem;
`

const HeaderWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    background-color: #eee;
`

const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h3`
    padding: 2rem 0 0 3rem;
    color: #0d0053;
    font-weight: revert;
`

const UploadLink = styled.a`
    padding: 0.5rem 1rem;
    margin: 0 2rem;
    background-color: #5767aa;
    color: white;
    font-weight: bolder;
    border-radius: 10px;
    cursor: pointer;
`

const CVCard = styled(Col)`
    padding: 2rem;
    box-sizing: border-box;
`

const ContentRow = styled(Row)`
    background-color: #166795;
`

const InfoRow = styled(Row)`
    text-align: center;
    color: white;
`

const ActionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 1rem 0.5rem;
`

const ActionLink = styled.a`
    color: white;
    cursor: pointer;
    &:hover {
        color: #73d6da;
        transform: scale(1.05);
    }
`
