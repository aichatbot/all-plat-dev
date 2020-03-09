import React, { useState, useEffect } from 'react';
import {
  Card, ListGroup, Row, Col,
} from 'react-bootstrap';
import { HOST, PORT } from '../config';

const ProfileInfo = (props) => {
  const { user } = props;
  return (
    <Card>
      <Card.Header>个人信息</Card.Header>
      <Card.Img
        variant="top"
        src={user.avatar ? `/upload/${user.avatar}` : '/img/avatar.png'}
        className="rounded img-thumbnail"
      />
      <Card.Body>
        <Card.Title>用户名</Card.Title>
        <Card.Text>{user.username}</Card.Text>
        <Card.Title>个人描述</Card.Title>
        <Card.Text>{user.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const ThreadsInfo = (props) => {
  const { threads } = props;
  const lines = threads.map((thread, idx) => (
    <ListGroup.Item key={idx} className="d-flex justify-content-between">
      <span>{thread.title}</span>
      <small className="text-muted">
        {new Date(thread.posttime).toLocaleString()}
      </small>
    </ListGroup.Item>
  ));
  return (
    <Card>
      <Card.Header>发帖信息</Card.Header>
      <ListGroup variant="flush">
        {lines}
      </ListGroup>
    </Card>
  );
};

const UserInfo = (props) => {
  const { username } = props;
  const [user, setUser] = useState({});
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(
          `${HOST}:${PORT}/api/users/${username}`,
          { method: 'GET' },
        );
        const result = await res.json();
        if (res.ok) {
          setUser(result.data);
          setThreads(result.data.threads);
        }
      } catch (err) {
        alert(err.message);
      }
    };
    getUser();
  }, []);
  return (
    <Row>
      <Col sm={12} md={4}>
        <ProfileInfo user={user} />
      </Col>
      <Col sm={12} md={8}>
        <ThreadsInfo threads={threads} />
      </Col>
    </Row>
  );
};

export default UserInfo;
