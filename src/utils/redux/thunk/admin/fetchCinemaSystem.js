import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/api/adminApi";

export const fetchCinemaSystem = createAsyncThunk(
    "movies/fetchCinemaSystem",
    async (maHeThongRap, thunkAPI) => {
        try {
            const response = await api.get("/QuanLyRap/LayThongTinHeThongRap", {
                params: {
                    maHeThongRap,
                },
            });
            return response.data.content;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.content);
        }
    }
);
