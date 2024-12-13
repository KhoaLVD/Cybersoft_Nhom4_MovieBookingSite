import { createSlice } from "@reduxjs/toolkit";
import { fetchCustomerByUserName } from "@/utils/redux/thunk/fetchCustomerByUserName";

const initialState = {
    loading: false,
    data: {},
    error: null,
};

const bookingPageSlice = createSlice({
    name: "fetchCustomerByUserName",
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.data = {};
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCustomerByUserName.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCustomerByUserName.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchCustomerByUserName.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { reset } = bookingPageSlice.actions;

export const bookingPageReducer = bookingPageSlice.reducer;
