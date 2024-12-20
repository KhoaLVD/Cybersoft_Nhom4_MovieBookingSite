import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
        movie && (
            <div className="relative bg-gray-800 p-1 mx-2 md:p-2 rounded-lg h-[22rem] md:h-[30rem]">
                <img
                    src={movie.hinhAnh}
                    alt={movie.tenPhim}
                    className="h-[60%] md:h-[65%] xl:h-[70%] w-full object-cover rounded-lg"
                />
                <div className="flex flex-col gap-1 md:gap-2 px-2">
                    <h3 className="mt-1 md:mt-4 text-white text-lg font-bold truncate max-w-full">
                        {movie.tenPhim}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                        Ngày chiếu:
                        {new Date(movie.ngayKhoiChieu).toLocaleDateString()}
                    </p>
                    <div className="flex items-center justify-around">
                        <Link
                            to={`/movie/${movie.maPhim}`}
                            className="mt-2 bg-secondary-dark py-2 px-4 text-white rounded-lg"
                        >
                            Xem chi tiết
                        </Link>
                    </div>
                </div>
            </div>
        )
    );
}
