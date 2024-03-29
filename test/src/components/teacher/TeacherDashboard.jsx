import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar';
import Sidebar from '../user/Sidebar';
import axiosInstance from '../Axios';
// import { useAuth } from '../AuthContext';
import { useAuth  } from '../../AuthContext';
import { Container, Row, Col, Image, Card, Form, Button, Navbar, Nav, Modal } from 'react-bootstrap';

export default function TeacherDashboard() {

    const {loggedIn} = useAuth();

    const [profile, setProfile] = useState(null);
    // const [profile, setProfile] = useState(null);
    



    useEffect(() => {
        console.log('inside profile: ', loggedIn)
        const fetchUser = async () => {
            try {
                if (loggedIn) {
                    const profileResponse = await axiosInstance.get('profile/profile/');
                    const fetchedProfile = profileResponse.data;
                    console.log(fetchedProfile);
                    setProfile(fetchedProfile);
        
                   
                } else {
                    console.log('User is not logged in');
                }
            } catch (error) {
                console.error('Error fetching profile data:', error);
                // Handle the error here
            }
        }
        fetchUser();
    }, [])

    

    // // Add new post
   


    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {profile && profile.user_type === 'Instructor' ? (
                        <aside className="col-md-3">
                            <TeacherSidebar />
                        </aside>
                    ) : (
                        <aside className="col-md-3">
                            <Sidebar />
                        </aside>
                    )}
                    <section className="col-md-9">
                        <h4>Dashboard</h4>
                        <Container>
                            {/* User Info Section */}
                            <Row className="mt-4">
                                {profile && (
                                    <>
                                        <Col xs={12} md={6}>
                                            <Image src={profile.headerImage} fluid />
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <div className="d-flex flex-column align-items-center">

                                                

                                                <h3>{profile.username}</h3>

                                                
                                            </div>
                                        </Col>
                                    </>
                                )}
                            </Row>

                        </Container>
                    </section>
                </div>
            </div>
        </>
    )
}
