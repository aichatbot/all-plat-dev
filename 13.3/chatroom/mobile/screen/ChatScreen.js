import React, { useEffect, useState } from 'react';
import {
  Container, Content, Text, Toast, List, ListItem, Body, Right, Footer, Input, Button,
} from 'native-base';
import { AsyncStorage } from 'react-native';
import io from 'socket.io-client';
import { HOST, PORT } from '../config';

const Comment = (props) => {
  const { username, comment, posttime } = props.data;
  return (
    <ListItem avatar>
      <Body>
        <Text>{username}</Text>
        <Text note>{comment}</Text>
      </Body>
      <Right>
        <Text note>{new Date(posttime).toLocaleTimeString()}</Text>
      </Right>
    </ListItem>
  );
};

const ChatScreen = () => {
  const socket = io(`${HOST}:${PORT}`);
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const initSocket = async () => {
    const name = await AsyncStorage.getItem('username');
    setUsername(name);
    socket.emit('join', { rid: 'room1', username: name });
    socket.on('system', (data) => {
      Toast.show({
        text: data,
        position: 'top',
        buttonText: '确定',
        duration: 3000,
      });
    });
    socket.on('comments', (data) => {
      setComments(data);
    });
  };

  const handleSubmit = () => {
    socket.emit('comments', { rid: 'room1', username, comment });
  };

  useEffect(() => {
    initSocket();
  }, []);

  const items = comments.map((c, key) => <Comment data={c} key={key} />);

  return (
    <Container>
      <Content padder>
        <List>
          {items}
        </List>
      </Content>
      <Footer style={{ backgroundColor: 'lightblue' }}>
        <Input
          placeholder="请输入留言"
          value={comment}
          onChangeText={(message) => setComment(message)}
        />
        <Button large success onPress={() => handleSubmit()}>
          <Text>发送</Text>
        </Button>
      </Footer>
    </Container>
  );
};

export default ChatScreen;
