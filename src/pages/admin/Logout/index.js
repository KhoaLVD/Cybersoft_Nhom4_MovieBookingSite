import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../Auth/duck/reducer";

export default function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const customer = localStorage.getItem("USER_ADMIN")
        ? JSON.parse(localStorage.getItem("USER_ADMIN"))
        : null;

    useEffect(() => {
        if (customer && customer.accessToken) {
            dispatch(logoutAction());
            navigate("/auth");
        }
    }, [customer, navigate]);

    return null;
}
