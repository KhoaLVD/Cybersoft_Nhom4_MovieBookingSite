import { createSlice } from "@reduxjs/toolkit";
import { postRegister } from "@/utils/redux/thunk/postRegister";

const initialState = {
    loading: false,
    data: {},
    registerSuccess: false,
    error: null,
};

export const postRegisterReducer = createSlice({
    name: "registerPage",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postRegister.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postRegister.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.registerSuccess = true;
        });
        builder.addCase(postRegister.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
}).reducer;
