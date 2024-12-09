import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookingById } from "@/utils/redux/thunk/fetchBookingById";

export default function Booking() {
    const dispatch = useDispatch();
    let params = useParams();

    let [selectedSeat, setSelectedSeat] = useState([]);

    const bookingResponse = useSelector((state) => state.bookingPage.data);

    const movieInfo = bookingResponse ? bookingResponse.thongTinPhim : {};
    const movieSeatList = bookingResponse ? bookingResponse.danhSachGhe : [];

    let movieSeatListHtml = "";
    if (movieSeatList) {
        movieSeatListHtml = movieSeatList.map((seat) => {
            return (
                <li
                    key={seat.maGhe}
                    className="py-1 flex flex-col justify-center items-center"
                >
                    <button
                        className={`relative ${
                            seat.daDat === true ? "cursor-not-allowed" : ""
                        }`}
                        disabled={seat.daDat === true}
                        onClick={() => {
                            setSelectedSeat((prev) => {
                                let { maGhe, tenGhe, giaVe } = seat;

                                const isSeatSelected = prev.some(
                                    (item) => item.maGhe === maGhe
                                );

                                if (isSeatSelected) {
                                    return prev.filter(
                                        (item) => item.maGhe !== maGhe
                                    );
                                } else {
                                    return [...prev, { maGhe, tenGhe, giaVe }];
                                }
                            });
                        }}
                    >
                        <i
                            className={`fa-solid fa-couch ${
                                seat.loaiGhe == "Vip" ? "text-red-600" : ""
                            } ${
                                selectedSeat.length &&
                                selectedSeat.some(
                                    (item) => item.maGhe === seat.maGhe
                                )
                                    ? "text-lime-600"
                                    : ""
                            }`}
                        ></i>
                        {seat.daDat === true ? (
                            <i className="fa-solid fa-x fa-xl absolute left-[1px] top-[10px] text-red-500"></i>
                        ) : null}
                    </button>
                    <span className="text-sm">{seat.tenGhe}</span>
                </li>
            );
        });
    }

    let selectedSeatHtml = "";
    if (selectedSeat) {
        selectedSeatHtml = selectedSeat.map((item) => {
            return (
                <li key={item.maGhe}>
                    <span>Số ghế: {item.tenGhe} </span>
                    <span>Giá tiền: {item.giaVe}</span>
                </li>
            );
        });
    }

    const maLichChieu = params.id;
    useEffect(() => {
        dispatch(fetchBookingById(maLichChieu));
    }, []);

    return (
        <div className="md:py-16 lg:px-40">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center md:w-1/3 px-6 md:px-6">
                    {movieInfo && (
                        <img
                            className="w-full rounded-lg"
                            src={movieInfo.hinhAnh}
                            alt={movieInfo.tenPhim}
                        />
                    )}
                </div>
                <div className="md:w-2/3 px-6">
                    {movieInfo && (
                        <>
                            <div className="xl:flex md:gap-8 mb-4">
                                <h2 className="mb-4 xl:mb-0 text-4xl font-bold">
                                    {movieInfo.tenPhim}
                                </h2>
                            </div>
                            <div>
                                <p className="py-1">
                                    <span className="font-bold">Ngày xem:</span>
                                    <span> {movieInfo.ngayChieu}</span>
                                </p>
                                <p className="py-1">
                                    <span className="font-bold">
                                        Giờ bắt đầu:
                                    </span>
                                    <span> {movieInfo.gioChieu}</span>
                                </p>
                            </div>
                        </>
                    )}
                    <div className="mt-8">
                        <h3 className="text-xl font-bold p-2">Chọn ghế</h3>
                        <div className="flex flex-col lg:flex-row">
                            {movieSeatList && (
                                <div className="flex-1 bg-primary-light rounded-lg p-2">
                                    <div className="bg-accent text-center">
                                        <p className="text-xl font-bold text-slate-900 mb-4">
                                            Màn hình
                                        </p>
                                    </div>
                                    <ul className="grid grid-rows-16 grid-cols-10 gap-1">
                                        {movieSeatListHtml}
                                    </ul>
                                </div>
                            )}
                            <div className="flex-1 bg-primary-light rounded-lg p-2 lg:ml-2">
                                <h3 className="text-xl text-center font-bold p-2">
                                    Thông tin vé & thanh toán
                                </h3>
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-sm text-left rtl:text-right">
                                        <tbody>
                                            <tr>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium whitespace-nowrap"
                                                >
                                                    Ngày chiếu & giờ chiếu
                                                </th>
                                                <td className="px-6 py-4">
                                                    $2999
                                                </td>
                                            </tr>
                                            <tr>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium whitespace-nowrap"
                                                >
                                                    Cụm rạp
                                                </th>
                                                <td className="px-6 py-4">
                                                    $1999
                                                </td>
                                            </tr>
                                            <tr>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium whitespace-nowrap "
                                                >
                                                    Rạp
                                                </th>
                                                <td className="px-6 py-4">
                                                    $99
                                                </td>
                                            </tr>
                                            <tr>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium whitespace-nowrap "
                                                >
                                                    Ghế
                                                </th>
                                                <td className="px-6 py-4">
                                                    <ul>{selectedSeatHtml}</ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr className="font-semibold">
                                                <th
                                                    scope="row"
                                                    className="px-6 py-3 text-base"
                                                >
                                                    Total
                                                </th>
                                                <td className="px-6 py-3">
                                                    21,000
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <ul className="flex gap-4 p-2 m-2">
                            <li>
                                <button className="relative">
                                    <i className="fa-solid fa-couch"></i>
                                </button>
                                <span className="text-sm"> Ghế thường</span>
                            </li>
                            <li>
                                <button className="relative">
                                    <i className="fa-solid fa-couch text-red-600"></i>
                                </button>
                                <span className="text-sm"> Ghế VIP</span>
                            </li>
                            <li>
                                <button className="relative">
                                    <i className="fa-solid fa-couch"></i>
                                    <i className="fa-solid fa-x fa-xl absolute left-[1px] top-[10px] text-red-500"></i>
                                </button>
                                <span className="text-sm"> Ghế đã đặt</span>
                            </li>
                            <li>
                                <button className="relative">
                                    <i className="fa-solid fa-couch text-lime-600"></i>
                                </button>
                                <span className="text-sm"> Ghế đang chọn</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-around md:justify-normal">
                        <Link
                            to={`/booking/123`}
                            className="px-6 py-2 my-8 md:mr-4 inline-block font-bold text-xl md:text-2xl rounded-lg bg-secondary"
                            onClick={() => {
                                console.log(selectedSeat);
                            }}
                        >
                            Xác nhận đặt vé
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
