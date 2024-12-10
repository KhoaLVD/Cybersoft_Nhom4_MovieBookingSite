import { createSlice } from "@reduxjs/toolkit";
import { fetchBookingById } from "@/utils/redux/thunk/fetchBookingById";
import { postTicket } from "@/utils/redux/thunk/postTicket";

const initialState = {
    loading: false,
    data: {},
    error: null,
};

export const bookingPage = createSlice({
    name: "bookingPage",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBookingById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchBookingById.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchBookingById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
}).reducer;

const postTicketInitialState = {
    loading: false,
    data: {},
    error: null,
};

export const postTicketReducer = createSlice({
    name: "postTicket",
    initialState: postTicketInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postTicket.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postTicket.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(postTicket.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
}).reducer;
