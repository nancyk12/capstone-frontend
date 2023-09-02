import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    tagTypes: ['Post', 'User'],
    endpoints: builder => ({})
})