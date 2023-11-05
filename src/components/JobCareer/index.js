import React from 'react'
import { Categories } from '~/FakeData/FakeData'
import { Row, Col, Card, Container } from 'react-bootstrap'

function JobCareer() {
    return (
        <div style={{ margin: '0 5rem' }}>
            <Row>
                <Col>
                    <Card.Title>
                        <h3
                            style={{
                                padding: '2rem 0 0 3rem',
                                color: '#0d0053',
                                fontWeight: 'revert',
                            }}>
                            Top các ngành nghề nổi bật
                        </h3>
                    </Card.Title>
                </Col>
            </Row>
            <Row className="m-2">
                {Categories.slice(0, 12).map((item) => {
                    return (
                        <Col key={item.id} sm={6} md={4} className="my-2">
                            <Card className="shadow-sm w-100">
                                <Card.Body
                                    className="text-center h5"
                                    style={{
                                        backgroundColor: '#5767aa',
                                        borderRadius: '10px',
                                        border: '1px solid #fff',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        color: '#eee',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#eee'
                                        e.target.style.border =
                                            '1px solid #5767aa'
                                        e.target.style.color = '#5767aa'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor =
                                            '#5767aa'
                                        e.target.style.border = '1px solid #fff'
                                        e.target.style.color = '#eee'
                                    }}>
                                    {item.name}
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default JobCareer
