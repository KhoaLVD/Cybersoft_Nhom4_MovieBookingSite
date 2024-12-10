import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookingById } from "@/utils/redux/thunk/fetchBookingById";
import { postTicket } from "@/utils/redux/thunk/postTicket";
import { use } from "react";

export default function Booking() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let params = useParams();

    const maLichChieu = params.id;

    const postTicketResponse = useSelector(
        (state) => state.postTicketReducer.data
    );

    let postTicketSuceess = false;
    if (postTicketResponse) {
        postTicketSuceess = postTicketResponse.statusCode === 200;
    }

    useEffect(() => {
        if (postTicketSuceess) {
            postTicketSuceess = false;
            navigate("/booking-success");
        }
    }, [postTicketSuceess]);

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
    let total = 0;
    let ticketInfo = {};
    if (selectedSeat) {
        selectedSeatHtml = selectedSeat.map((item) => {
            return (
                <li key={item.maGhe}>
                    <span>Số ghế: {item.tenGhe} </span>
                    <span>Giá tiền: {item.giaVe}</span>
                </li>
            );
        });
        total = selectedSeat.reduce((acc, item) => {
            return acc + item.giaVe;
        }, 0);

        const ticketList = selectedSeat.map((item) => {
            return {
                maGhe: item.maGhe,
                giaVe: item.giaVe,
            };
        });

        ticketInfo = {
            maLichChieu: maLichChieu,
            danhSachVe: ticketList,
        };
    }

    useEffect(() => {
        dispatch(fetchBookingById(maLichChieu));
        postTicketSuceess = false;
    }, []);

    return (
        <div className="py-4 px-2 md:py-16 lg:px-40">
            {movieInfo && (
                <>
                    <div className="mb-4">
                        <h2 className="mb-4 xl:mb-0 text-4xl text-center font-bold">
                            {movieInfo.tenPhim}
                        </h2>
                    </div>
                    <div>
                        <p className="py-1">
                            <span className="font-bold">Rạp:</span>
                            <span className="text-sm">
                                {" "}
                                {movieInfo.tenCumRap}
                            </span>
                        </p>
                        <p className="py-1">
                            <span className="font-bold">Địa chỉ:</span>
                            <span className="text-sm"> {movieInfo.diaChi}</span>
                        </p>
                        <p className="py-1">
                            <span className="font-bold">Ngày chiếu:</span>
                            <span className="text-sm">
                                {" "}
                                {movieInfo.ngayChieu}
                            </span>
                        </p>
                        <p className="py-1">
                            <span className="font-bold">Giờ chiếu:</span>
                            <span className="text-sm">
                                {" "}
                                {movieInfo.gioChieu}
                            </span>
                        </p>
                    </div>
                </>
            )}
            <div className="flex flex-col md:flex-row mt-8">
                {movieSeatList && (
                    <div className="flex-[0.6] bg-primary-light rounded-lg p-2">
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
                <div className="flex-[0.4] px-6 mt-8 md:mt-0 md:ml-8 bg-primary-light rounded-lg">
                    <h3 className="text-xl text-center font-bold p-2">
                        Thông tin vé & thanh toán
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <tbody>
                                <tr>
                                    <th
                                        scope="row"
                                        className="px-2 py-4 font-medium whitespace-nowrap"
                                    >
                                        Ngày chiếu & giờ chiếu
                                    </th>
                                    <td className="px-2 py-4 text-sm">
                                        {movieInfo
                                            ? movieInfo.ngayChieu +
                                              " " +
                                              movieInfo.gioChieu
                                            : null}
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        scope="row"
                                        className="px-2 py-4 font-medium whitespace-nowrap"
                                    >
                                        Cụm rạp
                                    </th>
                                    <td className="px-2 py-4 text-sm">
                                        {movieInfo ? movieInfo.tenCumRap : null}
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        scope="row"
                                        className="px-2 py-4 font-medium whitespace-nowrap "
                                    >
                                        Rạp
                                    </th>
                                    <td className="px-2 py-4 text-sm">
                                        {movieInfo ? movieInfo.tenRap : null}
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        scope="row"
                                        className="px-2 py-4 font-medium whitespace-nowrap "
                                    >
                                        Ghế
                                    </th>
                                    <td className="px-2 py-4 text-sm">
                                        <ul>{selectedSeatHtml}</ul>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="font-semibold">
                                    <th
                                        scope="row"
                                        className="px-2 py-3 text-base"
                                    >
                                        Total
                                    </th>
                                    <td className="px-2 py-4">{total} VNĐ</td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="flex flex-col items-center">
                            <button
                                className={`px-6 py-2 my-8 md:mr-4 inline-block font-bold text-xl md:text-2xl rounded-lg bg-secondary ${
                                    selectedSeat.length === 0
                                        ? "cursor-not-allowed bg-slate-400"
                                        : ""
                                }`}
                                onClick={() => {
                                    if (
                                        !localStorage.getItem("CUSTOMER_LOGGED")
                                    ) {
                                        navigate("/login");
                                        return;
                                    }
                                    dispatch(postTicket(ticketInfo));
                                }}
                                disabled={selectedSeat.length === 0}
                            >
                                Xác nhận đặt vé
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
