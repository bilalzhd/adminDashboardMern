import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: ["User", "Products", "Customers", "Transactions", "Geography", "Sales", "Admins", "Performance", "Dashboard"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
        }),
        getProducts: build.query({
            query: () => "https://admin-backend-vnjm.onrender.com/client/products",
            providesTags: ["Products"],
        }),
        getCustomers: build.query({
            query: () => "https://admin-backend-vnjm.onrender.com/client/customers",
            providesTags: ["Customers"],
        }),
        getTransactions: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: "client/transactions",
                method: "GET",
                params: { page, pageSize, sort, search }
            }),
            providesTags: ["Transactions"],
        }),
        getGeography: build.query({
            query: () => "https://admin-backend-vnjm.onrender.com/client/geography",
            providesTags: ["Geography"],
        }),
        getSales: build.query({
            query: () => "https://admin-backend-vnjm.onrender.com/sales/sales",
            providesTags: ["Sales"],
        }),
        getAdmins: build.query({
            query: () => "https://admin-backend-vnjm.onrender.com/management/admins",
            providesTags: ["Admins"],
        }),
        getUserPerformance: build.query({
            query: id => `management/performance/${id}`,
            providesTags: ["Performance"],
        }),
        getDashboardStats: build.query({
            query: () => `https://admin-backend-vnjm.onrender.com/general/dashboard`,
            providesTags: ["Dashboard"],
        }),

    })
})

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery, useGetTransactionsQuery, useGetGeographyQuery, useGetSalesQuery, useGetAdminsQuery, useGetUserPerformanceQuery, useGetDashboardStatsQuery } = api; 
