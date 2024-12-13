import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../../../utils/api/adminApi"

export const fetchDetailMovie = createAsyncThunk ("detail/fetchDetailMovie", async (movie, {rejectWithValue}) => {
    try{

        const result = await api.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${movie}`);
        

        return result.data.content;
    }
    catch (error){
        return rejectWithValue(error);
    }
})

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const adminDetailMovieReducer = createSlice({
    name: 'adminDetailMovieReducer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDetailMovie.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(fetchDetailMovie.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchDetailMovie.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default adminDetailMovieReducer.reducer;