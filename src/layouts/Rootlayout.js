import React from 'react'
import { Outlet } from 'react-router-dom'
import classes from './Rootlayout.module.css';
import Sidebarlayout from '../components/Sidebarlayout';
import { Col, Container, Row } from 'react-bootstrap';

const Rootlayout = () => {
  return (
    <div>
      <Row>
        <Col xs="3">
          <Sidebarlayout />
        </Col>
        <Col xs="9">
          <Outlet />
        </Col>
      </Row>
    </div>
  )
}

export default Rootlayout