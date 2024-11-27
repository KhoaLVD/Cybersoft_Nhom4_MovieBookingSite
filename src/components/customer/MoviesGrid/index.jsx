import { Link } from "react-router-dom";
import Pagination from "./Pagination";

export default function MoviesGrid() {
    return (
        <section className="flex-[0.7] px-4 md:mx-auto">
            <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-5 gap-x-6 gap-y-4 md:gap-6">
                <div className="flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <img
                        className="rounded-t-lg h-[13rem] md:h-[15rem]"
                        src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
                        alt=""
                    />
                    <Link
                        to={`/movie/${1}`}
                        className="bg-secondary-dark text-white text-center py-2 px-4 rounded-b-lg"
                    >
                        Xem chi tiết
                    </Link>
                </div>
                <div className="flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <img
                        className="rounded-t-lg h-[13rem] md:h-[15rem]"
                        src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
                        alt=""
                    />
                    <Link
                        to={`/movie/${1}`}
                        className="bg-secondary-dark text-white text-center py-2 px-4 rounded-b-lg"
                    >
                        Xem chi tiết
                    </Link>
                </div>
                <div className="flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <img
                        className="rounded-t-lg h-[13rem] md:h-[15rem]"
                        src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
                        alt=""
                    />
                    <Link
                        to={`/movie/${1}`}
                        className="bg-secondary-dark text-white text-center py-2 px-4 rounded-b-lg"
                    >
                        Xem chi tiết
                    </Link>
                </div>
                <div className="flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <img
                        className="rounded-t-lg h-[13rem] md:h-[15rem]"
                        src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
                        alt=""
                    />
                    <Link
                        to={`/movie/${1}`}
                        className="bg-secondary-dark text-white text-center py-2 px-4 rounded-b-lg"
                    >
                        Xem chi tiết
                    </Link>
                </div>
                <div className="flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <img
                        className="rounded-t-lg h-[13rem] md:h-[15rem]"
                        src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
                        alt=""
                    />
                    <Link
                        to={`/movie/${1}`}
                        className="bg-secondary-dark text-white text-center py-2 px-4 rounded-b-lg"
                    >
                        Xem chi tiết
                    </Link>
                </div>
                <div className="flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <img
                        className="rounded-t-lg h-[13rem] md:h-[15rem]"
                        src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
                        alt=""
                    />
                    <Link
                        to={`/movie/${1}`}
                        className="bg-secondary-dark text-white text-center py-2 px-4 rounded-b-lg"
                    >
                        Xem chi tiết
                    </Link>
                </div>
                <div className="flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <img
                        className="rounded-t-lg h-[13rem] md:h-[15rem]"
                        src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
                        alt=""
                    />
                    <Link
                        to={`/movie/${1}`}
                        className="bg-secondary-dark text-white text-center py-2 px-4 rounded-b-lg"
                    >
                        Xem chi tiết
                    </Link>
                </div>
                <div className="flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <img
                        className="rounded-t-lg h-[13rem] md:h-[15rem]"
                        src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
                        alt=""
                    />
                    <Link
                        to={`/movie/${1}`}
                        className="bg-secondary-dark text-white text-center py-2 px-4 rounded-b-lg"
                    >
                        Xem chi tiết
                    </Link>
                </div>
            </div>
            <Pagination />
        </section>
    );
}
