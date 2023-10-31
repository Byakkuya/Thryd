import { Box, Flex, VStack, Text, Link } from "@chakra-ui/layout";
import { Avatar, MenuButton, Portal, Menu, MenuList , MenuItem} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { useToast } from "@chakra-ui/react"

function UserHeader() {
    const toast = useToast();
    const copyURL = () => {
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL).then(() => {
            toast({
                title: 'Done.',
                description: "link copied to clipboard",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
        });
    }
  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2x1"} fontWeight={"bold"}>
            Mark Zuck
          </Text>
          <Flex gap={"2"} alignItems={"center"}>
            <Text fontSize={"sm"}>markzuckerberg</Text>
            <Text
              fontSize={"xs"}
              bg={"gray.dark"}
              color={"gray.light"}
              p={1}
              borderRadius={"full"}
            >
              threads.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar name="mark zuck" src="/zuck-avatar.png" size={"xl"} />
        </Box>
      </Flex>
      <Text>I'm trying to make the world a more open place.</Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={"2"} alignItems={"center"}>
          <Text fontSize={"sm"}>1.2k followers</Text>
          <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
          <Link color={"gray.light"}>instagram.com</Link>
        </Flex>
        <Flex>
          <Box className="icon-container">
            <BsInstagram size={24} cursor={"pointer"} />
          </Box>
          <Menu>
            <MenuButton>
              <Box className="icon-container">
                <CgMoreO size={24} cursor={"pointer"} />
              </Box>
              <Portal>
                <MenuList  bg={"gray.dark"}>
                  <MenuItem bg={"gray.dark"} onClick={copyURL}>Copy link</MenuItem>
                  
                </MenuList>
              </Portal>
            </MenuButton>
          </Menu>
        </Flex>
      </Flex>
      <Flex w={"full"}>
        <Flex flex={1} borderBottom={"1.5px slid white"} justifyContent={"center"} pb="3" cursor={"pointer"}>
            <Text fontWeight={"bold"}> Threads</Text>
        </Flex>
        <Flex flex={1} borderBottom={"1.px slid gray"} justifyContent={"center"} color={"gray.light"} pb="3" cursor={"pointer"}>
            <Text fontWeight={"bold"}> Replies</Text>
        </Flex>
      </Flex>

    </VStack>
  );
}

export default UserHeader;
