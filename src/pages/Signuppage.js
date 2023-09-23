import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signupUser } from '../redux/store/userSlice';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

const Signuppage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, isSuccess, isError, message, user } = useSelector((state) => state.users);

    const submitHandler = (event) => {
        event.preventDefault();
        if (email === undefined || email === '' || email === null)
            return;

        if (password === undefined || password === '' || password === null)
            return;

        console.log('hi');
        const formData = { email, password };
        dispatch(signupUser(formData));
        // dispatch(signupHandler(formData));
        setEmail('');
        setPassword('');
    };

    useEffect(() => {
        if (user && user.message) {
            alert(user.message);
            if (user.data)
                navigate('/login');

        }
    }, [isLoading, isSuccess, isError, message, user, dispatch, navigate]);

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <h1>Signup</h1>
                    <Form method='post' onSubmit={submitHandler}>
                        <Form.Group>
                            <FloatingLabel controlId='floatingInput' label="Enter Your Email..." className='mb-3'>
                                <Form.Control type='text' className='form-control' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email...' />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel controlId='floatingInput' label="Enter Your Password..." className='mb-3'>
                                <Form.Control type='password' className='form-control' name='email' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password...' />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className='mb-3 mt-3'>
                            <Button variant='primary' type='submit'>Signup</Button>
                        </Form.Group>
                        <Link to="/login"><p>Login</p></Link>
                    </Form>
                </Col>

            </Row>
        </Container>
    )
}

export default Signuppage