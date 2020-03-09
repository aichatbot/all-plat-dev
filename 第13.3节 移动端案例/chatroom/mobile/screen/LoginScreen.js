import React,{useState} from 'react'
import {AsyncStorage,Alert} from 'react-native'
import {Container,Content,Form,Item,Label,Input,Button,Text,Right} from 'native-base'
import {HOST,PORT} from '../config'

const LoginScreen = (props)=>{
    const {navigation} = props
    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)
    const login = async ()=>{
        try {
            const data = {username,password}
            const res = await fetch(`${HOST}:${PORT}/api/users/login`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(data)
            })
            const result = await res.json()
            if(res.ok){
                await AsyncStorage.setItem('username',result.data.username)
                await AsyncStorage.setItem('token',result.data.token)
                Alert.alert(result.message)
                navigation.navigate('Main')
            }else{
                Alert.alert(result.message)
            }
        } catch (error) {
            Alert.alert(error.message)
        }
    }
    return(
        <Container style={{backgroundColor:'white'}}>
            <Content padder>
                <Form>
                    <Item>
                        <Label>用户名</Label>
                        <Input onChangeText={username=>setUsername(username)}/>
                    </Item>
                    <Item>
                        <Label>密码</Label>
                        <Input secureTextEntry onChangeText={password=>setPassword(password)}/>
                    </Item>
                    <Button block success style={{margin:10}} onPress={()=>login()}>
                        <Text>登陆</Text>
                    </Button>
                </Form>
                <Right>
                    <Text onPress={()=>navigation.navigate('Register')}>注册</Text>
                </Right>
            </Content>
        </Container>
    )
}

export default LoginScreen