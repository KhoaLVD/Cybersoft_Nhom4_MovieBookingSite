import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/api/customerApi";

export const fetchMovieShowTimes = createAsyncThunk(
    "movies/fetchMovieShowTimes",
    async (maPhim, thunkAPI) => {
        try {
            const response = await api.get(
                "/QuanLyRap/LayThongTinLichChieuPhim",
                {
                    params: {
                        maPhim,
                    },
                }
            );
            return response.data.content;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
