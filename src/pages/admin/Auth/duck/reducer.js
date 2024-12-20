import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../../utils/api/adminApi";

export const actLogin = createAsyncThunk(
    "auth/login",
    async (user, { rejectWithValue }) => {
        try {
            const result = await api.post(`/QuanLyNguoiDung/DangNhap`, user);

            const userInfo = result.data.content;

            if (userInfo.maLoaiNguoiDung !== "QuanTri") {
                return rejectWithValue({
                    data: {
                        content: "Bạn không có quyền truy cập trang này",
                    },
                });
            }

            localStorage.setItem("USER_ADMIN", JSON.stringify(userInfo));
            return userInfo;
        } catch (e) {
            return rejectWithValue(e.response);
        }
    }
);

const userInfo = localStorage.getItem("USER_ADMIN")
    ? JSON.parse(localStorage.getItem("USER_ADMIN"))
    : null;

const initialState = {
    loading: false,
    data: userInfo,
    error: null,
};

const adminLoginReducer = createSlice({
    name: "adminLoginReducer",
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
            localStorage.removeItem("USER_ADMIN");
        },
    },
    extraReducers: (builder) => {
        builder.addCase(actLogin.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(actLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(actLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { logout } = adminLoginReducer.actions;

export default adminLoginReducer.reducer;
