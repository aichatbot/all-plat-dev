import React,{useState,useEffect} from 'react'
import {Button,Text,Container,Content,Card,CardItem,Body,Left,Thumbnail} from 'native-base'
import {AsyncStorage,Alert} from 'react-native'
import {HOST,PORT} from '../config'

const SideDrawer = (props)=>{
    const {navigation} = props
    const [user,setUser] = useState({})
    const getUser = async ()=>{
        try {
            const username = await AsyncStorage.getItem('username')
            const res = await fetch(`${HOST}:${PORT}/api/users/${username}`,{
                method:"GET"
            })
            const result = await res.json()
            if(res.ok){
                setUser(result.data)
            }else{
                Alert.alert(result.message)
            }
        } catch (error) {
            Alert.alert(error.message)
        }
    }
    const logout = async ()=>{
        try {
            const username = await AsyncStorage.getItem('username')
            const token = await AsyncStorage.getItem('token')
            const data = {
                username,
                token
            }
            const res = await fetch(`${HOST}:${PORT}/api/users/logout`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(data)
            })
            if(res.ok){
                setUser({})
                navigation.navigate('Auth')
            }else{
                Alert.alert(res.message)
            }
        } catch (error) {
            Alert.alert(error.message)
        }
    }
    useEffect(()=>{
        getUser()
    },[])
    return(
        <Container>
            <Content>
                <Card style={{marginTop:50}}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{
                                uri:user.avatar
                                ? `${HOST}:${PORT}/upload/${user.avatar}`
                                : `${HOST}:${PORT}/img/avatar.png`
                            }}
                            />
                            <Body>
                                <Text>欢迎！</Text>
                                <Text note>{user.username}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                </Card>
                <Button full light onPress={()=>logout()}>
                    <Text>退出</Text>
                </Button>
            </Content>
        </Container>
    )
}

export default SideDrawer