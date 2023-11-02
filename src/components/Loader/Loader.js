import React from 'react'
import { RingLoader } from 'react-spinners'
import styled from 'styled-components'

const override = {
    // position: 'fixed'
}

const LoaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 99999;
    justify-content: center;
    align-items: center;
`

const Loader = () => {
    return (
        <>
            <LoaderContainer>
                <RingLoader
                    color='#0D0053'
                    loading={true}
                    cssOverride={override}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </LoaderContainer >
        </>
    )
}

export default Loader