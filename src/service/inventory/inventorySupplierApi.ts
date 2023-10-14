import { API_BASE_URL } from '../../endpoints';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface SupplierDataType {
  key: React.Key;
  supplierName: string;
  supplierDescription: string;
}
const accessToken = localStorage.getItem('accessToken');

export const inventorySupplierApi = createApi({
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
    getSuppliers: builder.query<SupplierDataType[], void>({
      query: () => 'suppliers',
      transformResponse: (response: any) => {
        const formattedData = response.results?.map((supplier: any) => ({
          supplierName: supplier.supplierName,
          supplierDescription: supplier.supplierDescription,
        }));
        console.log(' RTK query supplier  data ', formattedData);
        return formattedData;
      },
    }),
  }),
});

export const { useGetSuppliersQuery } = inventorySupplierApi;
