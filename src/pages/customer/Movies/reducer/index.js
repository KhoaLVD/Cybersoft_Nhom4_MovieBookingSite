import { createSlice } from "@reduxjs/toolkit";
import {
    fetchMovies,
    fetchPaginationMovie,
} from "../../../../utils/redux/thunk/fetchMovies";

const customerMoviesListPageInitialState = {
    loading: false,
    data: [],
    error: null,
};

export const customerMoviesListPage = createSlice({
    name: "customerMoviesListPage",
    initialState: customerMoviesListPageInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
}).reducer;

const customerMoviesListPageByPaginationInitialState = {
    loading: false,
    data: [],
    error: null,
};

export const customerMoviesListPageByPagination = createSlice({
    name: "customerMoviesListPageByPagination",
    initialState: customerMoviesListPageByPaginationInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPaginationMovie.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPaginationMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchPaginationMovie.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
}).reducer;
