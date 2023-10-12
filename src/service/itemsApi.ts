import { API_BASE_URL } from '../endpoints';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface DataType {
  key: React.Key;
  itemName: string;
  itemDescription: string;
}
// const baseUrl = `${process.env.REACT_APP_API_ENDPOINT}`;
const accessToken = localStorage.getItem('accessToken'); // Replace with token retrieval logic
console.log('accessToken', accessToken);
export const itemsApi = createApi({
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
    getItems: builder.query({
      query: () => 'inventory-item-setup',
      transformResponse: (response: any) => {
        // Format the response data here
        const formattedData = response.results?.map((item: any) => ({
          id: item.id,
          itemName: item.itemName,
          itemDescription: item.itemDescription,
        }));
        console.log(' formattedData ', formattedData);
        return formattedData;
      },
    }),

    createItem: builder.mutation<DataType, Partial<DataType>>({
      query: (newItem) => ({
        url: 'inventory-item-setup',
        method: 'POST',
        body: newItem,
      }),
    }),
  }),
});

export const { useGetItemsQuery, useCreateItemMutation } = itemsApi;
