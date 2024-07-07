import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers/axiosInstance";

export const authenticateUser = createAsyncThunk(
  "user/authenticateUser",
  async ({ formValues, isLogin }, { rejectWithValue }) => {
    try {
      const endpoint = isLogin ? "/login" : "/registr";
      const { data } = await axiosInstance.post(endpoint, formValues);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    userData: null,
    Error: null,
  },
  extraReducers: (builder) => {
    builder.assCase(authenticateUser.pending, (state) => {
      state.loading = true;
    });
    builder.assCase(authenticateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.userData = action.payload.user;
    });
    builder.assCase(authenticateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
