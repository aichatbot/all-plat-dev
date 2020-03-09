import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Row = (props) => {
  const { thread } = props;
  return (
    <tr>
      <td>
        <Link to={`/threads/${thread._id}`}>{thread.title}</Link>
      </td>
      <td>{thread.author.username}</td>
      <td>{new Date(thread.posttime).toLocaleString()}</td>
    </tr>
  );
};

const ThreadList = (props) => {
  const { loadThreads, threads } = props;
  useEffect(() => {
    loadThreads();
  }, []);
  const rows = threads.map((thread, idx) => (
    <Row key={idx} thread={thread} />
  ));
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>标题</th>
          <th>作者</th>
          <th>发布时间</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  );
};


export default ThreadList;