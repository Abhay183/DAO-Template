import { configureStore } from '@reduxjs/toolkit';
import daoReducer from './daoSlice';

export const store = configureStore({
  reducer: {
    dao: daoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});