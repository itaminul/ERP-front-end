import { API_BASE_URL } from '../../endpoints';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const accessToken = localStorage.getItem('accessToken');
export const itemSupplierApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      if (accessToken != null) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getInventorySupplier: builder.query({
      query: () => 'suppliers',
    }),
  }),
});

export const { useGetInventorySupplierQuery } = itemSupplierApi;
