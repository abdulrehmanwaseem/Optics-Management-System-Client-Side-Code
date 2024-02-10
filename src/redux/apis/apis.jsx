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
    // Customer Api:
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
    // Owner Account Api:
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
    // Accounts Api:
    getAccounts: builder.query({
      query: (filters) => queryStringGenerator("accounts", filters),
      providesTags: ["Accounts"],
    }),
    createAccounts: builder.mutation({
      query: (data) => ({
        url: `accounts`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Accounts"],
    }),
    updateAccounts: builder.mutation({
      query: (data) => ({
        url: `accounts/${data._id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Accounts"],
    }),
    deleteAccounts: builder.mutation({
      query: (data) => ({
        url: `accounts/${data._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Accounts"],
    }),
    // Companies Api:
    getCompanies: builder.query({
      query: (filters) => queryStringGenerator("companies", filters),
      providesTags: ["Companies"],
    }),
    createCompanies: builder.mutation({
      query: (data) => ({
        url: `companies`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Companies"],
    }),
    updateCompanies: builder.mutation({
      query: (data) => ({
        url: `companies/${data._id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Companies"],
    }),
    deleteCompanies: builder.mutation({
      query: (data) => ({
        url: `companies/${data._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Companies"],
    }),
    // Expenses Api:
    getExpenses: builder.query({
      query: (filters) => queryStringGenerator("expenses", filters),
      providesTags: ["Expenses"],
    }),
    createExpenses: builder.mutation({
      query: (data) => ({
        url: `expenses`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Expenses"],
    }),
    updateExpenses: builder.mutation({
      query: (data) => ({
        url: `expenses/${data._id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Expenses"],
    }),
    deleteExpenses: builder.mutation({
      query: (data) => ({
        url: `expenses/${data._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Expenses"],
    }),
    // Items Api:
    getItems: builder.query({
      query: (filters) => queryStringGenerator("items", filters),
      providesTags: ["Items"],
    }),
    createItems: builder.mutation({
      query: (data) => ({
        url: `items`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Items"],
    }),
    updateItems: builder.mutation({
      query: (data) => ({
        url: `items/${data._id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Items"],
    }),
    deleteItems: builder.mutation({
      query: (data) => ({
        url: `items/${data._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Items"],
    }),
    // Venders Api:
    getVenders: builder.query({
      query: (filters) => queryStringGenerator("venders", filters),
      providesTags: ["Venders"],
    }),
    createVenders: builder.mutation({
      query: (data) => ({
        url: `venders`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Venders"],
    }),
    updateVenders: builder.mutation({
      query: (data) => ({
        url: `venders/${data._id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Venders"],
    }),
    deleteVenders: builder.mutation({
      query: (data) => ({
        url: `venders/${data._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Venders"],
    }),
  }),
});

export const {
  // Customer Api:
  useGetCustomersQuery,
  useCreateCustomersMutation,
  useUpdateCustomersMutation,
  useDeleteCustomersMutation,
  // Owner Account Api:
  useGetOwnerAccountsQuery,
  useCreateOwnerAccountsMutation,
  useUpdateOwnerAccountsMutation,
  useDeleteOwnerAccountsMutation,
  // Accounts Api:
  useGetAccountsQuery,
  useCreateAccountsMutation,
  useUpdateAccountsMutation,
  useDeleteAccountsMutation,
  // Companies Api:
  useGetCompaniesQuery,
  useCreateCompaniesMutation,
  useUpdateCompaniesMutation,
  useDeleteCompaniesMutation,
  // Expenses Api:
  useGetExpensesQuery,
  useCreateExpensesMutation,
  useUpdateExpensesMutation,
  useDeleteExpensesMutation,
  // Items Api:
  useGetItemsQuery,
  useCreateItemsMutation,
  useUpdateItemsMutation,
  useDeleteItemsMutation,
  // Venders Api:
  useGetVendersQuery,
  useCreateVendersMutation,
  useUpdateVendersMutation,
  useDeleteVendersMutation,
} = apis;
