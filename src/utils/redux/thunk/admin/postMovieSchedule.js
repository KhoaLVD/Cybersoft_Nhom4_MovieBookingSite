import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/api/adminApi";

export const postMovieSchedule = createAsyncThunk(
    "movies/postMovieSchedule",
    async (data, thunkAPI) => {
        try {
            const response = await api.post("/QuanLyDatVe/TaoLichChieu", {
                ...data,
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.content);
        }
    }
);
