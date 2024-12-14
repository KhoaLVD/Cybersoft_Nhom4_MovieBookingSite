import { createSlice } from "@reduxjs/toolkit";
import { fetchCustomerInfo } from "@/utils/redux/thunk/fetchCustomerInfo";
import { postCustomerInfo } from "@/utils/redux/thunk/postCustomerInfo";

const initialState = {
    loading: false,
    data: {},
    error: null,
};

export const fetchCustomerInfoReducer = createSlice({
    name: "fetchCustomerInfo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCustomerInfo.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCustomerInfo.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchCustomerInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
}).reducer;

const postCustomerInfoInitialState = {
    loading: false,
    data: {},
    error: null,
};

export const postCustomerInfoSlice = createSlice({
    name: "postCustomerInfo",
    initialState: postCustomerInfoInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postCustomerInfo.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postCustomerInfo.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(postCustomerInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { resetPostCustomerInfo } = postCustomerInfoSlice.actions;

export const postCustomerInfoReducer = postCustomerInfoSlice.reducer;
