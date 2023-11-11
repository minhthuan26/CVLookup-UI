import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import LoginPage from '~/Pages/LoginPage'
import useLoginModal from '~/hooks/useLoginModal'

const LoginModal = ({ show }) => {
  const { setLoginModal } = useLoginModal()
  const handleClose = () => {
    setLoginModal(false)
  }
  return (
    <Modal size="lg" centered backdrop="static" show={show} onHide={handleClose} fullscreen={'fullscreen'}>
      <Modal.Header closeButton>
        <Modal.Title className='fs-6' style={{ color: 'red' }}>* Vui lòng đăng nhập để thực hiện chức năng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginPage />
      </Modal.Body>
    </Modal>
  )
}

export default LoginModal