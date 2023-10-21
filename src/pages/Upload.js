import React, { useEffect, useState } from 'react'
import Papa from 'papaparse';
import { getToken } from '../middleware/authMiddleware';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { importUserData, reset } from '../redux/store/userSlice';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
    const [file, setFile] = useState();
    const dispatch = useDispatch();
    const fileHandler = (e) => {
        setFile(e.target.files[0]);
    };
    const navigate = useNavigate();
    const { message } = useSelector((state) => state.users);

    const submitHandler = (e) => {
        e.preventDefault();
        if (file) {
            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: function (result) {
                    if (result.data && result.data.length > 0) {
                        dispatch(importUserData(result.data));
                    }
                }
            });
        }
    }

    useEffect(() => {
        if (message) {
            alert(message);
            dispatch(reset());
            navigate('/import');
        }
    }, [message, navigate, file, dispatch]);

    return (
        <div>
            <h1>Import File</h1>
            <form onSubmit={submitHandler}>
                <input type='file' accept={".csv"} id='csvFile' onChange={fileHandler} />
                <button>import</button>
            </form>
        </div>
    )
}

export default Upload