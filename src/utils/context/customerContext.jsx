import { createContext, useState, useContext } from "react";

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
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
        <CustomerContext.Provider value={{ customer, login, logout }}>
            {children}
        </CustomerContext.Provider>
    );
};

export const useCustomerLoggedIn = () => useContext(CustomerContext);
