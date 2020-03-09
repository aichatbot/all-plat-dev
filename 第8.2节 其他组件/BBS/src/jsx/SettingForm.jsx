import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { HOST, PORT, DOMAIN } from '../config';

const SettingForm = () => {
  const [settings, setSettings] = useState([]);
  const loadSettings = async () => {
    try {
      const storage = await localStorage.getItem(DOMAIN);
      const { username, token } = JSON.parse(storage);
      const res = await fetch(`${HOST}:${PORT}/api/users/${username}`, { method: 'GET' });
      const result = await res.json();
      if (res.ok) {
        setSettings(result.data);
      } else {
        alert(result.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    loadSettings();
  }, []);
  const setting = async (body) => {
    try {
      const { username, token } = JSON.parse(await localStorage.getItem(DOMAIN));
      const { description } = body;
      const formData = new FormData();
      await formData.append('username', username);
      await formData.append('token', token);
      await formData.append('description', description);
      await formData.append('avatar', document.querySelector('#uploader').files[0]);
      const res = await fetch(`${HOST}:${PORT}/api/users`, {
        method: 'PATCH',
        body: formData,
      });
      const result = await res.json();
      if (res.ok) {
        alert(result.message);
        loadSettings();
      } else {
        alert(result.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  const handleSetting = (e) => {
    e.preventDefault();
    const form = document.forms.settingForm;
    const description = form.description.value;
    const body = { description };
    setting(body);
  };
  return (
    <Form id="settingForm">
      <Form.Group controlId="description">
        <Form.Label>个人描述</Form.Label>
        <Form.Control type="text" placeholder="请输入个人描述" defaultValue={settings.description} />
      </Form.Group>
      <Form.Group controlId="uploader">
        <Form.Label>头像</Form.Label>
        <br />
        <img
          src={settings.avatar ? `/upload/${settings.avatar}` : '/img/avatar.png'}
          alt="头像"
          className="rounded img-thumbnail"
        />
        <Form.Control type="file" placeholder="请上传头像" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={e => handleSetting(e)}>
                确定
      </Button>
    </Form>
  );
};

export default SettingForm;
