import CustomerLayout from "../layouts/CustomerLayout";
import HomePage from "../pages/customer/HomePage";

const customerRoutes = {
    path: "",
    element: CustomerLayout,
    children: [
        {
            path: "",
            element: HomePage,
        },
    ],
};

export { customerRoutes };
