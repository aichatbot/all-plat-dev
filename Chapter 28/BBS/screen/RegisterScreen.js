import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Button, Text } from 'native-base';
import { HOST, PORT } from '../config';

const RegisterScreen = (props) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmpass, setConfirmpass] = useState(null);
  register = async () => {
    try {
      const data = {
        username,
        password,
        confirmpass,
      };
      const res = await fetch(`${HOST}:${PORT}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        Alert.alert('成功注册，请登陆');
        props.navigation.navigate('Login');
      } else {
        Alert.alert(result.message);
      }
    } catch (err) {
      Alert.alert(err.message);
    }
  };
  return (
    <Container style={{ backgroundColor: 'white' }}>
      <Content padder>
        <Form>
          <Item>
            <Label>用户名</Label>
            <Input onChangeText={username => setUsername(username)} />
          </Item>
          <Item>
            <Label>密码</Label>
            <Input secureTextEntry onChangeText={password => setPassword(password)} />
          </Item>
          <Item>
            <Label>确认密码</Label>
            <Input secureTextEntry onChangeText={confirmpass => setConfirmpass(confirmpass)} />
          </Item>
          <Button block success style={{ margin: 10 }} onPress={() => register()}>
            <Text>注册</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default RegisterScreen;
