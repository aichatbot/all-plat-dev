import React from 'react'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import AuthLoadingScreen from './screen/AuthLoadingScreen'
import {Icon,Root} from 'native-base'

import LoginScreen from './screen/LoginScreen'
import RegisterScreen from './screen/RegisterScreen'
import ThreadListScreen from './screen/ThreadListScreen'
import ThreadDetailScreen from './screen/ThreadDetailScreen'
import UserScreen from './screen/UserScreen'
import SideDrawer from './screen/SideDrawer'

const ThreadStack = createStackNavigator({
    ThreadList:{
        screen:ThreadListScreen,
        navigationOptions:{title:"帖子列表"}
    },
    ThreadDetail:{
        screen:ThreadDetailScreen,
        navigationOptions:{title:"帖子详情"}
    },
})

const HomeDrawer = createDrawerNavigator(
    {
        Thread:ThreadStack
    },
    {
        drawerWidth:200,
        drawerPosition:"left",
        contentOptions:{
            initialRouteName:"Thread"
        },
        contentComponent:SideDrawer
    }
)

const UserStack = createStackNavigator({
    User:{
        screen:UserScreen,
        navigationOptions:{title:"用户"}
    }
})

const MainTab = createBottomTabNavigator({
    HomeDrawer:{
        screen:HomeDrawer,
        navigationOptions:{
            title:'帖子',
            tabBarLabel:"帖子",
            tabBarIcon:({focused})=><Icon active={focused} name="ios-people"/>
        }
    },
    UserStack:{
        screen:UserStack,
        navigationOptions:{
            title:'用户',
            tabBarLabel:"用户",
            tabBarIcon:({focused})=><Icon active={focused} name="ios-man"/>
        }
    }
})

const AuthStack = createStackNavigator({
    "Login":{
        "screen":LoginScreen,
        "navigationOptions":{"title":"登陆"}
    },
    "Register":{
        "screen":RegisterScreen,
        "navigationOptions":{"title":"注册"}
    }
})

const RootSwitch = createSwitchNavigator(
    {
        "AuthLoading":AuthLoadingScreen,
        "Auth":AuthStack,
        "Main":MainTab
    },
    {
        "initialRouteName":"AuthLoading"
    }
)

const AppContainer = createAppContainer(RootSwitch)
const App = ()=><Root><AppContainer/></Root>

export default App