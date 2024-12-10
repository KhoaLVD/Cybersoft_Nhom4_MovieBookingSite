import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("CUSTOMER_LOGGED")) {
            localStorage.removeItem("CUSTOMER_LOGGED");
        }

        navigate("/");
    }, [navigate]);

    return null;
}
