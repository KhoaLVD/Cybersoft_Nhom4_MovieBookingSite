import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "flowbite";
import { fetchBookingById } from "@/utils/redux/thunk/fetchBookingById";
import { postTicket } from "@/utils/redux/thunk/postTicket";
import { useCustomerAuth } from "@/utils/context/customerAuthContext";
import Spinner from "@/components/customer/Spinner";

export default function Booking() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { customer } = useCustomerAuth();
    const { id: maLichChieu } = useParams();

    const [postTicketSuccess, setPostTicketSuccess] = useState(false);

    const postTicketResponse = useSelector(
        (state) => state.postTicketReducer.data
    );

    const postTicketLoading = useSelector(
        (state) => state.postTicketReducer.isLoading
    );

    const bookingResponse = useSelector((state) => state.bookingPage.data);
    const bookingLoading = useSelector((state) => state.bookingPage.loading);

    const [selectedSeat, setSelectedSeat] = useState([]);

    useEffect(() => {
        if (postTicketResponse && postTicketResponse.statusCode === 200) {
            setPostTicketSuccess(true);
        }
    }, [postTicketResponse, navigate]);

    useEffect(() => {
        dispatch(fetchBookingById(maLichChieu));
    }, [dispatch, maLichChieu]);

    const handleSeatClick = useCallback((seat) => {
        setSelectedSeat((prev) => {
            const isSeatSelected = prev.some(
                (item) => item.maGhe === seat.maGhe
            );
            if (isSeatSelected) {
                return prev.filter((item) => item.maGhe !== seat.maGhe);
            } else {
                return [...prev, seat];
            }
        });
    }, []);

    const movieInfo = bookingResponse?.thongTinPhim || {};
    const movieSeatList = useMemo(
        () => bookingResponse?.danhSachGhe || [],
        [bookingResponse]
    );

    const movieSeatListHtml = useMemo(() => {
        return movieSeatList.map((seat) => (
            <li
                key={seat.maGhe}
                className="py-1 flex flex-col justify-center items-center"
            >
                <button
                    className={`relative ${
                        seat.daDat ? "cursor-not-allowed" : ""
                    }`}
                    disabled={seat.daDat}
                    onClick={() => handleSeatClick(seat)}
                >
                    <i
                        className={`fa-solid fa-couch ${
                            seat.loaiGhe === "Vip" ? "text-red-600" : ""
                        } ${
                            selectedSeat.some(
                                (item) => item.maGhe === seat.maGhe
                            )
                                ? "text-lime-600"
                                : ""
                        }`}
                    ></i>
                    {seat.daDat && (
                        <i className="fa-solid fa-x fa-xl absolute left-[1px] top-[10px] text-red-500"></i>
                    )}
                </button>
                <span className="text-sm">{seat.tenGhe}</span>
            </li>
        ));
    }, [movieSeatList, handleSeatClick, selectedSeat]);

    const selectedSeatHtml = useMemo(() => {
        return selectedSeat.map((item) => (
            <li key={item.maGhe}>
                <span>Số ghế: {item.tenGhe}, </span>
                <span>Giá tiền: {item.giaVe}</span>
            </li>
        ));
    }, [selectedSeat]);

    const total = useMemo(() => {
        return selectedSeat.reduce((acc, item) => acc + item.giaVe, 0);
    }, [selectedSeat]);

    const ticketInfo = useMemo(() => {
        return {
            maLichChieu,
            danhSachVe: selectedSeat.map((item) => ({
                maGhe: item.maGhe,
                giaVe: item.giaVe,
            })),
        };
    }, [maLichChieu, selectedSeat]);

    const warningLoginPopupElem = document.getElementById("login-warning");

    const warningLoginPopup = useMemo(
        () =>
            new Modal(
                warningLoginPopupElem,
                {},
                { id: "login-warning", override: true }
            ),
        [warningLoginPopupElem]
    );

    const ticketBookingModalElem = document.getElementById(
        "ticket-booking-confirm"
    );

    const ticketBookingModal = useMemo(
        () =>
            new Modal(
                ticketBookingModalElem,
                {},
                { id: "ticket-booking-confirm", override: true }
            ),
        [ticketBookingModalElem]
    );

    const handleConfirmBooking = useCallback(() => {
        if (!customer) {
            ticketBookingModal.hide();
            warningLoginPopup.show();
            return;
        }
        dispatch(postTicket(ticketInfo));
    }, [customer, dispatch, ticketInfo, warningLoginPopup, ticketBookingModal]);

    let ticketBookingModalContent = "";

    if (!postTicketSuccess) {
        if (postTicketLoading) {
            ticketBookingModalContent = (
                <div className="flex flex-col items-center gap-4 m-4">
                    <p className="text-slate-950">
                        Xin vui lòng chờ trong giây lát
                    </p>
                    <Spinner />
                </div>
            );
        } else {
            ticketBookingModalContent = (
                <>
                    <h3 className="mb-5 text-lg font-normal text-gray-500">
                        Xác nhận đặt vé
                    </h3>
                    <button
                        type="button"
                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                        onClick={handleConfirmBooking}
                    >
                        Đồng ý
                    </button>
                    <button
                        type="button"
                        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                        onClick={() => {
                            ticketBookingModal.hide();
                        }}
                    >
                        Quay lại
                    </button>
                </>
            );
        }
    } else {
        ticketBookingModalContent = (
            <>
                <h3 className="mb-5 text-lg font-normal text-lime-500">
                    Đặt vé thành công.
                </h3>
                <button
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                    onClick={() => {
                        ticketBookingModal.hide();
                        navigate("/", { replace: true });
                        return;
                    }}
                >
                    Quay lại trang chủ
                </button>
            </>
        );
    }

    return (
        <>
            <div className="py-4 px-2 md:py-16 lg:px-40">
                {bookingLoading ? (
                    <Spinner />
                ) : (
                    <>
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
                                        <span className="font-bold">
                                            Địa chỉ:
                                        </span>
                                        <span className="text-sm">
                                            {" "}
                                            {movieInfo.diaChi}
                                        </span>
                                    </p>
                                    <p className="py-1">
                                        <span className="font-bold">
                                            Ngày chiếu:
                                        </span>
                                        <span className="text-sm">
                                            {" "}
                                            {movieInfo.ngayChieu}
                                        </span>
                                    </p>
                                    <p className="py-1">
                                        <span className="font-bold">
                                            Giờ chiếu:
                                        </span>
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
                                                    {movieInfo
                                                        ? movieInfo.tenCumRap
                                                        : null}
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
                                                    {movieInfo
                                                        ? movieInfo.tenRap
                                                        : null}
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
                                                <td className="px-2 py-4">
                                                    {total} VNĐ
                                                </td>
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
                                            onClick={() =>
                                                ticketBookingModal.show()
                                            }
                                            disabled={selectedSeat.length === 0}
                                        >
                                            Xác nhận đặt vé
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Login warning popup */}
            <div
                id="login-warning"
                tabIndex={-1}
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow">
                        <button
                            type="button"
                            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            onClick={() => {
                                warningLoginPopup.hide();
                            }}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-4 md:p-5 text-center">
                            <svg
                                className="mx-auto mb-4 text-gray-400 w-12 h-12"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500">
                                Vui lòng đăng nhập để đặt vé!
                            </h3>
                            <button
                                type="button"
                                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                onClick={() => {
                                    warningLoginPopup.hide();
                                    navigate("/login");
                                    return;
                                }}
                            >
                                OK
                            </button>
                            <button
                                type="button"
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                                onClick={() => {
                                    warningLoginPopup.hide();
                                }}
                            >
                                Quay lại
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ticket booking confirm modal */}
            <div
                id="ticket-booking-confirm"
                tabIndex={-1}
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow">
                        <button
                            type="button"
                            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            onClick={() => {
                                ticketBookingModal.hide();
                            }}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-4 md:p-5 text-center">
                            {!postTicketLoading ? (
                                ticketBookingModalContent
                            ) : (
                                <div className="flex flex-col items-center gap-4 m-4">
                                    <p className="text-slate-950">
                                        Xin vui lòng chờ trong giây lát
                                    </p>
                                    <Spinner />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
