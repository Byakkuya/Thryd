import React from 'react'
import { Avatar,Box,Divider,Flex,Image,Text,Button } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'
import Actions from '../components/Actions'
import Comment from '../components/comment'
function PostPage() {
  const [liked, setliked] = React.useState(false)
  return <>
    <Flex>
      <Flex w={"full"} alignItems={"center"} gap={3}>
      <Avatar src='/zuck-avatar.png' size={"md"} name='mark'/>
      <Flex >
      <Text fontSize={"sm"} fontWeight={"bold"}>markzuckerberg</Text>
      <Image src='/verified.png' w={4} h={4} ml={4}/>

      </Flex>
       
      </Flex>
      <Flex gap={4} alignItems={"center"}>
        <Text fontSize={"sm"} color={"gray.light"}>1d</Text>
        <BsThreeDots/>
      </Flex>
    </Flex>

    <Text my={3}>Let's talk about Threads.</Text>
    <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} bordercolor={"gray.light"}>
      <Image src='/post1.png' w={"full"}/>
    </Box>
    <Flex gap={3} my={3}>
    {/*  REGEL EL ACTIONS SURTOUT EL LIKES */}
      <Actions liked={liked} setliked={setliked}/>
    </Flex>
    <Flex gap={3} alignItems={"center"}>
      <Text color={"gray.light"} fontSize='sm'> 1 reply</Text>
      <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
      <Text color={"gray.light"} fontSize='sm'>
      {200 + (liked ? 1 : 0)} likes</Text>
    </Flex>
    <Divider my={4}/>
    <Flex justifyContent={"space-between"}>
    <Flex gap={2} alignItems={"center"}>
    <Text fontSize={"2x1"}>👋</Text>
    <Text color={"gray.light"}> get the app to like ,reply and post</Text>
    </Flex>
    <Button>
      Get
    </Button>
    

    </Flex>
    <Divider my={4}/>
    <Comment 
      Comment="looks really good"
      createdAt="1d"
      likes={100}
      username="john"
      avatar="https://bit.ly/code-beast"
    />
     <Comment 
      Comment="looks really good"
      createdAt="5
      d"
      likes={69}
      username="jul"
      avatar="https://bit.ly/dan-abramov"
    />
     <Comment 
      Comment="looks really good"
      createdAt="2d"
      likes={50}
      username="mike"
      avatar="https://bit.ly/prosper-baba"
    />
   

    
  </>
}

export default PostPage