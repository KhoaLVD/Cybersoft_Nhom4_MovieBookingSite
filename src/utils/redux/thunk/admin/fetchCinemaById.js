import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/api/adminApi";

export const fetchCinemaById = createAsyncThunk(
    "movies/fetchCinemaById",
    async (maHeThongRap, thunkAPI) => {
        try {
            const response = await api.get(
                "/QuanLyRap/LayThongTinCumRapTheoHeThong",
                {
                    params: {
                        maHeThongRap,
                    },
                }
            );
            return response.data.content;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.content);
        }
    }
);
