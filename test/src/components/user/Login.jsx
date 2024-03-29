import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axiosInstance from '../Axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';


export default function Login() {
    const { login } = useAuth();
    const history = useNavigate();
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            await login(formData.username, formData.password)
            history('/teacherdashboard');

        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <>
            <Container style={{ marginTop: '30px' }}>
                <Row className="justify-content-center">
                    <Col md={6} >
                        <Card>
                            {/* <Card.Header>User Register</Card.Header> */}
                            <Card.Body>
                                <h2>Login</h2>
                                <Form onSubmit={handleSubmit}>

                                    {/* Username Field */}
                                    <Form.Group controlId="username" style={{ marginTop: '20px' }}>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter username" required />
                                    </Form.Group>

                                    {/* Password Field */}
                                    <Form.Group controlId="password" style={{ marginTop: '20px' }}>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
                                    </Form.Group>

                                    {/* Submit Button */}
                                    <Button variant="primary" type="submit" style={{ marginTop: '20px' }}>
                                        Login
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
