import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = "http://127.0.0.1:8080";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(
        `${apiUrl}/api/user/register`,
        { username, email, password },
        config
      );
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
