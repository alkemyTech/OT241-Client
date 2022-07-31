import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    error: '',
  },
  reducers: {
    login: (state, payload) => {
      state.isLoggedIn = true;
      state.user = payload.user;
      state.error = '';
    },
    logout: (state, payload) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = payload.error;

    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;