import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../../../utils/api/adminApi"

export const updateUser = createAsyncThunk("user/updateUser", async(user, {rejectWithValue})=>{
    try {
        const result = await api.post(`/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,user);
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

const adminUpdateUserReducer = createSlice({
    name: "adminUpdateUserReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateUser.pending, (state) =>{
            state.loading = true;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        } );
        builder.addCase(updateUser.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default adminUpdateUserReducer.reducer;