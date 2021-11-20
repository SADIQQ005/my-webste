import React from "react";
import {
  Box,
  Center,
  Text,
  Grid,
  GridItem,
  Button,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

export default function Contact() {
  return (
    <>
      <Box bg="gray.100" h="100%" pt={[4, 10]} px={[4, 10]}>
        <Grid templateColumns="repeat(5, 1fr)" templateRows="repeat(3, 1fr)">
          <GridItem colSpan="4" rowSpan="2">
            <Text
              fontWeight="bolder"
              fontSize={["2xl", "4xl"]}
              color="gray.800"
              mb={[12, 6]}
            >
              Let's make amazing <br />
              things together.
            </Text>
            <Spacer />
          </GridItem>
          <GridItem colSpan="1" rowSpan="2">
            <Text
              fontWeight="bolder"
              fontSize={["2xl", "4xl"]}
              color="gray.800"
            >
              contact
            </Text>
            <Text fontWeight="light" my={2}>Keffi, 961101, Nigeria</Text>
            <Text fontWeight="semibold" my={2}>abusadiqq005@gmail.com</Text>
            <Text fontWeight="semibold" my={2}>+234 7035426079</Text>
            <Text fontWeight="semibold" my={2}>l00ner@ instagram</Text>
            <Text fontWeight="semibold" mt={2} mb={4}>
              shadik@ twitter
            </Text>
          </GridItem>
          <GridItem colSpan="5" rowSpan="1">
            <Box
              display="flex"
              justifyContent="space-between"
              borderTop="2px solid gray"
              pt={4}
            >
              <Text
                as="em"
                fontWeight="semibold"
                fontFamily="sans"
                textTransform="uppercase"
                fontSize={["xs", "md"]}
              >
                Portfolio
              </Text>
              <Text textTransform="capitalize" fontSize={["xs", "md"]}>
                2021 all rights reserved
              </Text>
              <Text textTransform="capitalize" fontSize={["xs", "md"]}>
                developed by Suleiman
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
