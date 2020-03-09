import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import UserInfo from './UserInfo';

const ProfilePage = (props) => {
  const { username } = props.match.params;
  return (
    <Container>
      <Helmet title={`${username}的个人信息`} />
      <UserInfo username={username} />
    </Container>
  );
};

export default ProfilePage;
