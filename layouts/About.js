import React from "react";
import { Box, Text, Grid, GridItem, Image, Heading } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Box>
        <Grid templateColumns="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)">
          <GridItem
            height={["100%", "100%"]}
            bg="gray.200"
            colSpan={[2, 1]}
            rowSpan={[2, 1]}
          >
            <Box w={["280px", "400px"]} mt={["20%", "12%"]} ml={["10%", "20%"]}>
              <Image
                transform="rotate(-10deg)"
                rounded="2xl"
                shadow="lg"
                src="/images/profile.jpeg"
              />
            </Box>
          </GridItem>
          <GridItem
            height="100%"
            p={8}
            bg="red.200"
            colSpan={[2, 1]}
            rowSpan={[2, 1]}
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
              <br />A graduate of computer science from a local university in
              nigeria. Since 2020, I started learning programming myself in
              2019, and have moved to be a freelancer a year after. Am now
              looking for a full time job and also still freelancing.
              <br />
              <br />
              As a graduate, i'm focused on improving my skills and knowledge of
              frontend development and tech eco-system in a whole. And most
              importantly landing a job :)
              <br />
              <br />
              When am not typing code on my keyboard or reading some
              documentation, I enjoy playing video games, watching football
              match, or sometimes keeping up with memes. I will occasionally go
              out for a walk or go for a football training session. To know more
              about me or even hire me as a freelancer or a job, email me @
              <Text as="u" fontWeight="bold">
                abusadiqq005@gmail.com.
              </Text>
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
