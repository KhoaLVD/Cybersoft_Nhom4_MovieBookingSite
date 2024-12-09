import Auth from "@/pages/admin/Auth/Auth";
import AdminTemplate from "@/pages/admin";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";
import Movie from "@/pages/admin/Movie/Movie";
import User from "@/pages/admin/User/User";
import ListUser from "@/pages/admin/User/ListUser/ListUser";
import AddUser from "@/pages/admin/User/AddUser/AddUser";
import UpdateUser from "@/pages/admin/User/UpdateUser/UpdateUser";

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
        }
       
    ],
};

const authRoutes = {
    path: "auth",
    element: Auth,
};

export { adminRoutes, authRoutes };
