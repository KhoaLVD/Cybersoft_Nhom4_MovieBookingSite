import Home from "@/pages/customer/Home";
import Movies from "@/pages/customer/Movies";
import MovieDetail from "@/pages/customer/MovieDetail";
import Booking from "@/pages/customer/Booking";
import Contact from "@/pages/customer/Contact";
import Login from "@/pages/customer/Login";
import Logout from "@/pages/customer/Logout";
import Register from "@/pages/customer/Register";
import Profile from "@/pages/customer/Profile";
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
            path: "logout",
            element: Logout,
        },
        {
            path: "register",
            element: Register,
        },
        {
            path: "profile",
            element: Profile,
        },
    ],
};

export { customerRoutes };
