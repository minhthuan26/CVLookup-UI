import React from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

function CVViewer(props) {
    const newPlugin = defaultLayoutPlugin()

    return (
        <div style={{ height: '100vh' }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                {props.base64StringFile ? (
                    <Viewer
                        fileUrl={`data:application/pdf;base64,${props.base64StringFile}`}
                        plugins={[newPlugin]}
                    />
                ) : (
                    <p>No PDF</p>
                )}
            </Worker>
        </div>
    )
}

export default CVViewer
