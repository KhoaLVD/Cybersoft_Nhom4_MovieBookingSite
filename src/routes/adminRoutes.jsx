import Auth from "../pages/admin/Auth/Auth";
import AdminTemplate from "../pages/admin";
import Dashboard from "../pages/admin/Dashboard/Dashboard";

const adminRoutes = {
    path: "admin",
    element: AdminTemplate,
    children: [
        {
            path: "dashboard",
            element: Dashboard,
        }
    ],
};

const authRoutes = {
    path: "auth",
    element: Auth,
};

export { adminRoutes, authRoutes };
