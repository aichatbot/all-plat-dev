import React, { useState, useContext } from 'react';
import { Container, Row, ButtonGroup } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { userContext } from './App';
import Thread from './Thread';
import ReplyForm from './ReplyForm';
import ModifyButton from './ModifyButton';
import DeleteButton from './DeleteButton';
import { HOST, PORT } from '../config';

const ThreadPage = (props) => {
  const { user, auth } = useContext(userContext);
  const { tid } = props.match.params;
  const [thread, setThread] = useState({});
  const [comments, setComments] = useState([]);
  const loadThread = async () => {
    try {
      const res = await fetch(`${HOST}:${PORT}/api/threads/${tid}`);
      const result = await res.json();
      if (res.ok) {
        setThread(result.data.thread);
        setComments(result.data.comments);
      } else {
        alert(result.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <Container>
      <Helmet title={thread.title} />
      {thread.author && user.username === thread.author.username
        ? (
          <Row className="m-0">
            <ButtonGroup className="ml-auto">
              <ModifyButton tid={tid} loadThread={loadThread} />
              <DeleteButton tid={tid} />
            </ButtonGroup>
          </Row>
        )
        : null}
      <Thread tid={tid} thread={thread} comments={comments} loadThread={loadThread} />
      {auth
        ? <ReplyForm tid={tid} loadThread={loadThread} />
        : null}
    </Container>
  );
};

export default ThreadPage;
