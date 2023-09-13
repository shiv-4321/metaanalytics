import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signupUser } from '../redux/store/userSlice';

const Signuppage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

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

    return (
        <form method='post' onSubmit={submitHandler}>
            <div className='form-group'>
                <label>Email:</label><br />
                <input type='text' className='form-control' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email...' />
            </div>
            <div className='form-group'>
                <label>Password:</label><br />
                <input type='password' className='form-control' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password...' />
            </div>
            <div className='form-group'><br />
                <button type='submit' className='btn btn-success form-control'>Signup</button>
            </div>
            <Link to="/login"><p>Login</p></Link>
        </form>
    )
}

export default Signuppage