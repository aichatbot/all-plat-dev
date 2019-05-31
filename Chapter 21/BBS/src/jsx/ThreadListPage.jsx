import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import PostButton from './PostButton';
import ThreadList from './ThreadList';
import { HOST, PORT } from '../config';

const ThreadListPage = () => {
  const [threads, setThreads] = useState([]);
  const loadThreads = async () => {
    try {
      const res = await fetch(`${HOST}:${PORT}/api/threads`, { method: 'GET' });
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
  return (
    <Container>
      <PostButton loadThreads={loadThreads} />
      <ThreadList loadThreads={loadThreads} threads={threads} />
    </Container>
  );
};

export default ThreadListPage;
