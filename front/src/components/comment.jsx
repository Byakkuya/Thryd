import { Flex, Avatar, Text, Divider } from '@chakra-ui/react';
import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import Actions from './Actions';
function comment({comment,createdAt,likes,username,avatar}) {
    const [liked, setLiked] = useState(false);

    return (
        <>
            <Flex gap={4} py={2} my={2} w={"full"}>
                <Avatar src={avatar} size={"sm"} />
                <Flex gap={1} w={"full"} flexDirection={"column"}>
                    <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
                        <Text fontSize="sm" fontWeight="bold" > {username}</Text>
                        <Flex gap={2} alignItems={"center"}>
                            <Text fontSize={"sm"} color={"gray.light"}>{createdAt}</Text>
                            <BsThreeDots />
                        </Flex>
                    </Flex>
                    <Text>Hey this looks great!</Text>
                    <Actions liked={liked} setLiked={setLiked} />
                    <Text fontSize={"sm"} color={"gray.light"}>
                        {220 + (liked ? 1 : 0)} {likes}
                    </Text>
                </Flex>
            </Flex>
            <Divider my={4} />

        </>
    )
}

export default comment