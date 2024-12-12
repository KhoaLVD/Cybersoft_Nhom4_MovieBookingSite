import { Link, useLocation } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import avatarIcon from "/images/customer/user-default-avt.png";
import { useCustomerAuth } from "@/utils/context/customerAuthContext";

const customTheme = {
    root: {
        inner: {
            base: "max-w-screen-xl mx-auto flex flex-wrap items-center justify-between",
        },
    },
    link: {
        base: "block py-2 pl-3 pr-4 md:p-0 text-white bg-transparent text-[16px] font-medium",
        active: {
            on: "bg-white text-secondary-dark md:bg-transparent md:text-secondary",
            off: "border-b border-gray-100 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-secondary",
        },
    },
};

export default function Header() {
    const { customer } = useCustomerAuth();
    const location = useLocation();

    return (
        <header className="bg-primary-light p-4 lg:p-8">
            <Navbar
                className="bg-primary-light"
                fluid
                rounded
                theme={customTheme}
            >
                <Navbar.Brand href="/">
                    <h1 className="text-secondary text-2xl font-bold">
                        MovieBooking
                    </h1>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        className="bg-primary-light"
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar
                                alt="User settings"
                                img={(props) => {
                                    props.className = "rounded h-8 w-8";
                                    return (
                                        <img
                                            {...props}
                                            src={avatarIcon}
                                            alt="User settings"
                                        />
                                    );
                                }}
                                className="bg-secondary rounded-full"
                            />
                        }
                    >
                        {customer ? (
                            <>
                                <Dropdown.Header className="text-white bg-transparent hover:bg-transparent focus:bg-transparent hover:text-secondary">
                                    <span className="block text-sm">
                                        {customer.hoTen}
                                    </span>
                                    <span className="block truncate text-sm font-medium">
                                        {customer.email}
                                    </span>
                                </Dropdown.Header>
                                <Dropdown.Item className="text-white bg-transparent hover:bg-transparent focus:bg-transparent hover:text-secondary">
                                    <Link to="/logout">Đăng xuất</Link>
                                </Dropdown.Item>
                            </>
                        ) : (
                            <>
                                <Dropdown.Item className="text-white bg-transparent hover:bg-transparent focus:bg-transparent hover:text-secondary">
                                    <Link to="/login">Đăng nhập</Link>
                                </Dropdown.Item>
                                <Dropdown.Item className="text-white bg-transparent hover:bg-transparent focus:bg-transparent hover:text-secondary">
                                    <Link to="/register">Đăng ký</Link>
                                </Dropdown.Item>
                            </>
                        )}
                    </Dropdown>
                    <Navbar.Toggle className="ml-2 focus:bg-transparent" />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/movies"
                        active={location.pathname === "/movies"}
                    >
                        Danh sách phim
                    </Navbar.Link>
                    <Navbar.Link
                        href="/contact"
                        active={location.pathname === "/contact"}
                    >
                        Liên hệ
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}
