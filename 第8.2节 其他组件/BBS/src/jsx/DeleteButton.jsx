import React from 'react';
import { Button } from 'react-bootstrap';
import { HOST, PORT, DOMAIN } from '../config';

const DeleteButton = (props) => {
  const { tid } = props;
  const handle = async (body) => {
    try {
      const res = await fetch(
        `${HOST}:${PORT}/api/threads/${tid}`,
        {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        },
      );
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
  const handleDelete = async () => {
    if (confirm('确认删除该贴子吗？')) {
      const { username, token } = JSON.parse(localStorage.getItem(DOMAIN));
      const body = { username, token, tid };
      handle(body);
    }
  };
  return (
    <Button variant="outline-danger" size="sm" onClick={() => handleDelete()}>删除</Button>
  );
};

export default DeleteButton;
