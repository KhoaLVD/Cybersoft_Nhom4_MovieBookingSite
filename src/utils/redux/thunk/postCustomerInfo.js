import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/api/customerApi";

export const postCustomerInfo = createAsyncThunk(
    "movies/postCustomerInfo",
    async (customerInfo, thunkAPI) => {
        try {
            const response = await api.put(
                "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
                customerInfo
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.content);
        }
    }
);
