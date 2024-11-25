import { customerRoutes } from "./customerRoutes";
import { adminRoutes, authRoutes } from "./adminRoutes";

import { Route } from "react-router-dom";

const routes = [customerRoutes, adminRoutes, authRoutes];

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.children) {
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                >
                    {route.children.map((item) => (
                        <Route
                            key={item.path}
                            path={item.path}
                            element={<item.element />}
                        />
                    ))}
                </Route>
            );
        } else {
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                />
            );
        }
    });
};

export default renderRoutes;
