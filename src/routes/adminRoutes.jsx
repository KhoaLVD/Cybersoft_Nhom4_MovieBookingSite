import Auth from "@/pages/admin/Auth/Auth";
import AdminTemplate from "@/pages/admin";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";
import Movie from "@/pages/admin/Movie/Movie";
import AddMovieSchedule from "@/pages/admin/Movie/AddMovieSchedule";
import User from "@/pages/admin/User/User";
import ListUser from "@/pages/admin/User/ListUser/ListUser";
import AddUser from "@/pages/admin/User/AddUser/AddUser";
import UpdateUser from "@/pages/admin/User/UpdateUser/UpdateUser";
import ListMovie from "@/pages/admin/Movie/ListMovie/ListMovie";
import AddMovie from "@/pages/admin/Movie/AddMovie/AddMovie";
import Logout from "@/pages/admin/Logout";

const adminRoutes = {
    path: "admin",
    element: AdminTemplate,
    children: [
        {
            path: "dashboard",
            element: Dashboard,
        },
        {
            path: "movie",
            element: Movie,
        },
        {
            path: "add-movie-schedule/:id",
            element: AddMovieSchedule,
        },
        {
            path: "user",
            element: User,
        },
        {
            path: "list-user",
            element: ListUser,
        },
        {
            path: "add-user",
            element: AddUser,
        },
        {
            path: "update-user/:id",
            element: UpdateUser,
        },
        {
            path: "list-movie",
            element: ListMovie,
        },
        {
            path: "add-movie",
            element: AddMovie,
        },
        {
            path: "logout",
            element: Logout,
        },
    ],
};

const authRoutes = {
    path: "auth",
    element: Auth,
};

export { adminRoutes, authRoutes };
