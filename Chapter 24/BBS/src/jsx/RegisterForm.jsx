import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { userContext } from './App';
import { HOST, PORT } from '../config';

const RegisterForm = () => {
  const { setAuth } = useContext(userContext);
  const login = async (body) => {
    try {
      const res = await fetch(`${HOST}:${PORT}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const result = await res.json();
      if (res.ok) {
        alert(result.message);
        const data = { username: result.data.username, token: result.data.token };
        await localStorage.setItem(DOMAIN, JSON.stringify(data));
        setAuth(true);
        setUser({ username: result.data.username });
      } else {
        alert(result.message);
      }
    } catch (err) {
      throw err.message;
    }
  };
  const register = async (body) => {
    try {
      const res = await fetch(`${HOST}:${PORT}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const result = await res.json();
      if (res.ok) {
        alert(result.message);
        login(body);
      } else {
        alert(result.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = document.forms.registerForm;
    const username = form.username.value;
    const password = form.password.value;
    const confirmpass = form.confirmpass.value;
    const body = { username, password, confirmpass };
    register(body);
  };
  return (
    <Form id="registerForm">
      <Form.Group controlId="username">
        <Form.Label>用户名</Form.Label>
        <Form.Control type="text" placeholder="请输入用户名" />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>密码</Form.Label>
        <Form.Control type="password" placeholder="请输入密码" />
      </Form.Group>
      <Form.Group controlId="confirmpass">
        <Form.Label>确认密码</Form.Label>
        <Form.Control type="password" placeholder="请再输入一遍密码" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={e => handleRegister(e)}>
                注册
      </Button>
    </Form>
  );
};

export default RegisterForm;
