import React, { useState, useEffect } from 'react';
import { Container, Content, List, ListItem, Text, Body, Right, Icon } from 'native-base';
import { HOST, PORT } from '../config';

const ThreadItem = (props) => {
  const { thread, navigation } = props;
  return (
    <ListItem>
      <Body>
        <Text>{thread.author.username}</Text>
        <Text note>{thread.title}</Text>
      </Body>
      <Right>
        <Icon
          name="arrow-forward"
          onPress={() => navigation.navigate('ThreadDetail', { thread })}
        />
      </Right>
    </ListItem>
  );
};

const ThreadListScreen = (props) => {
  const { navigation } = props;
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
  useEffect(() => {
    loadThreads();
  }, []);
  const items = threads.map((thread, idx) =>
    <ThreadItem key={idx} thread={thread} navigation={navigation} />);
  return (
    <Container>
      <Content>
        <List>
          {items}
        </List>
      </Content>
    </Container>
  );
};

export default ThreadListScreen;
