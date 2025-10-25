import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../config/config";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userName, rejectWithValue) => {
    try {
      const res = await fetch(`${BASE_URL}?username=${userName}`);
      if (!res.ok) {
        return rejectWithValue({
          status: res.status,
          message: `Server error: ${res.statusText}`,
        });
      }
      const data = await res.json();
      return data.at(0);
    } catch (err) {
      return rejectWithValue({
        status: "NETWORK_ERROR",
        message: err.message || "Network error occurred!",
      });
    }
  }
);
