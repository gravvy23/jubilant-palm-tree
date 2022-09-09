import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import {
  useGetCurrentIPAddressQuery,
  useLazyGetIpAddressDataByNameQuery,
} from "../services/ipAdresses";
import { LocationInfo, Map, SearchInput, IPAddressList } from "../components";
import type { Location } from "../components/IPAddressList";

const Home: NextPage = () => {
  const [locations, setLocations] = useState<Location[]>([
    { key: "1", value: "www.google.pl" },
    { key: "2", value: "test.com" },
  ]);
  const { data: currentUser, isLoading: isCurrentUserIPLoading } =
    useGetCurrentIPAddressQuery();
  const [getAddressDataByName, { data: searchResult, isFetching }] =
    useLazyGetIpAddressDataByNameQuery();

  return (
    <Box>
      <Head>
        <title>Get Your IP Address Location</title>
        <meta name="description" content="Sofomo Frontend task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex as="main" h="100vh" p="4">
        <IPAddressList locations={locations} />
        <Flex flexDir="column" w="full" h="full">
          <Flex flex="1" maxH="45%">
            <Map
              isLoading={isCurrentUserIPLoading}
              longitude={currentUser?.longitude}
              latitude={currentUser?.latitude}
            />
            <LocationInfo
              isLoading={isCurrentUserIPLoading}
              data={currentUser}
            />
          </Flex>
          <SearchInput isLoading={isFetching} onSearch={getAddressDataByName} />
          <Flex flex="1" maxH="45%">
            <Map
              isLoading={isFetching}
              longitude={searchResult?.longitude}
              latitude={searchResult?.latitude}
            />
            <LocationInfo isLoading={isFetching} data={searchResult} />
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
