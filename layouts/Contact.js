import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Spacer,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <>
      <Box bg="gray.100" h="100%" pt={[4, 10]} px={[4, 10]}>
        <Grid templateColumns="repeat(5, 1fr)" templateRows="repeat(3, 1fr)">
          <GridItem colSpan="5" rowSpan="3">
            <Text
              fontWeight="bolder"
              fontSize={["2xl", "4xl"]}
              color="gray.800"
              mb={6}
            >
              Let's make amazing <br />
              things together.
            </Text>
            <Spacer />
          </GridItem>
          <GridItem colSpan="5" rowSpan="3">
            <Text
              fontWeight="bolder"
              fontSize={["2xl", "4xl"]}
              color="gray.800"
              textTransform="capitalize"
            >
              contacts
            </Text>
            <Text fontWeight="light" my={2}>
              <strong>Address:</strong> Keffi, 961101, Nigeria
            </Text>
            <Text fontWeight="semibold" my={2}>
              <strong>Email:</strong> abusadiqq005@gmail.com
            </Text>
            <Text fontWeight="semibold" my={2}>
              <strong>Phone:</strong> +234 7035426079
            </Text>
            <Text fontWeight="semibold" my={2}>
              <strong>Instagram:</strong> suleiman abubakar sadeeq
            </Text>
            <Text fontWeight="semibold" mt={2} mb={4}>
              <strong>Twitter:</strong> shadik
            </Text>
          </GridItem>
          <GridItem colSpan="5" rowSpan="3">
            <Box
              display="flex"
              justifyContent="space-between"
              borderTop="2px solid gray"
              py={4}
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
