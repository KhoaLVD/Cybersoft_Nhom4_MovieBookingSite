import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../../../utils/api/adminApi"

export const updateMovie = createAsyncThunk("user/updateMovie", async(movie, {rejectWithValue})=>{
    try {
        const result = await api.post(`/QuanLyPhim/CapNhatPhimUpload`,movie,
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
})

const initialState = {
    loading: false,
    data: null,
    error: null
}

const adminUpdateMovieReducer = createSlice({
    name: "adminUpdateMovieReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateMovie.pending, (state) =>{
            state.loading = true;
        });
        builder.addCase(updateMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        } );
        builder.addCase(updateMovie.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default adminUpdateMovieReducer.reducer;