import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { userService } from '../redux/store/userService';
import { useLoaderData } from 'react-router-dom';


const Import = () => {
  const importData = useLoaderData()
  const perpage = 10;
  return (
    <Container>
      <Row>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell>Fname</TableCell>
                <TableCell>Lname</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Tag</TableCell>
                <TableCell>User Id</TableCell>
                <TableCell>Created At</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {
                importData.data.length > 0 && importData.data.slice(0,perpage).map((val, key) => {
                  const { fname, lname, country_code, phone, tag, user_id, createdAt } = val;
                  return <TableRow key={key} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>{`${key + 1}.`}</TableCell>
                    <TableCell>{fname}</TableCell>
                    <TableCell>{lname}</TableCell>
                    <TableCell>{`+${country_code} ${phone}`}</TableCell>
                    <TableCell>{tag}</TableCell>
                    <TableCell>{user_id}</TableCell>
                    <TableCell>{createdAt}</TableCell>
                  </TableRow>
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Row>
    </Container>
  )
}


export const loader = () => {
  return userService.userImports();
};

export default Import