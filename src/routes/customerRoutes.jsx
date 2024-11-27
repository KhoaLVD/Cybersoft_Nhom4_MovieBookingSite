import CustomerTemplate from "../pages/customer";
import HomePage from "../pages/customer/HomePage";

const customerRoutes = {
    path: "",
    element: CustomerTemplate,
    children: [
        {
            path: "",
            element: HomePage,
        },
    ],
};

export { customerRoutes };
