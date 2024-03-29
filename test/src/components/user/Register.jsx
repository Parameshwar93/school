import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useNavigate  } from 'react-router-dom';
import axiosInstance from '../Axios';

export default function Register() {
    const history = useNavigate();

    // const [data, setData] = useState([])

    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
        user_type: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
        console.log(formData)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
        // You can add your registration logic here
        axiosInstance
			.post(`users/`, {
                fullname: formData.fullname,
				email: formData.email,
				username: formData.username,
				password: formData.password,
                user_type: formData.user_type
			})
			.then((res) => {
				history('/login');;
			});
    };
    return (
        <>
            <Container style={{marginTop: '20px'}}>
                <Row className="justify-content-center">
                    <Col md={6} >
                        <Card>
                            {/* <Card.Header>User Register</Card.Header> */}
                            <Card.Body>
                                <h2>Registration</h2>
                                <Form onSubmit={handleSubmit}>
                                    {/* Full Name Field */}
                                    <Form.Group controlId="fullName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Enter your full name" required />
                                    </Form.Group>

                                    {/* Email Field */}
                                    <Form.Group controlId="email" style={{marginTop: '20px'}}>
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange}  placeholder="Enter email" required />
                                    </Form.Group>

                                    {/* Username Field */}
                                    <Form.Group controlId="username" style={{marginTop: '20px'}}>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter username" required />
                                    </Form.Group>

                                    {/* Password Field */}
                                    <Form.Group controlId="password" style={{marginTop: '20px'}}>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
                                    </Form.Group>

                                    {/* Role Dropdown */}
                                    {/* if other than the below two choices display 404 page with error message wrong role */}
                                    <Form.Group controlId="role" style={{marginTop: '20px'}}>
                                        <Form.Label>Role</Form.Label>
                                        <Form.Control as="select" name="user_type" value={formData.user_type} onChange={handleChange} required>
                                            <option value="">Select Role</option>
                                            <option value="Student">Student</option>
                                            <option value="Instructor">Instructor</option>
                                        </Form.Control>
                                    </Form.Group>

                                    {/* Submit Button */}
                                    <Button variant="primary" type="submit" style={{marginTop: '20px'}}>
                                        Register
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
