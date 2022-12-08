import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import { authApi } from './authSlice';
import { transactionsApi } from './transactionsSlice';
import { persistedReducer } from './userSlice';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
    userInformation: persistedReducer,
  },
  middleware(getDefaultMiddleware) {
    return [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      authApi.middleware,
      transactionsApi.middleware,
    ];
  },
});

export const persistor = persistStore(store);
