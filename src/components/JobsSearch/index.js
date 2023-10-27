import React from 'react'
import * as JobsSearchComponent from './JobsSearchComponent'
import './JobsSearch.css'
import { LisJob, Location, Categories } from '~/FakeData/FakeData'
import ReactPaginate from 'react-paginate'

function JobsSearch() {
    return (
        <JobsSearchComponent.Container>
            <JobsSearchComponent.JobSearchBanner>
                <JobsSearchComponent.InputField placeholder="Nhập tên công việc" />

                <JobsSearchComponent.Dropdown>
                    <JobsSearchComponent.Option value="0" id="locationDropdown">
                        Địa điểm
                    </JobsSearchComponent.Option>
                    {Location.map((loca, index) => (
                        <JobsSearchComponent.Option
                            key={index}
                            value={loca.id}
                            id={`locationDropdown${index}`}>
                            {loca.name}
                        </JobsSearchComponent.Option>
                    ))}
                </JobsSearchComponent.Dropdown>

                <JobsSearchComponent.Dropdown>
                    <JobsSearchComponent.Option value="0" id="locationDropdown">
                        Ngành nghề
                    </JobsSearchComponent.Option>
                    {Categories.map((cate, index) => (
                        <JobsSearchComponent.Option
                            key={index}
                            value={cate.id}
                            id={`locationDropdown${index}`}>
                            {cate.name}
                        </JobsSearchComponent.Option>
                    ))}
                </JobsSearchComponent.Dropdown>
                <JobsSearchComponent.Button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        style={{
                            marginLeft: '-25px',
                            paddingRight: '5px',
                            marginTop: '-2px',
                        }}
                        viewBox="0 0 25 25"
                        fill="none">
                        <path
                            d="M24.66 21.6141L19.7915 16.7464C19.5717 16.5267 19.2739 16.4046 18.9613 16.4046H18.1654C19.5131 14.6812 20.314 12.5134 20.314 10.1553C20.314 4.54545 15.7678 0 10.157 0C4.54623 0 0 4.54545 0 10.1553C0 15.7651 4.54623 20.3105 10.157 20.3105C12.5156 20.3105 14.6837 19.5098 16.4074 18.1623V18.9581C16.4074 19.2706 16.5295 19.5684 16.7493 19.7881L21.6178 24.6558C22.0768 25.1147 22.8191 25.1147 23.2732 24.6558L24.6551 23.2741C25.1141 22.8152 25.1141 22.073 24.66 21.6141ZM10.157 16.4046C6.70459 16.4046 3.90654 13.612 3.90654 10.1553C3.90654 6.70345 6.69971 3.90587 10.157 3.90587C13.6094 3.90587 16.4074 6.69856 16.4074 10.1553C16.4074 13.6071 13.6143 16.4046 10.157 16.4046Z"
                            fill="white"
                        />
                    </svg>
                    Tìm kiếm
                </JobsSearchComponent.Button>
            </JobsSearchComponent.JobSearchBanner>

            <JobsSearchComponent.RadioGroup>
                <JobsSearchComponent.RadioLabel>
                    Ưu tiên việc làm theo:
                </JobsSearchComponent.RadioLabel>
                <JobsSearchComponent.RadioLabel>
                    <JobsSearchComponent.RadioInput
                        type="radio"
                        name="priority"
                        value="related"
                    />
                    Liên quan
                </JobsSearchComponent.RadioLabel>
                <JobsSearchComponent.RadioLabel>
                    <JobsSearchComponent.RadioInput
                        type="radio"
                        name="priority"
                        value="newest"
                    />
                    Mới nhất
                </JobsSearchComponent.RadioLabel>
                <JobsSearchComponent.RadioLabel>
                    <JobsSearchComponent.RadioInput
                        type="radio"
                        name="priority"
                        value="salary"
                    />
                    Lương
                </JobsSearchComponent.RadioLabel>
            </JobsSearchComponent.RadioGroup>
            <hr />

            <JobsSearchComponent.WrapJobDetail>
                <JobsSearchComponent.WrapJobList>
                    {LisJob.map((item) => (
                        <JobsSearchComponent.WrapElement key={item.id}>
                            <JobsSearchComponent.Image>
                                <img
                                    style={{
                                        objectFit: 'contain',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                    src={item.image}
                                    alt=""
                                />
                            </JobsSearchComponent.Image>
                            <JobsSearchComponent.Content>
                                <JobsSearchComponent.Title>
                                    <h3 style={{ width: '50%' }}>
                                        {item.jobTitle}
                                    </h3>
                                    <span style={{ width: '20%' }}>
                                        {item.salary}
                                    </span>
                                    <span
                                        style={{
                                            width: '30%',
                                            textAlign: 'end',
                                        }}>
                                        {item.timestamp}
                                    </span>
                                </JobsSearchComponent.Title>
                                <JobsSearchComponent.Title>
                                    <span
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#5767aa',
                                            width: '50%',
                                        }}>
                                        {item.companyName}
                                    </span>
                                    <span
                                        style={{
                                            textAlign: 'end',
                                            padding: '0.2rem',
                                            backgroundColor: '#5767aa',
                                            color: 'white',
                                        }}>
                                        Ứng tuyển ngay
                                    </span>
                                </JobsSearchComponent.Title>
                            </JobsSearchComponent.Content>
                        </JobsSearchComponent.WrapElement>
                    ))}
                </JobsSearchComponent.WrapJobList>
            </JobsSearchComponent.WrapJobDetail>
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
        </JobsSearchComponent.Container>
    )
}

export default JobsSearch
