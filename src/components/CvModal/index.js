import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import CVViewer from '../CVViewer/CVViewer'

const CvModal = ({ cv, check, height, width, showCv, setShowCv }) => {
    return (
        <Modal
            animation={true}
            centered
            size="xl"
            backdrop="static"
            show={showCv}
            onHide={() => setShowCv(false)}
            fullscreen={false}>
            <Modal.Header className='d-flex justify-content-center w-100' closeButton>
                <Modal.Title>ĐƠN XIN TUYỂN DỤNG</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CVViewer cvId={cv?.id} check={check} height={height} width={width} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant='danger' onClick={() => setShowCv(false)}>
                    Đóng
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CvModal