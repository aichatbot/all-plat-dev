import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import {
  Container, Row, Col, Tabs, Tab,
} from 'react-bootstrap';
import { Demo, Slogan } from './Introduction';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { userContext } from './App';


const RegLogForm = () => {
  const [mode, setMode] = useState('login');
  return (
    <Tabs
      id="homeTabs"
      activeKey={mode}
      onSelect={mode => setMode(mode)}
    >
      <Tab eventKey="login" title="登陆">
        <LoginForm />
      </Tab>
      <Tab eventKey="register" title="注册">
        <RegisterForm />
      </Tab>
    </Tabs>
  );
};

const HomePage = () => {
  const { auth } = useContext(userContext);
  return (
    <Container fluid>
      <Helmet title="首页" />
      <Row>
        <Col sm={12} md={7} className="pr-1">
          <Demo />
        </Col>
        {auth
          ? (
            <Col sm={12} md={5} className="pl-0 d-flex align-items-stretch">
              <Slogan />
            </Col>
          )
          : <Col sm={12} md={5} className="pl-0"><RegLogForm /></Col>
        }
      </Row>
    </Container>
  );
};

export default HomePage;
