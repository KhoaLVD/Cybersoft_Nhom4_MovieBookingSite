import { createContext, useState, useContext } from "react";

const CustomerAuthContext = createContext();

export const CustomerAuthProvider = ({ children }) => {
    const [customer, setCustomer] = useState(() => {
        const customerData = localStorage.getItem("CUSTOMER_LOGGED");
        return customerData ? JSON.parse(customerData) : null;
    });

    const login = (customerData) => {
        localStorage.setItem("CUSTOMER_LOGGED", JSON.stringify(customerData));
        setCustomer(customerData);
    };

    const logout = () => {
        localStorage.removeItem("CUSTOMER_LOGGED");
        setCustomer(null);
    };

    return (
        <CustomerAuthContext.Provider value={{ customer, login, logout }}>
            {children}
        </CustomerAuthContext.Provider>
    );
};

export const useCustomerAuth = () => useContext(CustomerAuthContext);
