import React,{useState,useEffect} from 'react'
import {Container,Content,Text,Card,CardItem,Left,Right,Thumbnail,Body} from 'native-base'
import {Alert} from 'react-native'
import {HOST,PORT} from '../config'

const ContentCard = (props)=>{
    const {data} = props
    return(
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{
                        uri:data.author.avatar
                        ? `${HOST}:${PORT}/upload/${data.author.avatar}`
                        : `${HOST}:${PORT}/img/avatar.png`
                    }}
                    />
                    <Body>
                        <Text>{data.author.username}</Text>
                        <Text note>{data.author.description}</Text>
                    </Body>
                </Left>
                <Right>
                    <Text note>
                        {new Date(data.posttime).toLocaleString()}
                    </Text>
                </Right>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{data.content}</Text>
                </Body>
            </CardItem>
        </Card>
    )
}

const ThreadDetailScreen = (props)=>{
    const tid = props.navigation.getParam('thread')._id
    const [thread,setThread] = useState({})
    const [comments,setComments] = useState([])
    const loadThread = async ()=>{
        try {
            const res = await fetch(`${HOST}:${PORT}/api/threads/${tid}`,{method:"GET"})
            const result = await res.json()
            if(res.ok){
                setThread(result.data.thread)
                setComments(result.data.comments)
            }else{
                Alert.alert(result.message)
            }
        } catch (error) {
            Alert.alert(error.message)
        }
    }
    useEffect(()=>{
        loadThread()
    },[])
    const commentCards = comments.map((comment,idx)=><ContentCard key={idx} data={comment}/>)
    if(!thread.author) return null
    return(
        <Container>
            <Content padder>
                <ContentCard data={thread}/>
                {commentCards}
            </Content>
        </Container>
    )
}

export default ThreadDetailScreen