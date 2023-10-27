import React from 'react'
import * as CompanyListComponent from './CompanyListComponent'
import { Companies } from '~/FakeData/FakeData'
import { Container } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import { Row, Col, Card } from 'react-bootstrap'

function CompanyListPage() {
    return (
        <Container>
            <CompanyListComponent.CompanySearchBanner>
                <CompanyListComponent.InputField placeholder="Nhập tên công ty" />
                <CompanyListComponent.Button>
                    Tìm kiếm
                </CompanyListComponent.Button>
            </CompanyListComponent.CompanySearchBanner>

            <Container>
                <Row className="m-2">
                    {Companies.map((item) => {
                        return (
                            <Col key={item.id} sm={6} md={4} className="my-2">
                                <Card
                                    className="shadow-sm w-100"
                                    style={{
                                        minHeight: 225,
                                        border: '1px solid #5A3FED',
                                    }}>
                                    <Card.Body>
                                        <Card.Title className="text-center h2">
                                            <Card.Img
                                                src={item.banner}
                                                alt="company banner"
                                                style={{
                                                    maxWidth: '100%',
                                                    maxHeight: '100%',
                                                }}
                                            />
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-center">
                                            {item.name}
                                        </Card.Subtitle>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    pageCount={3}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    // onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </Container>
        </Container>
    )
}

export default CompanyListPage
