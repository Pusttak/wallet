import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://walletbackendteamproject-production.up.railway.app/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().userInformation.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    signUpUser: builder.mutation({
      query: registerInform => ({
        url: `/api/auth/signup`,
        method: 'POST',
        body: registerInform,
      }),
    }),
    login: builder.mutation({
      query: userInformation => {
        return {
          url: `/api/auth/login`,
          method: 'POST',
          body: userInformation,
        };
      },
    }),
    logOut: builder.mutation({
      query: () => ({
        url: `/api/auth/logout`,
        method: 'GET',
      }),
    }),
    getUserInformation: builder.query({
      query: () => `/api/auth/current`,
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useLoginMutation,
  useLogOutMutation,
  useGetUserInformationQuery,
} = authApi;
