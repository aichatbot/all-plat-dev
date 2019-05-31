import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Thread from './Thread';
import ReplyForm from './ReplyForm';
import { userContext } from './App';
import { threadsContext } from './ThreadListPage';

const ThreadPage = (props) => {
  const { tid } = props.match.params;
  const { setTid } = useContext(threadsContext);
  setTid(tid);
  const { auth } = useContext(userContext);
  return (
    <Container className="mt-5 mb-5">
      <Thread tid={tid} />
      {auth
        ? <ReplyForm />
        : null}
    </Container>
  );
};

export default ThreadPage;
