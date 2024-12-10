import Home from "@/pages/customer/Home";
import Movies from "@/pages/customer/Movies";
import MovieDetail from "@/pages/customer/MovieDetail";
import Cinema from "@/pages/customer/Cinema";
import Booking from "@/pages/customer/Booking";
import BookingSuccess from "@/pages/customer/BookingSuccess";
import Contact from "@/pages/customer/Contact";
import Login from "@/pages/customer/Login";
import Logout from "@/pages/customer/Logout";
import Register from "@/pages/customer/Register";
import { lazy } from "react";

const customerRoutes = {
    path: "",
    element: lazy(() => import("@/pages/customer")),
    children: [
        {
            path: "",
            element: Home,
        },
        {
            path: "movies",
            element: Movies,
        },
        {
            path: "movie/:id",
            element: MovieDetail,
        },
        {
            path: "cinema",
            element: Cinema,
        },
        {
            path: "booking/:id",
            element: Booking,
        },
        {
            path: "booking-success",
            element: BookingSuccess,
        },
        {
            path: "contact",
            element: Contact,
        },
        {
            path: "login",
            element: Login,
        },
        {
            path: "logout",
            element: Logout,
        },
        {
            path: "register",
            element: Register,
        },
    ],
};

export { customerRoutes };
