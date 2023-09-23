import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authLogin } from '../redux/store/authSlice';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

const Loginpage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, isSuccess, isError, message, user } = useSelector(state => state.auth);

    useEffect(() => {
        if (message) alert(message);

        if (user && user.token) {
            navigate('/upload');
        }

    }, [isLoading, isSuccess, isError, message, user, dispatch, navigate]);

    const submitHandler = (event) => {
        event.preventDefault();
        if (email === undefined || email === '' || email === null)
            return;

        if (password === undefined || password === '' || password === null)
            return;

        console.log('hi');
        const formData = { email, password }
        dispatch(authLogin(formData));
        // dispatch(loginHandler(formData));
        setEmail('');
        setPassword('');
    };
    return (
        <>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <h1>Login</h1>
                        <Form method='post' onSubmit={submitHandler}>
                            <Form.Group>
                                <FloatingLabel controlId='floatingInput' label="Enter Your Email..." className='mb-3'>
                                    <Form.Control type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email...' />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel controlId='floatingInput' label="Enter Your Password..." className='mb-3'>
                                    <Form.Control type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password...' />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className='mb-3 mt-3'>
                                <Button variant='primary' type='submit'>Login</Button>
                            </Form.Group>
                            <Link to="/signup"><p>Signup</p></Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Loginpage