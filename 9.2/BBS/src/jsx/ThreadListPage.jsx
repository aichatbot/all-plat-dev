import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import PostButton from './PostButton';
import ThreadList from './ThreadList';
import { HOST, PORT } from '../config';
import ThreadPage from './ThreadPage';

const ThreadListTable = () => {
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

const ThreadListPage = () => (
  <Switch>
    <Route exact path="/threads" component={ThreadListTable} />
    <Route exact path="/threads/:tid" component={ThreadPage} />
  </Switch>
);

export default ThreadListPage;
