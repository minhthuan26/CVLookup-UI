import React from 'react'
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/thumbnail/lib/styles/index.css'
import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail'
function CVViewer(props) {
    const renderCurrentPageLabel = (props) => (
        <>{props.pageIndex === 0 ? 1 : props.pageIndex + 1}</>
    )

    const thumbnailPluginInstance = thumbnailPlugin({
        renderCurrentPageLabel,
    })
    const { Thumbnails } = thumbnailPluginInstance
    const newPlugin = defaultLayoutPlugin()
    return props.check ? (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            {props.base64StringFile ? (
                <Viewer
                    fileUrl={`data:application/pdf;base64,${props.base64StringFile}`}
                    plugins={[newPlugin]}
                    defaultScale={SpecialZoomLevel.PageFit}
                />
            ) : (
                <p>No PDF</p>
            )}
        </Worker>
    ) : (
        <div
            className="rpv-core__viewer"
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                overflow: 'hidden',
            }}>
            <div style={{ flex: 1, height: '25vw' }}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl={`data:application/pdf;base64,${props.base64StringFile}`}
                        plugins={[thumbnailPluginInstance]}
                    />
                </Worker>
            </div>
        </div>
    )
}

export default CVViewer
