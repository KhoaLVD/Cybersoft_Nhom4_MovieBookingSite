import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../../../utils/api/adminApi"

export const fetchDetailUser = createAsyncThunk ("detail/fetchDetailUser", async (taiKhoan, {rejectWithValue}) => {
    try{

        const result = await api.post(`/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`);
        

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

const adminDetailUserReducer = createSlice({
    name: 'adminDetailUserReducer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDetailUser.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(fetchDetailUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchDetailUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default adminDetailUserReducer.reducer;