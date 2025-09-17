
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/UserSlice'

export const store = configureStore({
  reducer: {
    auth: userReducer
  }
})

// Type of the entire redux state
// export type RootState = ReturnType<typeof store.getState>;

export type RootState = ReturnType<typeof store.getState>

export default store
