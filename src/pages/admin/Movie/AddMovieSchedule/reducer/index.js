import { createSlice } from "@reduxjs/toolkit";
import { fetchCinemaSystem } from "@/utils/redux/thunk/admin/fetchCinemaSystem";
import { postMovieSchedule } from "@/utils/redux/thunk/admin/postMovieSchedule";
import { adminFetchMovieById } from "@/utils/redux/thunk/admin/fetchMovieById";
import { fetchCinemaById } from "@/utils/redux/thunk/admin/fetchCinemaById";

const fetchMovieByIdInitialState = {
    loading: false,
    data: {},
    error: null,
};

export const adminFetchMovieByIdReducer = createSlice({
    name: "adminFetchMovieByIdReducer",
    initialState: fetchMovieByIdInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(adminFetchMovieById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(adminFetchMovieById.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(adminFetchMovieById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
}).reducer;

const postMovieScheduleInitialState = {
    loading: false,
    data: {},
    error: null,
};

export const adminPostMovieSchedule = createSlice({
    name: "adminPostMovieSchedule",
    initialState: postMovieScheduleInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postMovieSchedule.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postMovieSchedule.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(postMovieSchedule.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
}).reducer;

const fetchCinemaSystemInitialState = {
    loading: false,
    data: {},
    error: null,
};

export const adminFetchCinemaSystem = createSlice({
    name: "adminFetchCinemaSystem",
    initialState: fetchCinemaSystemInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCinemaSystem.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCinemaSystem.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchCinemaSystem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
}).reducer;

const fetchCinemaByIdInitialState = {
    loading: false,
    data: {},
    error: null,
};

export const adminFetchCinemaById = createSlice({
    name: "adminFetchCinemaById",
    initialState: fetchCinemaByIdInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCinemaById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCinemaById.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchCinemaById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
}).reducer;
