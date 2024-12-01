import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../../../utils/api/adminApi"

export const fetchListUsers = createAsyncThunk("listUsers/fetchListUsers", async  ()=>{
    try {
        const result = await api.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03`);
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

const listUserReducer = createSlice({
    name: "listUserReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchListUsers.pending, (state) =>{
            state.loading = true;
        });
        builder.addCase(fetchListUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        } );
        builder.addCase(fetchListUsers.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        });
    }

})

export default listUserReducer.reducer;