import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useCustomerLoggedIn } from "@/utils/context/customerContext";
import { clear } from "../Login/reducer";

export default function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { customer, logout } = useCustomerLoggedIn();
    useEffect(() => {
        if (customer) {
            dispatch(clear());
            logout();
            navigate("/");
        }
    }, [navigate]);

    return null;
}
