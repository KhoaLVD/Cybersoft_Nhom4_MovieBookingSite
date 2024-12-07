import CustomerTemplate from "@/pages/customer";
import Home from "@/pages/customer/Home";
import Movies from "@/pages/customer/Movies";
import MovieDetail from "@/pages/customer/MovieDetail";
import Cinema from "@/pages/customer/Cinema";
import Booking from "@/pages/customer/Booking";
import Contact from "@/pages/customer/Contact";
import Login from "@/pages/customer/Login";
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
            path: "contact",
            element: Contact,
        },
        {
            path: "login",
            element: Login,
        },
        {
            path: "register",
            element: Register,
        },
    ],
};

export { customerRoutes };
