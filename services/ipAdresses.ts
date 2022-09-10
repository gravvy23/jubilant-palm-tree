// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ErrorResponse, IPAdressData } from "./types";

const ACCESS_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const ipAdressesApi = createApi({
  reducerPath: "ipAdressesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.ipstack.com/" }),
  endpoints: (builder) => ({
    getIpAddressDataByName: builder.query<IPAdressData | ErrorResponse, string>(
      {
        query: (name) => `${name}?access_key=${ACCESS_KEY}`,
      }
    ),
    getCurrentIPAddress: builder.query<IPAdressData, void>({
      query: () => `check?access_key=${ACCESS_KEY}`,
    }),
  }),
});

export const {
  useGetIpAddressDataByNameQuery,
  useLazyGetIpAddressDataByNameQuery,
  useGetCurrentIPAddressQuery,
  useLazyGetCurrentIPAddressQuery,
} = ipAdressesApi;
