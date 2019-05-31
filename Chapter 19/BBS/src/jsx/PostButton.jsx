import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { HOST, PORT, DOMAIN } from '../config';

const PostForm = () => (
  <Form id="postForm">
    <Form.Group controlId="title">
      <Form.Label>标题</Form.Label>
      <Form.Control type="text" placeholder="请输入帖子标题" />
    </Form.Group>
    <Form.Group controlId="content">
      <Form.Label>内容</Form.Label>
      <Form.Control as="textarea" rows="3" />
    </Form.Group>
  </Form>
);

const PostButton = () => {
  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const post = async (body) => {
    try {
      const res = await fetch(`${HOST}:${PORT}/api/threads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const result = await res.json();
      if (res.ok) {
        alert(result.message);
        closeModal();
      } else {
        alert(result.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  const handlePost = async () => {
    const { username, token } = JSON.parse(await localStorage.getItem(DOMAIN));
    const form = document.forms.postForm;
    const title = form.title.value;
    const content = form.content.value;
    const body = {
      username, token, title, content,
    };
    post(body);
  };
  return (
    <div>
      <Button variant="outline-success" size="sm" onClick={() => showModal()}>
                发布新帖
      </Button>
      <Modal show={show} onHide={() => closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title>发布新帖</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PostForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => closeModal()}>
                        关闭
          </Button>
          <Button variant="primary" onClick={() => handlePost()}>
                        提交
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostButton;
