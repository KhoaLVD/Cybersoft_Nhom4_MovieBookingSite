import {
    customerMoviesListPage,
    customerMoviesListPageByPagination,
} from "@/pages/customer/Movies/reducer";

import {
    customerMovieDetailPage,
    customerMovieDetailPageMoviewShowTimesReducer,
} from "@/pages/customer/MovieDetail/reducer";

import {
    bookingPage,
    postTicketReducer,
} from "@/pages/customer/Booking/reducer";

import { postLoginReducer } from "@/pages/customer/Login/reducer";

import { postRegisterReducer } from "@/pages/customer/Register/reducer";

export default {
    customerMoviesListPage,
    customerMoviesListPageByPagination,
    customerMovieDetailPage,
    customerMovieDetailPageMoviewShowTimesReducer,
    bookingPage,
    postTicketReducer,
    postLoginReducer,
    postRegisterReducer,
};
