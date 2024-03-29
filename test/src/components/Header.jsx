import React, { useState, useEffect } from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axiosInstance from './Axios';
import { useAuth } from '../AuthContext';

export default function Header() {
    const {loggedIn} = useAuth();
    const [profile, setProfile] = useState(null);
    console.log(loggedIn)

    useEffect(() => {
        if (loggedIn) {
            const fetchProfile = async () => {
                try {
                    const response = await axiosInstance.get('profile/profile/');
                    setProfile(response.data);
                } catch (error) {
                    console.log('Error fetching profile:', error);
                }
            };
            fetchProfile();
        }
    }, [loggedIn])
    return (
        <>
            <Navbar expand="lg" bg="body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">CyberNest</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="mb-2 mb-lg-0">
                            <Nav.Item>
                                <Nav.Link as={Link} to='/' className="nav-link active">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to='/' className="nav-link">Courses</Nav.Link>
                            </Nav.Item>
                            {loggedIn ? (
                                <>
                                    {/* {profile && console.log(profile, profile.user_type)} */}
                                    {profile && profile.user_type === 'Student' && (
                                        <Nav.Item>
                                            <Nav.Link as={Link} to='/dashboard' className="nav-link">Dashboard</Nav.Link>
                                        </Nav.Item>
                                    )}
                                    {profile && profile.user_type === 'Instructor' && (
                                        <Nav.Item>
                                            <Nav.Link as={Link} to='/teacherdashboard' className="nav-link">Dashboard</Nav.Link>
                                        </Nav.Item>
                                    )}
                                </>
                            ) : (
                                <>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to='/login' className="nav-link">login</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to='/register' className="nav-link">register</Nav.Link>
                                    </Nav.Item>
                                </>
                            )}
                            <Nav.Item>
                                <Nav.Link className="nav-link disabled" disabled>Disabled</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
