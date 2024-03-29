import React from 'react'
import { Link } from 'react-router-dom'

export default function TeacherSidebar() {
    return (
        <>
            <div className="card">
                <Link to='/teacherdashboard'><h5 className="card-header">Dashboard</h5></Link>
                <div className="list-group list-group-flush">
                    <Link to='/logout' className="list-group-item list-group-item-action text-danger">Logout</Link>

                </div>
            </div>
        </>
    )
}
