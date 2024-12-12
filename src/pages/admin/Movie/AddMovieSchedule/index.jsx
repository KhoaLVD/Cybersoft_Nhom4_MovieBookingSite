import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import { toast, ToastContainer } from "react-toastify";
import { fetchCinemaSystem } from "@/utils/redux/thunk/admin/fetchCinemaSystem";
import { fetchCinemaById } from "@/utils/redux/thunk/admin/fetchCinemaById";
import { postMovieSchedule } from "@/utils/redux/thunk/admin/postMovieSchedule";
import { adminFetchMovieById } from "@/utils/redux/thunk/admin/fetchMovieById";

export default function AddMovieSchedule() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const initStateFormData = useMemo(
        () => ({
            maPhim: id,
            ngayChieuGioChieu: new Date().toLocaleString(),
            maRap: "",
            giaVe: 0,
        }),
        [id]
    );

    const [formData, setFormData] = useState(initStateFormData);
    const [cinemaSystemSelected, setCinemaSystemSelected] = useState("");

    const postMovieScheduleResponse = useSelector(
        (state) => state.adminPostMovieSchedule.data
    );

    useEffect(() => {
        if (
            postMovieScheduleResponse &&
            postMovieScheduleResponse.statusCode === 200
        ) {
            toast.success("Thêm lịch chiếu thành công");
            setFormData(initStateFormData);
            setCinemaSystemSelected("");
        }
    }, [postMovieScheduleResponse, initStateFormData]);

    const movie = useSelector((state) => state.adminFetchMovieByIdReducer.data);

    const cinemaSystem = useSelector(
        (state) => state.adminFetchCinemaSystem.data
    );

    const cinema = useSelector((state) => state.adminFetchCinemaById.data);

    const cinemaSystemOptionList = useMemo(() => {
        if (!cinemaSystem || !cinemaSystem.length) return null;
        return cinemaSystem.map((item) => {
            return (
                <option key={item.maHeThongRap} value={item.maHeThongRap}>
                    {item.tenHeThongRap}
                </option>
            );
        });
    }, [cinemaSystem]);

    const cinemaOptionList = useMemo(() => {
        if (!cinema || !cinema.length || !cinemaSystemSelected) return null;
        return cinema.map((item) => {
            return (
                <option key={item.maCumRap} value={item.maCumRap}>
                    {item.tenCumRap}
                </option>
            );
        });
    }, [cinema, cinemaSystemSelected]);

    const handleChangeCinemaSystem = useCallback(
        (maHeThongRap) => {
            setCinemaSystemSelected(maHeThongRap);
            if (!maHeThongRap) return;
            dispatch(fetchCinemaById(maHeThongRap));
        },
        [dispatch]
    );

    const handleChangeCinema = useCallback((maCumRap) => {
        setFormData((prevData) => ({
            ...prevData,
            maRap: maCumRap,
        }));
    }, []);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }, []);

    const handleDatetimeChange = useCallback((dateObj) => {
        const [date, time] = dateObj.$d
            .toLocaleString("en-GB", { hour12: false })
            .split(", ");

        const value = `${date} ${time}`;

        setFormData((prevData) => ({
            ...prevData,
            ngayChieuGioChieu: value,
        }));
    }, []);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(postMovieSchedule(formData));
        },
        [dispatch, formData]
    );

    useEffect(() => {
        dispatch(fetchCinemaSystem());
        dispatch(adminFetchMovieById(id));
    }, [dispatch, id]);

    return (
        <div className="sm:ml-64 p-4">
            <h1 className="text-4xl font-bold mt-8">Thêm lịch chiếu phim</h1>
            <div className="flex flex-col items-center lg:flex-row justify-center gap-2 lg:gap-16 mt-10">
                {movie && (
                    <div className="flex flex-col items-center p-8 max-w-sm bg-white border border-gray-200 rounded-lg">
                        <a href="#">
                            <img
                                className="rounded-t-lg"
                                src={movie.hinhAnh}
                                alt={movie.tenPhim}
                            />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {movie.tenPhim}
                                </h5>
                            </a>
                        </div>
                    </div>
                )}

                <div className="flex flex-col items-center p-8">
                    <h2 className="text-xl font-bold mb-5">
                        Nhập thông tin về lịch chiếu
                    </h2>
                    <form className="max-w-lg w-[230px] mx-auto">
                        <div className="mb-5">
                            <div>
                                <label
                                    htmlFor="countries"
                                    className="block mb-2 text-sm font-semibold text-gray-900"
                                >
                                    Chọn hệ thống rạp
                                </label>
                                <select
                                    id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    value={cinemaSystemSelected}
                                    onChange={(e) => {
                                        handleChangeCinemaSystem(
                                            e.target.value
                                        );
                                    }}
                                >
                                    <option value={""}>
                                        Chọn hệ thống rạp
                                    </option>
                                    {cinemaSystemOptionList}
                                </select>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div>
                                <label
                                    htmlFor="cinema"
                                    className="block mb-2 text-sm font-semibold text-gray-900"
                                >
                                    Chọn cụm rạp
                                </label>
                                <select
                                    id="cinema"
                                    name="maRap"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.50"
                                    value={formData.maRap}
                                    onChange={(e) => {
                                        handleChangeCinema(e.target.value);
                                    }}
                                >
                                    <option>Chọn cụm rạp</option>
                                    {cinemaOptionList}
                                </select>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="show-time"
                                className="block mb-2 text-sm font-semibold text-gray-900"
                            >
                                Ngày, giờ chiếu
                            </label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    className="text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    format="DD/MM/YYYY HH:mm:ss"
                                    defaultValue={dayjs(
                                        formData.ngayChieuGioChieu
                                    )}
                                    onChange={handleDatetimeChange}
                                />
                            </LocalizationProvider>
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="price"
                                className="block mb-2 text-sm font-semibold text-gray-900"
                            >
                                Giá vé
                            </label>
                            <input
                                type="text"
                                id="price"
                                name="giaVe"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="75000"
                                required
                                value={formData.giaVe}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                            onClick={handleSubmit}
                        >
                            Xác nhận
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}
