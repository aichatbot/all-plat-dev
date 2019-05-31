import React, { useState, useEffect, createContext } from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route, withRouter } from 'react-router-dom';
import ThreadList from './ThreadList';
import ThreadPage from './ThreadPage';
import { HOST, PORT } from '../config';
import Header from './Header';
import Footer from './Footer';

const threadsContext = createContext({
  threads: [],
  setThreads: () => { },
  loadThreads: () => { },
  thread: {},
  setThread: () => { },
  loadThread: () => { },
  comments: [],
  setComments: () => { },
  tid: null,
  setTid: () => { },
});

const ThreadListTable = () => (
  <Container className="mt-5 mb-5">
    <ThreadList />
  </Container>
);


const ThreadListPage = (props) => {
  const [threads, setThreads] = useState([]);
  const [thread, setThread] = useState({});
  const [comments, setComments] = useState([]);
  const [tid, setTid] = useState(null);
  const { history } = props;
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
      throw err;
    }
  };
  const loadThread = async (tid) => {
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
      throw err;
    }
  };
  useEffect(() => {
    history.push('/threads');
  }, []);
  return (
    <threadsContext.Provider value={{
      threads,
      setThreads,
      loadThreads,
      thread,
      setThread,
      loadThread,
      comments,
      setComments,
      tid,
      setTid,
    }}
    >
      <Header />
      <Switch>
        <Route exact path="/threads" component={ThreadListTable} />
        <Route exact path="/threads/:tid" component={ThreadPage} />
      </Switch>
      <Footer />
    </threadsContext.Provider>
  );
};

export { threadsContext };
export default withRouter(ThreadListPage);
