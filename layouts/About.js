import React from "react";
import { Box, Text, Grid, GridItem, Image, Heading } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Box>
        <Grid templateColumns="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)">
          <GridItem p={6} colSpan={[2, 2, 2, 1]} rowSpan={[2, 2, 2, 1]}>
            <Box>
              <Image
                h="600px"
                w="100%"
                objectFit="contain"
                src="/images/profile.jpeg"
              />
            </Box>
          </GridItem>
          <GridItem
            height="100%"
            p={8}
            bg="red.200"
            colSpan={[2, 2, 2, 1]}
            rowSpan={[2, 2, 2, 1]}
          >
            <Heading
              letterSpacing="2px"
              color="gray.700"
              as="h2"
              textTransform="capitalize"
            >
              about me
            </Heading>
            <Text
              fontSize={["xl", "4xl"]}
              letterSpacing="2"
              textTransform="uppercase"
              fontWeight="light"
            >
              hi i,m suleiman abubakar sadeeq
            </Text>
            <Text textAlign="start" letterSpacing="2px" fontSize="md">
              <br />A graduate of B.sc computer science, I started learning
              programming myself in 2019, and have moved to create easy to use
              but elegant looking websites as a freelancer. I have always had a
              passion for programming. I can't wait to put all my passion to
              create awesome web apps for companies full time.
              <br />
              <br />
              As a developer, i'm focus on improving my skills and knowledge of
              programming and tech by actively learning. And most importantly
              landing a job :)
              <br />
              <br />
              When am not writing code or reading some documentation. I enjoy
              playing video games, watching football match, or sometimes being
              on social media. I will occasionally go out for a walk or go for a
              football training session. To know more about me or even hire me
              as a freelancer or for a job. Email me @
              <Text as="u" fontWeight="bold">
                abusadiqq005@gmail.com.
              </Text>{" "}
              or find my contact below. Thank you.
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
