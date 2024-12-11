import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../../../utils/api/adminApi"

export const deleteMovie = createAsyncThunk("movie/deleteMovie", async(movie, {rejectWithValue})=>{
    try {
    const response = await api.delete(`/QuanLyPhim/XoaPhim?MaPhim=${movie}`);
    return response.data;
    } catch (e) {
        return rejectWithValue(e.response);
    }
})

const initialState = {
    loading: false,
    data: null,
    error: null
}

const adminDeleteMovieReducer = createSlice({
    name: "adminDeleteMovieReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteMovie.pending, (state) =>{
            state.loading = true;
        });
        builder.addCase(deleteMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        } );
        builder.addCase(deleteMovie.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default adminDeleteMovieReducer.reducer;