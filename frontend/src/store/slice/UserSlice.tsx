import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface User {
  name: string
  role: 'admin' | 'user'
}

interface UserState {
  user: User | null
}

const initialState: UserState = {
  user: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    }
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
