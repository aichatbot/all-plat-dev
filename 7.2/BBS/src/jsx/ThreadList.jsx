import React, { useState, useEffect } from 'react';
import { HOST, PORT } from '../config';

const Row = (props) => {
  const { thread } = props;
  return (
    <tr>
      <td>{thread.title}</td>
      <td>{thread.author.username}</td>
      <td>{new Date(thread.posttime).toLocaleString()}</td>
    </tr>
  );
};

const ThreadList = () => {
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    const loadThreads = async () => {
      try {
        const res = await fetch(
          `${HOST}:${PORT}/api/threads`,
          { method: 'GET' },
        );
        const result = await res.json();
        if (res.ok) {
          setThreads(result.data);
        } else {
          alert(result.message);
        }
      } catch (err) {
        alert(err.message);
      }
    };
    loadThreads();
  }, []);
  const rows = threads.map((thread, idx) => (
    <Row key={idx} thread={thread} />
  ));
  return (
    <table>
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
    </table>
  );
};


export default ThreadList;
