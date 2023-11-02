import React from 'react'
import { LisJob } from '~/FakeData/FakeData'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Col, Container, Row } from 'react-bootstrap'
function JobElement() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        rows: 2,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    rows: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
        ],
    }
    return (
        <div style={{ margin: ' 0 5rem' }}>
            <h3
                style={{
                    padding: '2rem 0 0 3rem',
                    color: '#0d0053',
                    fontWeight: 'revert',
                }}>
                Top công việc mới nhất:
            </h3>
            <Slider
                {...settings}
                style={{
                    margin: '2rem 1rem',
                    padding: '0.5rem',
                    backgroundColor: '#eee',
                }}>
                {LisJob.map((item) => (
                    <Container key={item.id}>
                        <div
                            style={{
                                backgroundColor: '#fff',
                                border: '1px solid #0d0053',
                                borderRadius: '15px',
                                margin: '1rem',
                                cursor: 'pointer',
                            }}>
                            <Row style={{ padding: '0.5rem' }}>
                                <Col md="4">
                                    <img
                                        style={{
                                            objectFit: 'contain',
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '10px',
                                            border: 'solid 1px #5767aa',
                                        }}
                                        src={item.image}
                                        alt=""
                                    />
                                </Col>
                                <Col
                                    md="8"
                                    lg={true}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <h5>{item.jobTitle}</h5>
                                </Col>
                            </Row>
                            <hr />
                            <Row style={{ padding: '0.5rem' }}>
                                <Col>
                                    <span
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#5767aa',
                                            paddingBottom: '0.2rem',
                                        }}>
                                        {item.companyName}
                                    </span>
                                </Col>
                                <Col>
                                    <span>{item.salary}</span>
                                </Col>
                                <Col>
                                    <span>{item.timestamp}</span>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                ))}
            </Slider>
        </div>
    )
}

export default JobElement
