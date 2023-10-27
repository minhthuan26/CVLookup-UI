import React, { useState, useRef } from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { Container } from 'react-bootstrap'
import { Companies } from '~/FakeData/FakeData'
import styled from 'styled-components'
import test from '~/assets/logo.png'
function CVPage() {
    const Slider = styled.div`
        gap: 1rem;
        transform: translateX(0px);
        transition: 0.3s ease-in-out;
    `
    const [pdfFile, setPDFFile] = useState(null)
    const [viewPdf, setViewPdf] = useState(null)
    const fileType = ['application/pdf']

    const handleChange = (e) => {
        let selectedFile = e.target.files[0]
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader()
                reader.readAsDataURL(selectedFile)
                reader.onload = (e) => {
                    setPDFFile(e.target.result)
                }
            } else {
                setPDFFile(null)
            }
        } else {
            console.log('Please select a file.')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (pdfFile !== null) {
            setViewPdf(pdfFile)
        } else {
            setViewPdf(null)
        }
    }

    const newPlugin = defaultLayoutPlugin()

    const listRef = useRef()
    const [sliderPosition, setSliderPosition] = useState(0)
    const [showControls, setShowControls] = useState(false)
    const handleDirection = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 70
        if (direction === 'left' && sliderPosition > 0) {
            listRef.current.style.transform = `translateX(${230 + distance}px)`
            setSliderPosition(sliderPosition - 1)
        }
        if (direction === 'right' && sliderPosition < 4) {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
            setSliderPosition(sliderPosition + 1)
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    className="form-control"
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-success">
                    View PDF
                </button>
            </form>

            <div style={{ marginTop: '20px' }}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    {viewPdf ? (
                        <Viewer fileUrl={viewPdf} plugins={[newPlugin]} />
                    ) : (
                        <p>No PDF</p>
                    )}
                </Worker>
            </div>
            <div>
                <div
                    style={{
                        backgroundImage: `url(${test})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        width: '200px',
                        height: '500px',
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                    }}>
                    test
                </div>
                <div></div>
            </div>
        </Container>
    )
}

export default CVPage
