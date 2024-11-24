import UserTemplate from "../_pages/UserTemplate";
import HomePage from "../_pages/UserTemplate/HomePage";
import AdminTemplate from "../_pages/AdminTemplate";
import Auth from "../_pages/AdminTemplate/Auth/Auth";

import {Route} from "react-router-dom"

const routes = [
    {
      path: "",
      element: UserTemplate,
      children: [
        {
          path: "",
          element: HomePage,
        },
        
      ],
    },
    {
      path: "admin",
      element: AdminTemplate,
      children: [
        
      ],
    },
    {
      path: "auth",
      element: Auth,
    },
  ];
  
  const renderRoutes = () => {
    return routes.map((route) => {
      if (route.children) {
        return (
          <Route key={route.path} path={route.path} element={<route.element />}>
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
          <Route key={route.path} path={route.path} element={<route.element />} />
        );
      }
    });
  };
  
  export default renderRoutes;