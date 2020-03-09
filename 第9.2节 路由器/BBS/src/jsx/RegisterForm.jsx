import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { HOST, PORT } from '../config';

const RegisterForm = () => {
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
