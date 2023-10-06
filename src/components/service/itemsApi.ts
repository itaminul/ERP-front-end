// itemsApi.ts
import { API_BASE_URL } from '@/endpoints';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface DataType {
  key: React.Key;
  itemName: string;
  itemDescription: string;
}
// const baseUrl = `${process.env.REACT_APP_API_ENDPOINT}`;
const accessToken = localStorage.getItem('accessToken'); // Replace with token retrieval logic
export const itemsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      if (accessToken != null) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }), // Base URL of  NestJS API
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getItems: builder.query<DataType[], void>({
      query: () => 'items', // Replace 'items' with actual endpoint
      transformResponse: (response: any) => {
        // Format the response data here
        const formattedData = response.results?.map((item: any) => ({
          id: item.id,
          itemName: item.itemName,
          itemDescription: item.itemDescription,
        }));
        return formattedData;
      },
    }),

    createItem: builder.mutation<DataType, Partial<DataType>>({
      query: (newItem) => ({
        url: 'items',
        method: 'POST',
        body: newItem,
      }),
    }),
  }),
});

export const { useGetItemsQuery, useCreateItemMutation } = itemsApi;
