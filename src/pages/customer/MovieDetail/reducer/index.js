import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieById } from "@/utils/redux/thunk/fetchMovieById";
import { fetchMovieShowTimes } from "@/utils/redux/thunk/fetchMovieShowtimes";

const initialState = {
    loading: false,
    data: {},
    error: null,
};

export const customerMovieDetailPage = createSlice({
    name: "customerMovieDetailPage",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovieById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchMovieById.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchMovieById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
}).reducer;

const customerMovieDetailPageMoviewShowTimesInitialState = {
    loading: false,
    selectedCinemaSystem: null,
    selectedCinema: null,
    selectedWatchTime: null,
    data: {},
    error: null,
};

export const customerMovieDetailPageMoviewShowTimes = createSlice({
    name: "customerMovieDetailPageMoviewShowTimes",
    initialState: customerMovieDetailPageMoviewShowTimesInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovieShowTimes.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchMovieShowTimes.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchMovieShowTimes.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const customerMovieDetailPageMoviewShowTimesReducer =
    customerMovieDetailPageMoviewShowTimes.reducer;
