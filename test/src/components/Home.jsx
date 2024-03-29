import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className="container mt-4 ">
                {/* Latest courses */}
                <h3 className="pb-1 mb-4">Latest Courses</h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <Link to='/CourseDetail/1'><img src="logo512.png" className="card-img-top" alt="..." /></Link>
                            <div className="card-body">
                                <a href="#"><h5 className="card-title">Card title</h5></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <Link to='/CourseDetail/1'><img src="logo512.png" className="card-img-top" alt="..." /></Link>
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

                {/* Featured courses */}
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


                {/* Teachers  */}
                <h3 className="pb-1 mb-4 mt-4"> Teachers</h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <Link to='/teacher-detail/1'><img src="logo512.png" className="card-img-top" alt="..." /></Link>
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


