import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../../utils/api/adminApi";

export const addMovie = createAsyncThunk(
    "movie/addMovie",
    async (movie, { rejectWithValue }) => {
        try {
            const result = await api.post(
                `/QuanLyPhim/ThemPhimUploadHinh`,
                movie,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            return result.data.content;
        } catch (e) {
            return rejectWithValue(e.response);
        }
    }
);

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const adminAddMovieReducer = createSlice({
    name: "adminAddMovieReducer",
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.data = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addMovie.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(addMovie.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { reset } = adminAddMovieReducer.actions;

export default adminAddMovieReducer.reducer;
