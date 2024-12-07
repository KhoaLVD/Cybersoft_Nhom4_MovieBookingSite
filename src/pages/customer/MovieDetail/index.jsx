import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import MoviesCarousel from "@/components/customer/MoviesCarousel";
import MovieTrailerModal from "@/components/customer/MovieTrailerModal";

export default function MovieDetail() {
    // Get movie ID from URL
    let { id } = useParams();

    let [showModal, setShowModal] = useState(true);

    let handleCloseShowModal = () => {
        setShowModal(false);
    };

    let moviesShowingCarousel = [
        {
            maPhim: 1283,
            tenPhim: "Lật mặt 48h",
            hinhAnh:
                "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg",
            ngayKhoiChieu: "2024-10-10T00:00:00",
        },
        {
            maPhim: 1318,
            tenPhim: "Lừa đểu gặp lừa đảo",
            hinhAnh:
                "https://movienew.cybersoft.edu.vn/hinhanh/lua-deu-gap-lua-daoo_gp01.jpg",
            ngayKhoiChieu: "2024-08-26T14:47:53.63",
        },
        {
            maPhim: 1319,
            tenPhim: "Lừa đểu gặp lừa đảo",
            hinhAnh:
                "https://movienew.cybersoft.edu.vn/hinhanh/lua-deu-gap-lua-daoo_gp01.jpg",
            ngayKhoiChieu: "2024-08-26T14:47:53.63",
        },
        {
            maPhim: 2123,
            tenPhim: "Lừa đểu gặp lừa đảo",
            hinhAnh:
                "https://movienew.cybersoft.edu.vn/hinhanh/lua-deu-gap-lua-daoo_gp01.jpg",
            ngayKhoiChieu: "2024-08-26T14:47:53.63",
        },
        {
            maPhim: 424,
            tenPhim: "Lừa đểu gặp lừa đảo",
            hinhAnh:
                "https://movienew.cybersoft.edu.vn/hinhanh/lua-deu-gap-lua-daoo_gp01.jpg",
            ngayKhoiChieu: "2024-08-26T14:47:53.63",
        },
        {
            maPhim: 118,
            tenPhim: "Lừa đểu gặp lừa đảo",
            hinhAnh:
                "https://movienew.cybersoft.edu.vn/hinhanh/lua-deu-gap-lua-daoo_gp01.jpg",
            ngayKhoiChieu: "2024-08-26T14:47:53.63",
        },
    ];

    return (
        <div className="md:py-16 lg:px-40">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center md:w-1/3 px-6 md:px-6">
                    <img
                        className="w-full rounded-lg"
                        src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
                        alt="Lat Mat 48H"
                    />
                    <button
                        data-modal-target="static-modal"
                        data-modal-toggle="static-modal"
                        className="px-6 py-2 mt-7 inline-block font-bold text-xl md:text-2xl rounded-lg bg-accent"
                        onClick={() => setShowModal(true)}
                    >
                        Xem trailer
                    </button>
                </div>
                <div className="md:w-2/3 px-6">
                    <div className="xl:flex md:gap-4 mb-8">
                        <h2 className="mb-4 xl:mb-0 text-4xl font-bold">
                            Lat Mat 48H
                        </h2>
                        <span className="mx-2 xl:mx-0 top-6 right-10 px-4 py-2 bg-accent text-primary-light font-semibold rounded-sm">
                            Hot
                        </span>
                        <span className="mx-2 xl:mx-0 top-6 right-10 px-4 py-2 bg-lime-500 text-primary-light font-semibold rounded-sm">
                            Đang chiếu
                        </span>
                        <span className="mx-2 xl:mx-0 top-6 right-10 px-4 py-2 bg-sky-500 text-primary-light font-semibold rounded-sm">
                            Sắp chiếu
                        </span>
                    </div>
                    <div>
                        <p className="py-1">
                            <span className="font-bold">Ngày công chiếu:</span>
                            <span> 12/02/2021</span>
                        </p>
                        <p className="py-1">
                            <span className="font-bold">Đánh giá:</span>
                            <span> 10/10</span>
                        </p>
                        <p className="py-1">
                            <span className="font-bold">Nội dung: </span>
                            <span className="text-sm">
                                Lat Mat 48H là câu chuyện về cuộc hành trình đầy
                                hấp dẫ ngoài giờ làm việc của anh chàng nhân
                                viên văn phòng Lâm Vỹ Dạ.
                            </span>
                        </p>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl font-bold p-2">
                            Chọn hệ thống rạp
                        </h3>
                        <div className="bg-primary-light rounded-lg p-4">
                            <ul className="flex gap-6">
                                <li className="py-1">
                                    <button>
                                        <img
                                            className="w-10"
                                            src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                                            alt="CGV"
                                        />
                                    </button>
                                </li>
                                <li className="py-1">
                                    <button>
                                        <img
                                            className="w-10"
                                            src="https://movienew.cybersoft.edu.vn/hinhanh/lotte-cinema.png"
                                            alt="Lotte"
                                        />
                                    </button>
                                </li>
                                <li className="py-1">
                                    <button>
                                        <img
                                            className="w-10"
                                            src="https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
                                            alt="BHD"
                                        />
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <h3 className="text-xl font-bold p-2 mt-4">Chọn rạp</h3>
                        <div className="bg-primary-light mt-2 md:mt-0 rounded-lg px-4 py-2">
                            <ul className="grid grid-cols-3 grid-rows-2 gap-2">
                                <li className="py-1">
                                    <button className="w-full py-2 px-1 bg-slate-50 text-primary-light text-sm font-bold md:hover:bg-slate-400 md:hover:transition md:duration-500 rounded-lg">
                                        BHD Star Cineplex - 3/2
                                    </button>
                                </li>
                                <li className="py-1">
                                    <button className="w-full py-2 px-1 bg-slate-50 text-primary-light text-sm font-bold md:hover:bg-slate-400 md:hover:transition md:duration-500 rounded-lg">
                                        BHD Star Vincom
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <h3 className="text-xl font-bold p-2 mt-4">
                            Chọn giờ xem
                        </h3>
                        <div className="bg-primary-light mt-2 md:mt-0 rounded-lg px-4 py-2">
                            <ul className="grid grid-cols-3 md:grid-cols-6 grid-rows-3 gap-2">
                                <li className="py-1">
                                    <button className="w-full bg-slate-50 md:hover:bg-slate-400 md:hover:transition md:duration-500  text-primary-light font-bold rounded-lg py-2">
                                        22h50
                                    </button>
                                </li>
                                <li className="py-1">
                                    <button className="w-full bg-slate-50 md:hover:bg-slate-400 md:hover:transition md:duration-500  text-primary-light font-bold rounded-lg py-2">
                                        23h50
                                    </button>
                                </li>
                                <li className="py-1">
                                    <button className="w-full bg-slate-50 md:hover:bg-slate-400 md:hover:transition md:duration-500  text-primary-light font-bold rounded-lg py-2">
                                        1h50
                                    </button>
                                </li>
                                <li className="py-1">
                                    <button className="w-full bg-slate-50 md:hover:bg-slate-400 md:hover:transition md:duration-500  text-primary-light font-bold rounded-lg py-2">
                                        2h50
                                    </button>
                                </li>
                                <li className="py-1">
                                    <button className="w-full bg-slate-50 md:hover:bg-slate-400 md:hover:transition md:duration-500  text-primary-light font-bold rounded-lg py-2">
                                        3h50
                                    </button>
                                </li>
                                <li className="py-1">
                                    <button className="w-full bg-slate-50 md:hover:bg-slate-400 md:hover:transition md:duration-500  text-primary-light font-bold rounded-lg py-2">
                                        4h50
                                    </button>
                                </li>
                                <li className="py-1">
                                    <button className="w-full bg-slate-50 md:hover:bg-slate-400 md:hover:transition md:duration-500  text-primary-light font-bold rounded-lg py-2">
                                        4h50
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-around md:justify-normal">
                        <Link
                            to={`/booking/123`}
                            className="px-6 py-2 mt-8 md:mr-4 inline-block font-bold text-xl md:text-2xl rounded-lg bg-secondary"
                        >
                            Đặt vé ngay
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                {/* Hot Movies */}
                <MoviesCarousel
                    label="Phim Hot"
                    wrapperClass="container mx-auto py-10 px-8 md:px-4 md:px-0"
                    movies={moviesShowingCarousel}
                />
            </div>

            {/* Trailer modal */}
            {showModal && (
                <MovieTrailerModal
                    trailerSrc="https://www.youtube.com/watch?v=kBY2k3G6LsM"
                    handleCloseShowModal={handleCloseShowModal}
                />
            )}
        </div>
    );
}
