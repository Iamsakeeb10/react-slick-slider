import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts", async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const response = await axios(url);
  const data = await response.data;
  return data;
});

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default postSlice.reducer;
