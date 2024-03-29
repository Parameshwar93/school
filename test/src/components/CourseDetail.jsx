import React from 'react'
import { Link } from 'react-router-dom'


export default function CourseDetail() {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-4">
                        <img src="./logo512.png" className="card-img-top" alt="..." />
                    </div>
                    <div className="col-8">
                        <h3>Course Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quam quasi, explicabo quas assumenda ea distinctio repellat est aliquid labore ducimus dolorum sed debitis quod. Quos nesciunt atque vel? Vel, non eius. Repellat enim aperiam, sunt deserunt, similique consequatur est temporibus, optio aliquam eius neque laboriosam quo eum nostrum recusandae!</p>
                        <p className='fw-bold'>Course by: <Link to='/teacher-detail/1'>Teacher 1</Link></p>
                        <p className='fw-bold'>Duration: 3.5hrs</p>
                        <p className='fw-bold'>Total Enrolled: 347 students</p>
                        <p className='fw-bold'>Rating 4/5</p>
                    </div>



                    <div className="card mt-4">
                        <div className="card-header">
                            Chapters
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Introduction
                                <span className="float-end">
                                    <span className="me-3">20 mins</span>
                                    <button className="btn btn-sm btn-danger float-end" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-youtube"></i></button>
                                    <div className="modal" id='exampleModal' tabindex="-1">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Modal title</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="ratio ratio-16x9">
                                                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <p>Text description of the chapter</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </li>
                            <li className="list-group-item">chapter 2
                                <span className="float-end">
                                    <span className="me-3">20 mins</span>
                                    <button className="btn btn-sm btn-danger float-end"><i className="bi bi-youtube"></i></button>
                                </span>
                            </li>
                            <li className="list-group-item">chapter 3
                                <span className="float-end">
                                    <span className="me-3">20 mins</span>
                                    <button className="btn btn-sm btn-danger float-end"><i className="bi bi-youtube"></i></button>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <h3 className="pb-1 mb-4 mt-4"> Featured Courses</h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <Link to='/CourseDetail'><img src="logo512.png" className="card-img-top" alt="..." /></Link>
                            <div className="card-body">
                                <a href="#"><h5 className="card-title">Card title</h5></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <Link to='/CourseDetail'><img src="logo512.png" className="card-img-top" alt="..." /></Link>
                            <div className="card-body">
                                <a href="#"><h5 className="card-title">Card title</h5></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <Link to='/CourseDetail'><img src="logo512.png" className="card-img-top" alt="..." /></Link>
                            <div className="card-body">
                                <a href="#"><h5 className="card-title">Card title</h5></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <Link to='/CourseDetail'><img src="logo512.png" className="card-img-top" alt="..." /></Link>
                            <div className="card-body">
                                <a href="#"><h5 className="card-title">Card title</h5></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
