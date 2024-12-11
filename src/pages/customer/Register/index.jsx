import { Link } from "react-router-dom";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postRegister } from "@/utils/redux/thunk/postRegister";
import Spinner from "@/components/customer/Spinner";

export default function Register() {
    const dispatch = useDispatch();

    const initialUserState = useMemo(
        () => ({
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "GP01",
            hoTen: "",
        }),
        []
    );

    const [user, setUser] = useState(initialUserState);

    const error = useSelector((state) => state.postRegisterReducer.error);
    const registerResponse = useSelector(
        (state) => state.postRegisterReducer.data
    );
    const isLoading = useSelector((state) => state.postRegisterReducer.loading);

    const [registerSuccess, setRegisterSuccess] = useState(false);

    useEffect(() => {
        if (registerResponse.email) {
            setRegisterSuccess(true);
            setUser(initialUserState);
        }
    }, [registerResponse, initialUserState]);

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
            dispatch(postRegister(user));
        },
        [dispatch, user]
    );

    return (
        <>
            <section className="bg-primary">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            {error && <p className="text-red-500">{error}</p>}
                            {registerSuccess && (
                                <p className="text-green-500">
                                    Đăng ký thành công.{" "}
                                    <Link className="underline" to="/login">
                                        Đăng nhập tại đây
                                    </Link>
                                </p>
                            )}
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-secondary md:text-2xl">
                                Tạo tài khoản
                            </h1>
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
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Họ tên
                                    </label>
                                    <input
                                        type="text"
                                        name="hoTen"
                                        id="hoTen"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Nguyen Van A"
                                        required
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="name@company.com"
                                        required
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="phone-number"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Số điện thoại
                                    </label>
                                    <input
                                        type="text"
                                        name="soDt"
                                        id="phone-number"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="0903123456"
                                        required
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="terms"
                                            aria-describedby="terms"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="terms"
                                            className="font-light text-gray-500"
                                        >
                                            Tôi chấp nhận các{" "}
                                            <a
                                                className="font-medium text-primary-600 hover:underline"
                                                href="#"
                                            >
                                                Điều khoản và Điều kiện
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-primary bg-secondary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    onClick={handleSubmit}
                                >
                                    Tạo tài khoản
                                </button>
                                <p className="text-sm font-light text-gray-500">
                                    Bạn đã có tài khoản?{" "}
                                    <Link
                                        to="/login"
                                        className="font-medium text-primary-600 hover:underline"
                                    >
                                        Đăng nhập tại đây
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
