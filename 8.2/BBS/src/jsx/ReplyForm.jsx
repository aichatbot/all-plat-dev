import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { HOST, PORT, DOMAIN } from '../config';

const ReplyForm = (props) => {
  const { tid } = props;
  const reply = async (body) => {
    try {
      const res = await fetch(`${HOST}:${PORT}/api/comments/${tid}`, {
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
  const handleReply = async (e) => {
    e.preventDefault();
    const { username, token } = JSON.parse(await localStorage.getItem(DOMAIN));
    const form = document.forms.replyForm;
    const content = form.content.value;
    const body = { username, token, content };
    reply(body);
  };
  return (
    <Form id="replyForm" className="p-3">
      <Form.Group controlId="content">
        <Form.Label>回复</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={e => handleReply(e)}>
                提交
      </Button>
    </Form>
  );
};

export default ReplyForm;
