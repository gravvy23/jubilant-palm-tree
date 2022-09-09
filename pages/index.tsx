import { useCallback } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import {
  useGetCurrentIPAddressQuery,
  useLazyGetIpAddressDataByNameQuery,
} from "../services/ipAdresses";
import { LocationInfo, Map, SearchInput, IPAddressList } from "../components";
import { useAppSelector, useAppDispatch } from "../hooks";
import { add } from "../features/location/locationSlice";

const Home: NextPage = () => {
  const locations = useAppSelector((state) => state.location.locations);
  const dispatch = useAppDispatch();
  const { data: currentUser, isLoading: isCurrentUserIPLoading } =
    useGetCurrentIPAddressQuery();
  const [getAddressDataByName, { data: searchResult, isFetching }] =
    useLazyGetIpAddressDataByNameQuery();

  const handleSearchLocation = useCallback(
    async (location: string) => {
      await getAddressDataByName(location);
      dispatch(add({ value: location, key: uuidv4() }));
    },
    [dispatch, getAddressDataByName]
  );

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
          <SearchInput isLoading={isFetching} onSearch={handleSearchLocation} />
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
