import React,{useEffect} from 'react'
import * as Font from 'expo-font'
import {Container,Content} from 'native-base'
import {ActivityIndicator,AsyncStorage,StatusBar,Alert} from 'react-native'
import {HOST,PORT} from '../config'

const AuthLoadingScreen = (props)=>{
    const {navigation} = props
    const loadFonts = async ()=>{
        await Font.loadAsync({
            Roboto:require('../node_modules/native-base/Fonts/Roboto.ttf'),
            Roboto_medium:require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
        })
    }
    const bootstrapAsync = async ()=>{
        try {
            const username = await AsyncStorage.getItem("username")
            const token = await AsyncStorage.getItem("token")
            const data = {
                username,
                token
            }
            const res = await fetch(`${HOST}:${PORT}/api/users/auth`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(data)
            })
            const result = await res.json()
            if(res.ok){
                navigation.navigate('Main')
            }else{
                Alert.alert(result.message)
                navigation.navigate('Auth')
            }
        } catch (error) {
            Alert.alert(error.message)
        }
    }
    useEffect(()=>{
        bootstrapAsync()
        loadFonts()
    },[])
    return(
        <Container>
            <Content>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </Content>
        </Container>
    )
}

export default AuthLoadingScreen