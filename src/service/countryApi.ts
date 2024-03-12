import { type ReactNode } from 'react';
import { API_BASE_URL } from '../endpoints';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface CountryDataType {
  children: ReactNode;
  key: React.Key;
  id: number;
  countryName: string;
  countryDescription: string;
  response: any;
}
const accessToken = localStorage.getItem('accessToken');
export const countryApi = createApi({
  reducerPath: 'countryAPi',
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
    getCountry: builder.query<CountryDataType[], void>({
      query: () => 'countries',
      transformResponse: (response: CountryDataType) => {
        const formattedData = response.response?.map(
          (country: CountryDataType) => ({
            id: country.id,
            countryName: country.countryName,
            countryDescription: country.countryDescription,
          })
        );

        return formattedData;
      },
    }),
  }),
});

export const { useGetCountryQuery } = countryApi;
