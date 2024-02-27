import { API_BASE_URL } from '../endpoints';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface DataType {
  key: React.Key;
  itemName: string;
  itemDescription: string;
}
const accessToken = localStorage.getItem('accessToken');

export const itemsApi = createApi({
  reducerPath: 'itemsApi',
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
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getItems: builder.query<DataType[], void>({
      query: () => 'inventory-item-setup',
      transformResponse: (response: any) => {
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
        url: 'inventory-item-setup',
        method: 'POST',
        body: newItem,
      }),
    }),
  }),
});

export const { useGetItemsQuery, useCreateItemMutation } = itemsApi;
