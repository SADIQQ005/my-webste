import {
  Box,
  Avatar,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Welcome() {
  return (
    <>
      <Box p="8" bg="gray.700" h="100vh" w="100%">
        <Flex justify="space-between" align="center">
          <Avatar src="/images/profile.jpeg" />
          <Text
            color="gray.100"
            textTransform="uppercase"
            letterSpacing="2px"
            borderBottom="4px solid gray"
            p="1"
            fontWeight="bold"
          >
            suleiman
          </Text>
        </Flex>

        <Flex mt={["20%", "5%"]} justify="center" align="center">
          <Heading
            p={[12, 10]}
            as="h2"
            size="4xl"
            color="gray.200"
            textTransform="uppercase"
            letterSpacing="4px"
            w="250px"
            border="4px solid gray"
            mb={6}
          >
            portfolio
          </Heading>
        </Flex>
        <Heading
          as="h2"
          textAlign="center"
          size="xl"
          color="gray.200"
          textTransform="uppercase"
          fontWeight="thin"
          letterSpacing={["2px", "4px"]}
        >
          suleiman abubakar sadeeq
        </Heading>
        <Text
          textAlign="center"
          fontFamily={["md", "lg"]}
          color="gray.200"
          fontWeight="light"
          letterSpacing="2px"
          mt={2}
        >
          Frontend Developer | Ui/Ux Designer
        </Text>
      </Box>
    </>
  );
}
