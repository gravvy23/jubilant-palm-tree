// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IPAdressData } from "./types";

const ACCESS_KEY = "5bb173a6e58f594ef432c62f77f4f521";

export const ipAdressesApi = createApi({
  reducerPath: "ipAdressesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://api.ipstack.com/" }),
  endpoints: (builder) => ({
    getIpAddressDataByName: builder.query<IPAdressData, string>({
      query: (name) => `${name}?access_key=${ACCESS_KEY}`,
    }),
  }),
});

export const { useGetIpAddressDataByNameQuery } = ipAdressesApi;