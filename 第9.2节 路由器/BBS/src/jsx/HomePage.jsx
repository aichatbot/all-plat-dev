import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Demo, Slogan } from './Introduction';

const HomePage = () => (
  <Container fluid>
    <Row>
      <Col sm={12} md={7} className="pr-1">
        <Demo />
      </Col>
      <Col sm={12} md={5} className="pl-0 d-flex align-items-stretch">
        <Slogan />
      </Col>
    </Row>
  </Container>
);

export default HomePage;
