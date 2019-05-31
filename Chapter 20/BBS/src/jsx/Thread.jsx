import React, { useState, useEffect } from 'react';
import { Media } from 'react-bootstrap';
import { HOST, PORT } from '../config';

const TPart = (props) => {
  const { thread } = props;// 从父组件传来的props解构出帖子信息
  if (!thread.author) return null;// 如果没获取到帖子作者，不进行渲染
  return (
    <Media className="rounded border p-3 mb-3 mt-0">
      <UserCard author={thread.author} />
      <Media.Body>
        <ContentCard floor={thread} />
      </Media.Body>
    </Media>
  );
};

const CPart = (props) => {
  const { comments } = props;
  const floors = comments.map((comment, idx) => <Floor key={idx} comment={comment} />);
  return (
    <div>
      {floors}
    </div>
  );
};

const Floor = (props) => {
  const { comment } = props;
  return (
    <Media className="rounded border p-3 mb-3">
      <UserCard author={comment.author} />
      <Media.Body>
        <ContentCard floor={comment} />
      </Media.Body>
    </Media>
  );
};

const UserCard = (props) => {
  const { author } = props;
  return (
    <div>
      <img
        width={64}
        height={64}
        className="mr-3 img-thumbnail round"
        src={author.avatar ? `/upload/${author.avatar}` : '/img/avatar.png'}
        alt={author.username}
      />
      <br />
      <center>{author.username}</center>
    </div>
  );
};

const ContentCard = (props) => {
  const { floor } = props;
  return (
    <div>
      <h5>{floor.title}</h5>
      <p>
        {floor.content}
      </p>
      <p className="d-flex justify-content-end text-muted">
        <small>
          发表于
          {' '}
          {new Date(floor.posttime).toLocaleString()}
        </small>
      </p>
      <hr />
      <p className="d-flex justify-content-end m-0">
        <small>
          {floor.author.description}
        </small>
      </p>
    </div>
  );
};

const Thread = (props) => {
  const { tid } = props;
  const [thread, setThread] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
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
    loadThread();
  }, []);
  return (
    <div>
      <TPart thread={thread} />
      <CPart comments={comments} />
    </div>
  );
};

export default Thread;
