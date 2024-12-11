import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCinemaSystem } from "@/utils/redux/thunk/admin/fetchCinemaSystem";
import { postMovieSchedule } from "@/utils/redux/thunk/admin/postMovieSchedule";
import { adminFetchMovieById } from "@/utils/redux/thunk/admin/fetchMovieById";

export default function AddMovieSchedule() {
    const { id } = useParams();

    const dispatch = useDispatch();

    const movie = useSelector((state) => state.adminFetchMovieByIdReducer.data);

    const cinemaSystem = useSelector(
        (state) => state.adminFetchCinemaSystem.data
    );

    useEffect(() => {
        dispatch(fetchCinemaSystem());
        dispatch(adminFetchMovieById(id));
    }, [dispatch, id]);

    return (
        <div className="sm:ml-64 p-4">
            <h1 className="text-4xl font-bold mt-8">Thêm lịch chiếu phim</h1>
            <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-16 mt-10">
                <div className="flex-[0.3] lg:flex-1 flex flex-col items-center p-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img
                            className="rounded-t-lg"
                            src="https://movienew.cybersoft.edu.vn/hinhanh/sieu-lua-sieu-lay_gp01.jpg"
                            alt
                        />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Siêu lừa gặp siêu lầy
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                    </div>
                </div>

                <div className="flex-[0.7] lg:flex-1 flex flex-col items-center p-8">
                    <form className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <div>
                                <label
                                    htmlFor="countries"
                                    className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                                >
                                    Chọn hệ thống rạp
                                </label>
                                <select
                                    id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option>CGV</option>
                                    <option>BHD</option>
                                    <option>Mega</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div>
                                <label
                                    htmlFor="cinema"
                                    className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                                >
                                    Chọn cụm rạp
                                </label>
                                <select
                                    id="cinema"
                                    name="maRap"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option>CGV - Ba Trieu</option>
                                    <option>CGV - Vincom</option>
                                    <option>CGV - Tran Duy Hung</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="show-time"
                                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                            >
                                Giờ chiếu
                            </label>
                            <input
                                type="text"
                                id="show-time"
                                name="ngayChieuGioChieu"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="01:00"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="price"
                                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                            >
                                Giá vé
                            </label>
                            <input
                                type="text"
                                id="price"
                                name="giaVe"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="75000"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Xác nhận
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
