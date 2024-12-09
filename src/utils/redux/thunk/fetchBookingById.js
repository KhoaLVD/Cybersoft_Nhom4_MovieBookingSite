import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/api/customerApi";

export const fetchBookingById = createAsyncThunk(
    "movies/fetchBookingById",
    async (MaLichChieu, thunkAPI) => {
        try {
            const response = await api.get("/QuanLyDatVe/LayDanhSachPhongVe", {
                params: {
                    MaLichChieu,
                },
            });
            return response.data.content;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
