import React, { useEffect, useState } from 'react'
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/thumbnail/lib/styles/index.css'
import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail'
import { getCVbyId } from '~/action/CvApi'
import usePrivateAxios from '~/action/AxiosCredentials'
import { useDispatch, useSelector } from 'react-redux'

function CVViewer(props) {
    const [CVDetail, setCVDetail] = useState([])

    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)
    const dispatch = useDispatch()
    const getDetail = async (axiosPrivate, id, dispatch) =>
        await getCVbyId(axiosPrivate, id, dispatch)
    useEffect(
        () => {
            getDetail(axiosPrivate, props.Cvid, dispatch).then((data) =>
                setCVDetail(data)
            )
        },
        // eslint-disable-next-line
        [props.Cvid]
    )

    const thumbnailPluginInstance = thumbnailPlugin()
    const newPlugin = defaultLayoutPlugin()
    return props.check ? (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            {CVDetail.cvPath ? (
                <Viewer
                    fileUrl={`data:application/pdf;base64,${CVDetail.cvPath}`}
                    plugins={[newPlugin]}
                    defaultScale={SpecialZoomLevel.ActualSize}
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
                        fileUrl={`data:application/pdf;base64,${CVDetail.cvPath}`}
                        plugins={[thumbnailPluginInstance]}
                    />
                </Worker>
            </div>
        </div>
    )
}

export default CVViewer
