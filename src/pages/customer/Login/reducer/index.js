import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "@/utils/redux/thunk/postLogin";

const initialState = {
    loading: false,
    data: {},
    loginSuccess: false,
    error: null,
};

export const postLoginReducer = createSlice({
    name: "loginPage",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postLogin.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.loginSuccess = true;
        });
        builder.addCase(postLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
}).reducer;
