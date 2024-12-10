import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/api/customerApi";

export const postLogin = createAsyncThunk(
    "movies/postLogin",
    async (ndDN, thunkAPI) => {
        try {
            const response = await api.post("/QuanLyNguoiDung/DangNhap", {
                ...ndDN,
            });
            return response.data.content;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
