import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../../../utils/api/adminApi"

export const fetchListMovies = createAsyncThunk("listUsers/fetchListUsers", async  ()=>{
    try {
        const result = await api.get(`QuanLyPhim/LayDanhSachPhim?MaNhom=GP03`);
        return result.data.content;
    } catch (e) {
        return (e);
    }   
})

const initialState = {
    loading: false,
    data: null,
    error: null
}

const adminListMovieReducer = createSlice({
    name: "adminListMovieReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchListMovies.pending, (state) =>{
            state.loading = true;
        });
        builder.addCase(fetchListMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        } );
        builder.addCase(fetchListMovies.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        });
    }

})

export default adminListMovieReducer.reducer;