import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userThunk";

const initialState = {
    userDetails: null,
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchUser.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.userDetails = action.payload;
          })
          .addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || "Something went wrong!";
          });
    }
})

export default userSlice.reducer;