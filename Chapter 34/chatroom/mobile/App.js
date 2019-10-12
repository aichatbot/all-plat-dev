import React from 'react';
import {
  createAppContainer, createSwitchNavigator,
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Root } from 'native-base';
import AuthLoadingScreen from './screen/AuthLoadingScreen';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import SideDrawer from './screen/SideDrawer';
import ChatScreen from './screen/ChatScreen';	

const ChatStack = createStackNavigator({
  User: {
    screen: ChatScreen,
    navigationOptions: { title: '聊天室' },
  },
});

const HomeDrawer = createDrawerNavigator(
  {
    Chat: ChatStack,
  },
  {
    drawerWidth: 200,
    drawerPosition: 'left',
    contentOptions: {
      initialRouteName: 'Thread',
    },
    contentComponent: SideDrawer,
  },
);

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: { title: '登陆' },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: { title: '注册' },
  },
});

const RootSwitch = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    Main: HomeDrawer,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const AppContainer = createAppContainer(RootSwitch);
const App = () => <Root><AppContainer /></Root>;
export default App;