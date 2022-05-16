import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Tabs,
  Text,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import { Ui, web } from "../photos/Photos";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div>
      <Box p={10}>
        <Text fontWeight="bold" textTransform="capitalize" fontSize="30px">
          projects
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(5, 1fr)">
          <GridItem colSpan={["3", "3"]} rowSpan={["5", "5"]}>
            <Tabs mt={4} variant="soft-rounded" colorScheme="green">
              <TabList>
                <Tab>Apps|Sites</Tab>
                <Tab>Ui Designs</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Grid templateColumns="repeat(3, 1fr)" gap="10px">
                    {web &&
                      web.map((picture) => {
                        return (
                          <GridItem>
                            <Link href={picture.link}>
                              <Image
                                objectFit="contain"
                                boxSize="300px"
                                shadow="md"
                                w="100%"
                                rounded="md"
                                cursor="pointer"
                                src={picture.url}
                              />
                            </Link>
                          </GridItem>
                        );
                      })}
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <Grid templateColumns="repeat(3, 1fr)" gap="10px">
                    {Ui &&
                      Ui.map((picture) => {
                        return (
                          <GridItem>
                            <Link href="https://www.pinterest.com/abusadiqq005/phone-wallpaper/">
                              <Image
                                objectFit="contain"
                                boxSize="300px"
                                shadow="md"
                                w="100%"
                                rounded="md"
                                cursor="pointer"
                                src={picture.url}
                              />
                            </Link>
                          </GridItem>
                        );
                      })}
                  </Grid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
}
