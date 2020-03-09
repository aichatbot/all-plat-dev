import React from 'react';
import { Container, Icon, Text, Button } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';

const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <Container style={styles.content}>
      <Text>首页</Text>
      <Button success
        style={styles.button}
        onPress={() => navigation.navigate('Detail', { title: '今天天气很好' })}
      >
        <Icon name="paw" />
        <Text>查看详情</Text>
      </Button>
    </Container>
  );
};

const DetailScreen = (props) => {
  const { navigation } = props;
  const title = navigation.getParam('title');
  return (
    <Container style={styles.content}>
      <Text>{title}</Text>
      <Button
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" />
        <Text>返回</Text>
      </Button>
    </Container>
  );
};

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
});

const styles = {
  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
  },
};

export default RootStack;
