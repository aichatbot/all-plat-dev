import React, { useContext } from 'react';
import { HOST, PORT, DOMAIN } from '../config';
import { withRouter } from 'react-router-dom';
import { threadsContext } from './ThreadListPage';

const DeleteButton = (props) => {
  const { history } = props;
  const { tid } = useContext(threadsContext);
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
        history.push('/threads');
      } else {
        alert(result.message);
      }
    } catch (err) {
      throw err;
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
    <button
      className="btn btn-default"
      disabled={location.pathname === '/threads'}
      onClick={() => handleDelete()}
    >
      <span className="icon icon-trash" />
    </button>
  );
};

export default withRouter(DeleteButton);
