import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/api/customerApi";

export const fetchCustomerInfo = createAsyncThunk(
    "movies/fetchCustomerInfo",
    async (thunkAPI) => {
        try {
            const response = await api.post(
                "/QuanLyNguoiDung/ThongTinTaiKhoan"
            );
            return response.data.content;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
