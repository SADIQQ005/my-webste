import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Stack,
  IconButton,
  Tabs,
  Text,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Image,
  Stat,
  StatNumber,
  StatLabel,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import { AttachmentIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { Ui, web } from "../photos/Photos";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div>
      <Box p={6} h="100%">
        <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(5, 1fr)">
          <GridItem colSpan={["3", "1"]} rowSpan={["5", "2"]}>
            <Stack>
              <Box
                py={6}
                px={4}
                w={["100%", "70%"]}
                shadow="md"
                rounded="lg"
                textTransform="capitalize"
                fontWeight="semibold"
                fontSize="lg"
              >
                <IconButton
                  icon={<AttachmentIcon />}
                  colorScheme="teal"
                  isRound
                />{" "}
                website design
              </Box>
              <Box
                py={6}
                px={4}
                w={["100%", "70%"]}
                shadow="md"
                rounded="lg"
                textTransform="capitalize"
                fontWeight="semibold"
                fontSize="lg"
              >
                <IconButton icon={<EditIcon />} colorScheme="yellow" isRound />{" "}
                Website programming
              </Box>
              <Box
                py={6}
                px={4}
                w={["100%", "70%"]}
                shadow="md"
                rounded="lg"
                textTransform="capitalize"
                fontWeight="semibold"
                fontSize="lg"
              >
                <IconButton
                  icon={<CalendarIcon />}
                  colorScheme="orange"
                  isRound
                />{" "}
                Branding
              </Box>
            </Stack>
          </GridItem>
          <GridItem colSpan={["3", "2"]} rowSpan={["5", "3"]}>
            <Tabs mt={4} variant="soft-rounded" colorScheme="green">
              <TabList>
                <Tab>Ui|Ux Designs</Tab>
                <Tab>Sites|Apps</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Grid templateColumns="repeat(3, 1fr)" gap="10px">
                    {Ui &&
                      Ui.map((picture) => {
                        return (
                          <GridItem>
                            <Link href="https://www.pinterest.com/abusadiqq005/phone-wallpaper/">
                              <Image
                                objectFit="contain"
                                boxSize="150px"
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
                    {web &&
                      web.map((picture) => {
                        return (
                          <GridItem>
                            <Link href={picture.link}>
                              <Image
                                objectFit="contain"
                                boxSize="150px"
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
          <GridItem mt={[0, 20]} colSpan="3" rowSpan="5">
            <Text
              textTransform="capitalize"
              fontSize="2xl"
              fontWeight="bold"
              letterSpacing="2px"
              color="gray.700"
            >
              Experience
            </Text>
            <Box
              shadow="lg"
              p={6}
              rounded="xl"
              display="flex"
              justifyContent="space-around"
            >
              <Box>
                <Stat>
                  <StatLabel>Learning</StatLabel>
                  <StatNumber>Freelancer</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Sep 2020 - Jun 2021
                  </StatHelpText>
                </Stat>
              </Box>
              <Box>
                <Stat>
                  <StatLabel>Intermediate</StatLabel>
                  <StatNumber>Self-Employed</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Jun 2021 - To Date
                  </StatHelpText>
                </Stat>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
}
