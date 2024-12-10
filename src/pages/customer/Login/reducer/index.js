import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "@/utils/redux/thunk/postLogin";

const initialState = {
    loading: false,
    data: {},
    error: null,
};

export const postLoginSlice = createSlice({
    name: "loginPage",
    initialState,
    reducers: {
        clear: (state) => {
            state.loading = false;
            state.data = {};
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(postLogin.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.data = { ...action.payload };
        });
        builder.addCase(postLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});
export const { clear } = postLoginSlice.actions;

export const postLoginReducer = postLoginSlice.reducer;
