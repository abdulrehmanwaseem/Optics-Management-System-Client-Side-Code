import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const queryStringGenerator = (url, filters) => {
  let modifiedUrl = url;
  Object.entries(filters).map(([key, value], index) => {
    if (index === 0) {
      modifiedUrl += `?${key}=${value}`;
    } else {
      modifiedUrl += `&${key}=${value}`;
    }
  });
  return modifiedUrl;
};

export const apis = createApi({
  reducerPath: "apis",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/",
  }),
  tagTypes: ["Optics"],
  keepUnusedDataFor: 0.01,
  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: (filters) => queryStringGenerator("customers", filters),
      providesTags: ["Customers"],
    }),
    createCustomers: builder.mutation({
      query: (data) => ({
        url: `customers`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Customers"],
    }),
    updateCustomers: builder.mutation({
      query: (data) => ({
        url: `customers/${data._id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Customers"],
    }),
    deleteCustomers: builder.mutation({
      query: (data) => ({
        url: `customers/${data._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Customers"],
    }),
    //
    getOwnerAccounts: builder.query({
      query: (filters) => queryStringGenerator("ownerAccounts", filters),
      providesTags: ["OwnerAccounts"],
    }),
    createOwnerAccounts: builder.mutation({
      query: (data) => ({
        url: `ownerAccounts`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["OwnerAccounts"],
    }),
    updateOwnerAccounts: builder.mutation({
      query: (data) => ({
        url: `ownerAccounts/${data._id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["OwnerAccounts"],
    }),
    deleteOwnerAccounts: builder.mutation({
      query: (data) => ({
        url: `ownerAccounts/${data._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["OwnerAccounts"],
    }),
  }),
});

export const {
  useGetCustomersQuery,
  useCreateCustomersMutation,
  useUpdateCustomersMutation,
  useDeleteCustomersMutation,
  //
  useGetOwnerAccountsQuery,
  useCreateOwnerAccountsMutation,
  useUpdateOwnerAccountsMutation,
  useDeleteOwnerAccountsMutation,
} = apis;
