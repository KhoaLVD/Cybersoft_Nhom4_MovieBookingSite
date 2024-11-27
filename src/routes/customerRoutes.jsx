import CustomerLayout from "../layouts/CustomerLayout";
import Home from "../pages/customer/Home";
import Movies from "../pages/customer/Movies";
import MovieDetail from "../pages/customer/MovieDetail";
import Cinema from "../pages/customer/Cinema";
import Contact from "../pages/customer/Contact";
import Login from "../pages/customer/Login";
import Register from "../pages/customer/Register";

const customerRoutes = {
    path: "",
    element: CustomerLayout,
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
