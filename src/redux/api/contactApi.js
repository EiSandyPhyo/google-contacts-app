import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
    reducerPath: "contactApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com'}),
    tagTypes: ["contact"],
    endpoints:  (builder) => ({
        getContact: builder.query({
            query: () => ({
                url: `/users`,
                // headers: {authorization : `Bearer ${token}`}
                
            }),
            providesTags:["contact"],
        })
    }),
})

export const { useGetContactQuery } = contactApi