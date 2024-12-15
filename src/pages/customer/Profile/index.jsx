import { fetchCustomerInfo } from "@/utils/redux/thunk/fetchCustomerInfo";
import { postCustomerInfo } from "@/utils/redux/thunk/postCustomerInfo";
import Spinner from "@/components/customer/Spinner";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { FaHistory } from "react-icons/fa";

const customTheme = {
    base: "flex flex-col gap-2",
    tablist: {
        tabitem: {
            base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
            variant: {
                default: {
                    base: "rounded-t-lg",
                    active: {
                        on: "bg-primary-light text-secondary",
                        off: "text-gray-500 hover:bg-primary-light hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300",
                    },
                },
            },
        },
    },
};

export default function Profile() {
    const dispatch = useDispatch();

    const validationRules = Yup.object({
        matKhau: Yup.string().required("Mật khẩu không được để trống"),
        email: Yup.string().required("Email không được để trống"),
        soDt: Yup.string().required("Số điện thoại không được để trống"),
        hoTen: Yup.string().required("Họ tên không được để trống"),
    });

    const {
        loading,
        data: customerInfo,
        error,
    } = useSelector((state) => state.fetchCustomerInfoReducer);

    const {
        loading: postLoading,
        data: postCustomerInfoData,
        error: postError,
    } = useSelector((state) => state.postCustomerInfoReducer);

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "GP01",
            maLoaiNguoiDung: "KhachHang",
            hoTen: "",
        },
        validationSchema: validationRules,
        onSubmit: (values) => {
            dispatch(postCustomerInfo(values));
        },
    });

    const bookingHistory = customerInfo?.thongTinDatVe;

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (postCustomerInfoData && postCustomerInfoData.statusCode === 200) {
            setEditMode(false);
        }
    }, [postCustomerInfoData, dispatch]);

    useEffect(() => {
        dispatch(fetchCustomerInfo());
    }, [dispatch]);

    useEffect(() => {
        if (customerInfo) {
            formik.setValues({
                taiKhoan: customerInfo.taiKhoan,
                matKhau: customerInfo.matKhau,
                email: customerInfo.email,
                soDt: customerInfo.soDT,
                maNhom: "GP03",
                maLoaiNguoiDung: "KhachHang",
                hoTen: customerInfo.hoTen,
            });
        }
    }, [customerInfo]);

    const handleEditMode = useCallback(() => setEditMode(true), []);
    const handleCancelEdit = useCallback(() => {
        setEditMode(false);
        dispatch(fetchCustomerInfo());
    }, [dispatch]);

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            {loading && <Spinner />}
            {!loading && customerInfo && (
                <Tabs
                    aria-label="Default tabs"
                    variant="default"
                    theme={customTheme}
                >
                    <Tabs.Item
                        active
                        title="Thông tin cá nhân"
                        icon={HiUserCircle}
                    >
                        {postCustomerInfoData &&
                            postCustomerInfoData.statusCode === 200 && (
                                <div className="max-w-md mx-auto p-4 m-4 bg-primary-light rounded-lg shadow-md">
                                    <p className="text-center text-green-500 font-medium">
                                        Thay đổi thông tin thành công
                                    </p>
                                </div>
                            )}

                        {postError && (
                            <div className="max-w-md mx-auto p-4 m-4 bg-primary-light rounded-lg shadow-md">
                                <p className="text-center text-red-500 font-medium">
                                    {postError}
                                </p>
                            </div>
                        )}
                        <form
                            className="max-w-md mx-auto"
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary-dark focus:outline-none focus:ring-0 focus:border-secondary-dark peer"
                                    defaultValue={formik.values.email}
                                    disabled={!editMode}
                                    onChange={formik.handleChange}
                                    placeholder=""
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary-dark peer-focus:dark:text-secondary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Email
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="hoTen"
                                    id="fullname"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary-dark focus:outline-none focus:ring-0 focus:border-secondary-dark peer"
                                    defaultValue={formik.values.hoTen}
                                    disabled={!editMode}
                                    onChange={formik.handleChange}
                                    placeholder=""
                                    required
                                />
                                <label
                                    htmlFor="fullname"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary-dark peer-focus:dark:text-secondary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Họ và tên
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="tel"
                                    name="soDt"
                                    id="phone"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary-dark focus:outline-none focus:ring-0 focus:border-secondary-dark peer"
                                    placeholder=" "
                                    disabled={!editMode}
                                    defaultValue={formik.values.soDt}
                                    onChange={formik.handleChange}
                                    required
                                />
                                <label
                                    htmlFor="phone"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary-dark peer-focus:dark:text-secondary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Số điện thoại
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="taiKhoan"
                                    id="username"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary-dark focus:outline-none focus:ring-0 focus:border-secondary-dark peer"
                                    defaultValue={formik.values.taiKhoan}
                                    disabled={true}
                                    placeholder=""
                                    required
                                />
                                <label
                                    htmlFor="username"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary-dark peer-focus:dark:text-secondary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Tài khoản
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="password"
                                    name="matKhau"
                                    id="password"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary-dark focus:outline-none focus:ring-0 focus:border-secondary-dark peer"
                                    placeholder=" "
                                    defaultValue={formik.values.matKhau}
                                    disabled={!editMode}
                                    onChange={formik.handleChange}
                                    required
                                />
                                <label
                                    htmlFor="password"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondary-dark peer-focus:dark:text-secondary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Mật khẩu
                                </label>
                            </div>
                            {!editMode && (
                                <button
                                    className="text-white bg-secondary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-secondary-dark dark:hover:bg-secondary dark:focus:ring-secondary-800"
                                    type="button"
                                    onClick={handleEditMode}
                                >
                                    Cập nhật thông tin
                                </button>
                            )}
                            {editMode && (
                                <>
                                    <button
                                        className="text-white bg-secondary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-secondary-dark dark:hover:bg-secondary dark:focus:ring-secondary-800"
                                        type="submit"
                                    >
                                        Lưu thông tin
                                    </button>
                                    <button
                                        className="text-white bg-secondary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 ml-2 text-center dark:bg-secondary-dark dark:hover:bg-secondary dark:focus:ring-secondary-800"
                                        type="button"
                                        onClick={handleCancelEdit}
                                    >
                                        Hủy
                                    </button>
                                </>
                            )}
                        </form>
                    </Tabs.Item>
                    <Tabs.Item title="Lịch sử đặt vé" icon={FaHistory}>
                        <div className="grid grid-cols-1 gap-4">
                            {bookingHistory &&
                                bookingHistory.length &&
                                bookingHistory.map((booking) => (
                                    <div
                                        key={booking.maVe}
                                        className="flex gap-4 p-4 bg-primary-light rounded-lg shadow-md"
                                    >
                                        <div className="flex-[0.4] flex justify-center">
                                            <img
                                                src={booking.hinhAnh}
                                                alt={booking.tenPhim}
                                                className="w-full md:w-20 max-w-2xl rounded-lg"
                                            />
                                        </div>
                                        <div className="flex-[0.6] grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            <div>
                                                <p className="font-medium text-gray-400">
                                                    Mã vé
                                                </p>
                                                <p className="text-gray-200">
                                                    {booking.maVe}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-400">
                                                    Tên phim
                                                </p>
                                                <p className="text-gray-200">
                                                    {booking.tenPhim}
                                                </p>
                                            </div>
                                            <div className="row-span-2">
                                                <p className="font-medium text-gray-400">
                                                    Danh sách ghế
                                                </p>
                                                <div className="grid grid-cols-3 sm:grid-cols-5">
                                                    {booking.danhSachGhe.map(
                                                        (ghe) => {
                                                            return (
                                                                <span
                                                                    key={
                                                                        ghe.maGhe
                                                                    }
                                                                    className="text-gray-400"
                                                                >
                                                                    {ghe.tenGhe}
                                                                </span>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-400">
                                                    Giá vé/Ghế
                                                </p>
                                                <p className="text-gray-200">
                                                    {booking.giaVe.toLocaleString()}{" "}
                                                    VNĐ
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-400">
                                                    Ngày đặt
                                                </p>
                                                <p className="text-gray-200">
                                                    {booking.ngayDat}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </Tabs.Item>
                </Tabs>
            )}
        </div>
    );
}
