import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { HOST, PORT, DOMAIN } from '../config';

const LoginForm = () => {
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
      } else {
        alert(result.message);
      }
    } catch (err) {
      throw err.message;
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = document.forms.loginForm;
    const username = form.username.value;
    const password = form.password.value;
    const body = { username, password };
    login(body);
  };
  return (
    <Form id="loginForm">
      <Form.Group controlId="username">
        <Form.Label>用户名</Form.Label>
        <Form.Control type="text" placeholder="请输入用户名" />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>密码</Form.Label>
        <Form.Control type="password" placeholder="请输入密码" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={e => handleLogin(e)}>
                登陆
      </Button>
    </Form>
  );
};

export default LoginForm;
