import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../../../utils/api/adminApi"

export const deleteUser = createAsyncThunk("user/deleteUser", async(taiKhoan, {rejectWithValue})=>{
    try {
        const result = await api.delete(`/QuanLyNguoiDung/XoaNguoiDung`, taiKhoan);
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

const adminDeleteUserReducer = createSlice({
    name: "adminDeleteUserReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteUser.pending, (state) =>{
            state.loading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        } );
        builder.addCase(deleteUser.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default adminDeleteUserReducer.reducer;