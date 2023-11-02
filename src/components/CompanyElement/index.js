import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Row, Col, Card } from 'react-bootstrap'
import { Companies } from '~/FakeData/FakeData'

function CompanyElements() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 1,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,

                settings: {
                    slidesToShow: 1,
                    rows: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    }

    const truncateDescription = (text) => {
        if (text.length > 50) {
            return text.substring(0, 50) + '...'
        } else {
            return text
        }
    }

    return (
        <div style={{ margin: '0 5rem' }}>
            <h3
                style={{
                    padding: '2rem 0 0 3rem',
                    color: '#0d0053',
                    fontWeight: 'revert',
                }}>
                Top công ty hàng đầu:
            </h3>
            <Slider
                {...settings}
                style={{
                    margin: '2rem 1rem',
                    padding: '0.5rem',
                    backgroundColor: '#eee',
                }}>
                {Companies.map((item) => (
                    <div key={item.id} style={{ margin: '0 2rem' }}>
                        <Card
                            className="shadow-sm"
                            style={{
                                minHeight: 225,
                                border: '1px solid #5A3FED',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    className="text-center"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <img
                                        src={item.banner}
                                        alt="company banner"
                                        style={{
                                            width: '200px',
                                            height: '100px',
                                            alignContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    />
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted text-center">
                                    <h3>{item.name}</h3>
                                </Card.Subtitle>
                                <Card.Text>
                                    {truncateDescription(item.description)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CompanyElements
