import { configureStore } from '@reduxjs/toolkit'
import  userReducer from './user/userSlice';

export const store = configureStore({
  reducer: { user: userReducer}, /*we are yet to create a reducer*/
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false, 
  }),
});