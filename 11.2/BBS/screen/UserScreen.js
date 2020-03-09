import React,{useState,useEffect} from 'react'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import {Container,Content,Text,Form,Item,Label,Input,ActionSheet,Button} from 'native-base'
import {Image,TouchableOpacity,Alert,AsyncStorage} from 'react-native'
import {HOST,PORT}from '../config'

const UserScreen = (props)=>{
    const [description,setDescription] = useState(null)
    const [imgurl,setImgurl] = useState('null')
    const onTakePic = async ()=>{
        await Permissions.askAsync(Permissions.CAMERA)
        const {cancelled,uri} = await ImagePicker.launchCameraAsync({})
        if(!cancelled){
            setImgurl(uri)
        }
    }
    const onChoosePic = async ()=>{
        await Permissions.askAsync(Permissions.CAMERA_ROLL)
        const {cancelled,uri} = await ImagePicker.launchImageLibraryAsync({})
        if(!cancelled){
            setImgurl(uri)
        }
    }
    const edit = async ()=>{
        try {
            const formData = new FormData()
            const username = await AsyncStorage.getItem('username')
            const token = await AsyncStorage.getItem('token')
            await formData.append('username',username)
            await formData.append('token',token)
            await formData.append('description',description)
            await formData.append('avatar',{
                uri:imgurl,
                type:"multipart/form-data",
                name:"temp"
            })
            const res = await fetch(`${HOST}:${PORT}/api/users`,{
                method:"PATCH",
                body:formData
            })
            const result = await res.json()
            if(res.ok){
                Alert.alert(result.message)
            }else{
                Alert.alert(result.message)
            }
        } catch (error) {
            Alert.alert(error.message)
        }
    }
    const loadUser = async ()=>{
        try {
            const username = await AsyncStorage.getItem('username')
            const res = await fetch(`${HOST}:${PORT}/api/users/${username}`,{method:"GET"})
            const result = await res.json()
            const user = result.data
            if(res.ok){
                const avatar = user.avatar ? `${HOST}:${PORT}/upload/${user.avatar}` :`${HOST}:${PORT}/img/avatar.png`
                setImgurl(avatar)
                setDescription(user.description)
            }else{
                Alert.alert(result.message)
            }
        } catch (error) {
            Alert.alert(error.message)
        }
    }
    useEffect(()=>{
        loadUser()
    },[])
    return(
        <Container>
            <Content padder>
                <Form>
                    <Item>
                        <Label>个人描述</Label>
                        <Input onChangeText={description=>setDescription(description)}>{description}</Input>
                    </Item>
                    <Item>
                        <Label>上传头像</Label>
                        <TouchableOpacity
                            onPress={()=>ActionSheet.show(
                                {
                                    options:['拍照','相册','取消'],
                                    cancelButtonIndex:2,
                                    title:'上传头像'
                                },
                                (buttonIndex)=>{
                                    if(buttonIndex==0){
                                        onTakePic()
                                    }else if(buttonIndex==1){
                                        onChoosePic()
                                    }
                                }
                            )}
                        >
                            <Image
                                style={{width:150,height:150,backgroundColor:'#dddddd'}}
                                source={{uri:imgurl}}
                            />
                        </TouchableOpacity>
                    </Item>
                    <Button block success style={{margin:10}} onPress={()=>edit()}>
                        <Text>修改个人资料</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    )
}

export default UserScreen