import "./HomePage.css";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap";

function HomePage() {
    return (
    <div className='background-container'>
    <Container className="centered-container main-header">
        <Row>
          <Col lg={12} className="main-header">
            <span className="main">
              NOISE | COVE<span>RED</span>
            </span>
          </Col>
        </Row>
      </Container>
    </div>);
}

export default HomePage;
