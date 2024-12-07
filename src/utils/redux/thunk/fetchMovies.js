import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/api/customerApi";
import { pageSize } from "@/config/customer/movie/pagination";

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async (maNhom, thunkAPI) => {
        try {
            const response = await api.get("/QuanLyPhim/LayDanhSachPhim", {
                params: {
                    maNhom,
                },
            });
            return response.data.content;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchPaginationMovie = createAsyncThunk(
    "movies/fetchPaginationMovie",
    async (params, thunkAPI) => {
        let { maNhom, soTrang, soPhanTuTrenTrang = pageSize } = params;
        try {
            const response = await api.get(
                "/QuanLyPhim/LayDanhSachPhimPhanTrang",
                {
                    params: {
                        maNhom,
                        soTrang,
                        soPhanTuTrenTrang,
                    },
                }
            );
            return response.data.content;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
