import React, { useEffect } from 'react';
import { Font } from 'expo';
import { Container, Content } from 'native-base';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  Alert,
} from 'react-native';
import { HOST, PORT } from '../config';

const AuthLoadingScreen = (props) => {
  const bootstrapAsync = async () => {
    try {
      const username = await AsyncStorage.getItem('username');
      const token = await AsyncStorage.getItem('token');
      const data = {
        username,
        token,
      };
      const res = await fetch(`${HOST}:${PORT}/api/users/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        props.navigation.navigate('Main');
      } else {
        Alert.alert(result.message);
        props.navigation.navigate('Auth');
      }
    } catch (err) {
      Alert.alert(err.message);
    }
  };
  const loadFonts = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
  };
  useEffect(() => {
    bootstrapAsync();
    loadFonts();
  }, []);
  return (
    <Container>
      <Content>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </Content>
    </Container>
  );
};

export default AuthLoadingScreen;
