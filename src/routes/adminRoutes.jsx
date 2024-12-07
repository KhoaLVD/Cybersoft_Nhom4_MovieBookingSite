import Auth from "@/pages/admin/Auth/Auth";
import AdminTemplate from "@/pages/admin";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";
import Movie from "@/pages/admin/Movie/Movie";
import User from "@/pages/admin/User/User";

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
            path: "user",
            element: User,
        },
    ],
};

const authRoutes = {
    path: "auth",
    element: Auth,
};

export { adminRoutes, authRoutes };
