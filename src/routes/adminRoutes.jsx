import AdminLayout from "../layouts/AdminLayout";
import AuthLayout from "../layouts/AuthLayout";

const adminRoutes = {
    path: "admin",
    element: AdminLayout,
    children: [],
};

const authRoutes = {
    path: "auth",
    element: AuthLayout,
};

export { adminRoutes, authRoutes };
