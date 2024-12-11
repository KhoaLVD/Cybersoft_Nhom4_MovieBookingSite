import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../../../utils/api/adminApi"

export const addMovie = createAsyncThunk("movie/addMovie", async(movie, {rejectWithValue})=>{
    try {
        const result = await api.post(`/QuanLyPhim/ThemPhimUploadHinh`, movie);
        return result.data.content;
    } catch (e) {
        return rejectWithValue(e.response);
    }
})

const initialState = {
    loading: false,
    data: null,
    error: null
}

const adminAddMovieReducer = createSlice({
    name: "adminAddMovieReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addMovie.pending, (state) =>{
            state.loading = true;
        });
        builder.addCase(addMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        } );
        builder.addCase(addMovie.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default adminAddMovieReducer.reducer;