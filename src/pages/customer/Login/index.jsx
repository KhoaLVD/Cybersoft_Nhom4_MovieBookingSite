import { Link, useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postLogin } from "@/utils/redux/thunk/postLogin";
import { useCustomerLoggedIn } from "@/utils/context/customerContext";
import Spinner from "@/components/customer/Spinner";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { customer, login } = useCustomerLoggedIn();

    if (customer && customer.email) {
        return <Navigate to="/" replace />;
    }

    const customerResponse = useSelector(
        (state) => state.postLoginReducer.data
    );
    const isLoading = useSelector((state) => state.postLoginReducer.loading);

    useEffect(() => {
        if (customerResponse.accessToken) {
            login(customerResponse);
            navigate("/");
        }
    }, [customerResponse]);

    const errorResponse = useSelector((state) => state.postLoginReducer.error);

    const [user, setUser] = useState({
        taiKhoan: "",
        matKhau: "",
    });

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    }, []);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(postLogin(user));
        },
        [dispatch, user]
    );

    return (
        <>
            <section className="bg-primary">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            {errorResponse && (
                                <p className="text-red-500">{errorResponse}</p>
                            )}
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Tài khoản
                                    </label>
                                    <input
                                        type="text"
                                        name="taiKhoan"
                                        id="username"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="nguyenvana"
                                        required
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Mật khẩu
                                    </label>
                                    <input
                                        type="password"
                                        name="matKhau"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-primary bg-secondary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    onClick={handleSubmit}
                                >
                                    Đăng nhập
                                </button>
                                <p className="text-sm font-light text-gray-500">
                                    Bạn chưa có tài khoản?{" "}
                                    <Link
                                        to="/register"
                                        className="font-medium text-primary-600 hover:underline"
                                    >
                                        Tạo tài khoản mới tại đây
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {isLoading && <Spinner />}
        </>
    );
}
