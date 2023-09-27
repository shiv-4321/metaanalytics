import React, { useEffect, useState } from 'react'
import Papa from 'papaparse';
import { getToken } from '../middleware/authMiddleware';
import { Button } from 'react-bootstrap';

const Upload = () => {
    const [file, setFile] = useState();
    const [data, setData] = useState([]);
    const [columns, setcolumnsArray] = useState([]);
    const [values, setValues] = useState([]);

    const fileHandler = (e) => {
        setFile(e.target.files[0]);
    };


    const submitHandler = (e) => {
        e.preventDefault();
        if (file) {
            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: function (result) {
                    const columnsArray = [];
                    const valuesArray = [];

                    if (result.data && result.data.length > 0) {
                        result.data.map(val => {
                            columnsArray.push(Object.keys(val));
                            valuesArray.push(val);
                        });
                        setData(result.data);
                        setcolumnsArray(columnsArray[0]);
                        setValues(valuesArray);
                    }
                }
            });
        }
    }


    useEffect(() => {

        console.log(columns);
        // console.log(values);
    }, [columns, values]);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Import File</h1>
            <form onSubmit={submitHandler}>
                <input type='file' accept={".csv"} id='csvFile' onChange={fileHandler} />
                <button>import</button>
            </form>
            {
                values.length > 0 &&
                <table style={{ borderCollapse: "collapse", border: "1px solid black", margin: "5px auto" }}>
                    <thead>
                        {columns.map(col => <th>{col}</th>)}
                        <th><Button variant='success'>Send</Button></th>
                    </thead>
                    <tbody>
                        {
                            values.map(val =>
                                <tr>
                                    <td>{val['FIrstname']}</td>
                                    <td>{val['Lastname']}</td>
                                    <td>{val['Country Code']}</td>
                                    <td>{val['Phone Number']}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            }
        </div>


    )
}

export default Upload