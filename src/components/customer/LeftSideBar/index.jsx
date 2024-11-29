import { Link } from "react-router-dom";

export default function LeftSideBar() {
    return (
        <aside className="md:flex-[0.2] py-6 px-2 md:px-10 md:mx-auto md:shadow-[0_35px_60px_10px_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-center py-6 px-2">
                Danh sách phim
            </h2>

            <nav>
                <p className="text-lg m-4">Lọc theo hệ thống rạp</p>
                <ul className="flex justify-start items-center gap-2">
                    <li>
                        <Link
                            to={{
                                pathname: "/movies",
                                search: "?heThongRap=CGV",
                            }}
                        >
                            <img
                                className="w-10"
                                src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                                alt="CGV"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: "/movies",
                                search: "?heThongRap=lotte",
                            }}
                        >
                            <img
                                className="w-10"
                                src="https://movienew.cybersoft.edu.vn/hinhanh/lotte-cinema.png"
                                alt="Lotte"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: "/movies",
                                search: "?heThongRap=BHD",
                            }}
                        >
                            <img
                                className="w-10"
                                src="https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
                                alt="BHD"
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
