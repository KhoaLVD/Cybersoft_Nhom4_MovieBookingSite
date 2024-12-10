import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/api/customerApi";

export const postRegister = createAsyncThunk(
    "movies/postRegister",
    async (nd, thunkAPI) => {
        try {
            const response = await api.post("/QuanLyNguoiDung/DangKy", {
                ...nd,
            });
            console.log(response);
            return response.data.content;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.content);
        }
    }
);
