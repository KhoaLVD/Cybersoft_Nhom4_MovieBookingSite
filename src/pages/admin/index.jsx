import Sidebar from "../../components/admin/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function AdminTemplate() {
    const user = localStorage.getItem("USER_ADMIN")
        ? JSON.parse(localStorage.getItem("USER_ADMIN"))
        : null;

    if (!user) {
        return <Navigate to="/auth" />;
    }

    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    );
}
