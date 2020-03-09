import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { threadsContext } from './ThreadListPage';
import { HOST, PORT, DOMAIN } from '../config';

const ModifyForm = (props) => {
  const { tid } = props;
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const loadThread = async () => {
    try {
      const res = await fetch(`${HOST}:${PORT}/api/threads/${tid}`, { method: 'GET' });
      const result = await res.json();
      if (res.ok) {
        setTitle(result.data.thread.title);
        setContent(result.data.thread.content);
      } else {
        alert(result.message);
      }
    } catch (e) {
      throw e;
    }
  };
  useEffect(() => {
    loadThread();
  }, []);
  return (
    <Form id="modifyForm">
      <Form.Group controlId="title">
        <Form.Label>标题</Form.Label>
        <Form.Control type="text" placeholder="请输入帖子标题" defaultValue={title} />
      </Form.Group>
      <Form.Group controlId="content">
        <Form.Label>内容</Form.Label>
        <Form.Control as="textarea" rows="3" defaultValue={content} />
      </Form.Group>
    </Form>
  );
};

const ModifyButton = (props) => {
  const { location } = props;
  const { tid, loadThread } = useContext(threadsContext);
  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const modify = async (body) => {
    try {
      const res = await fetch(`${HOST}:${PORT}/api/threads/${tid}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const result = await res.json();
      if (res.ok) {
        alert(result.message);
        closeModal();
        loadThread(tid);
      } else {
        alert(result.message);
      }
    } catch (err) {
      throw err;
    }
  };
  const handleModify = async () => {
    const { username, token } = JSON.parse(await localStorage.getItem(DOMAIN));
    const form = document.forms.modifyForm;
    const title = form.title.value;
    const content = form.content.value;
    const body = {
      username, token, title, content,
    };
    modify(body);
  };
  return (
    <div className="d-inline">
      <button
        className="btn btn-default"
        disabled={location.pathname === '/threads'}
        onClick={() => showModal()}
      >
        <span className="icon icon-doc-text" />
      </button>
      <Modal show={show} onHide={() => closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title>修改帖子</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModifyForm tid={tid} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => closeModal()}>
            关闭
          </Button>
          <Button variant="primary" onClick={() => handleModify()}>
            提交
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(ModifyButton);