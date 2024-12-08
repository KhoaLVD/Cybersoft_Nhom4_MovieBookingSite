import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/api/customerApi";

export const fetchMovieById = createAsyncThunk(
    "movies/fetchMovieById",
    async (maPhim, thunkAPI) => {
        try {
            const response = await api.get("/QuanLyPhim/LayThongTinPhim", {
                params: {
                    maPhim,
                },
            });
            return response.data.content;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
