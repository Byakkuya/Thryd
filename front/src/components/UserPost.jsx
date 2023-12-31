import { Avatar, Box, Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Actions from './Actions'

const UserPost = ({postImg,postTitle,likes,replies}) => {
  const [liked, setLiked] = React.useState(false)
  return (
    <Link to={"/nigga/post/id"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar size="md" name="mark nigaa" src="/zuck-avatar.png" />
          <Box w="1px" h={"full"} bg="gray.light" my={2}></Box>
          <Box position={"relative"} w={"full"} >
            <Avatar
              size="xs"
              name="john doe"
              src='https://bit.ly/dan-abramov'
              position={"absolute"}
              top={"0px"}
              left="15px"
              padding={"2px"}
            />
            <Avatar
              size="xs"
              name="john doe"
              src='https://bit.ly/kent-c-dodds'
              position={"absolute"}
              bottom={"0px"}
              right="-5px"
              padding={"2px"}
            />
            <Avatar
              size="xs"
              name="john doe"
              src='https://bit.ly/prosper-baba'
              position={"absolute"}
              bottom={"0px"}
              left="4px"
              padding={"2px"}
            />
          </Box>
        </Flex>
        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifycontent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"}>
              <Text fontSize={"sm"} fontWeight={"bold"}> markzuckerberg</Text>
              <Image src="/verified.png" w={4} h={4} ml={1}></Image>
            </Flex>
            <Flex gap={4} align={"center"}>
            <Text fontStyle={"sm"} color={"gray.light"}> 2h</Text>
            <BsThreeDots />

            </Flex>
          </Flex>
          <Text fontSize={"sm"}>{postTitle}</Text>
          {postImg &&(
          <Box borderRadius={6} overflow={"hidden"} border={"1px solid "} borderColor={"gray.light"}>
            <Image src={postImg} w={"full"} />
          </Box>
          )}
          <Flex gap={3} my={1}>
            {/* hnee el actions */}
            <Actions liked={liked} setLiked={setLiked} />
          </Flex>

          <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"} fontSize='sm'> {replies} replies</Text>
          <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
          <Text color={"gray.light"} fontSize='sm'> {likes} likes</Text>


          </Flex>
        </Flex>
      </Flex>
    </Link>

  )
}

export default UserPost