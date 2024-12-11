import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useCustomerAuth } from "@/utils/context/customerAuthContext";
import { clear } from "../Login/reducer";

export default function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { customer, logout } = useCustomerAuth();
    useEffect(() => {
        if (customer) {
            dispatch(clear());
            logout();
            navigate("/");
        }
    }, [navigate, customer, dispatch, logout]);

    return null;
}
