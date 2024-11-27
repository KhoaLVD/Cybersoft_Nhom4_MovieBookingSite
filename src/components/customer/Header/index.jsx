import { NavLink, Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-gray-900 p-4">
            <nav>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <h1 className="text-red-600 text-2xl font-bold">
                        <a href="#">MovieBooking</a>
                    </h1>
                    <div className="flex md:order-2 md:hidden space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            data-collapse-toggle="navbar-cta"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
                            aria-controls="navbar-cta"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-cta"
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <NavLink
                                    to="/movies"
                                    className="block py-2 px-3 md:p-0 text-white bg-gray-700 rounded md:bg-transparent md:text-blue-70 md:hover:text-red-700"
                                    aria-current="page"
                                >
                                    Danh sách phim
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/cinema"
                                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700"
                                >
                                    Rạp chiếu
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700"
                                >
                                    Liên hệ
                                </NavLink>
                            </li>
                        </ul>
                        <div className="flex gap-5 mt-5 md:hidden md:mt-0">
                            <Link
                                to="/login"
                                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                            >
                                Đăng nhập
                            </Link>
                            <Link
                                to="/register"
                                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                            >
                                Đăng ký
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex md:gap-5 md:order-3">
                        <Link
                            to="/login"
                            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                        >
                            Đăng nhập
                        </Link>
                        <Link
                            to="/register"
                            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                        >
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
