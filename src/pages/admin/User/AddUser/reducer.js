import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../../../utils/api/adminApi"

export const addUser = createAsyncThunk("user/addUser", async(user, {rejectWithValue})=>{
    try {
        const result = await api.post(`/QuanLyNguoiDung/ThemNguoiDung`, user);
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

const addUserReducer = createSlice({
    name: "addUserReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addUser.pending, (state) =>{
            state.loading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        } );
        builder.addCase(addUser.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default addUserReducer.reducer;