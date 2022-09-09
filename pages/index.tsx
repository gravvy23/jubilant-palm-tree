import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useGetIpAddressDataByNameQuery } from "../services/ipAdresses";

const Home: NextPage = () => {
  const { data } = useGetIpAddressDataByNameQuery("94.254.172.127");

  console.log(data);
  return (
    <Box>
      <Head>
        <title>Get Your IP Address Location</title>
        <meta name="description" content="Sofomo Frontend task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex as="main" h="100vh" p="4">
        <Box border="1px" m="2" minW="60">
          list
        </Box>
        <Flex flexDir="column" w="full" h="full">
          <Flex flex="1">
            <Box flex="3" border="1px" m="2">
              current user map
            </Box>
            <Box flex="2" border="1px" m="2">
              current user info
            </Box>
          </Flex>
          <Flex m="2">
            <Input size="lg" />
            <Button variant="solid" colorScheme="blue" size="lg">
              Search
            </Button>
          </Flex>
          <Flex flex="1">
            <Box flex="3" border="1px" m="2">
              last user map
            </Box>
            <Box flex="2" border="1px" m="2">
              last user info
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        as="footer"
        justify="center"
        pt="4"
        borderTop="1px"
        borderColor="gray.200"
        p="4"
      >
        <a
          href="https://github.com/gravvy23"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Wojciech Majkut
        </a>
      </Flex>
    </Box>
  );
};

export default Home;
