import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../../../utils/api/adminApi"
import { fetchListUsers } from "../ListUser/reducer";

export const deleteUser = createAsyncThunk("user/deleteUser", async(taiKhoan, {rejectWithValue})=>{
    try {
    const response = await api.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
    fetchListUsers();
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