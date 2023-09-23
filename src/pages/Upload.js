import React, { useEffect, useState } from 'react'
import Papa from 'papaparse';

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
            <h1>import File</h1>
            <form onSubmit={submitHandler}>
                <input type='file' accept={".csv"} id='csvFile' onChange={fileHandler} />
                <button>import</button>
            </form>
            {
                values.length > 0 &&
                <table style={{ borderCollapse: "collapse", border: "1px solid black", margin: "5px auto" }}>
                    <thead>
                        {columns.map(col => <th>{col}</th>)}
                    </thead>
                    <tbody>
                        {
                            values.map(val =>
                                <tr>
                                    <td>{val['Import ID']}</td>
                                    <td>{val['Payment Type']}</td>
                                    <td>{val['Tags']}</td>
                                    <td>{val['Username']}</td>
                                    <td>{val['Meta Title']}</td>
                                    <td>{val['Phone Number']}</td>
                                    <td>{val['Address Line 1']}</td>
                                    <td>{val['City']}</td>
                                    <td>{val['District']}</td>
                                    <td>{val['State Name']}</td>
                                    <td>{val['Pincode']}</td>
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