import DeleteMovie from "../DeleteMovie/DeleteMovie";

import { Link } from "react-router-dom";

export default function Movies(props) {
    const { movie } = props;

    return (
        <>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                    scope="row"
                    className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    {movie.maPhim}
                </th>
                <td className="px-2 py-4">{movie.tenPhim}</td>
                <td className="px-2 py-4">{movie.biDanh}</td>
                <td className="px-6 py-4">
                    <img className="max-w-full" src={movie.hinhAnh} alt="" />
                </td>
                <td className="px-12 py-4">
                    {movie.moTa.length > 50
                        ? movie.moTa.slice(0, 50) + "..."
                        : movie.moTa}
                </td>
                <td className="px-2 py-4">{movie.ngayKhoiChieu}</td>
                <td className="px-2 py-4">{movie.danhGia}</td>
                <td className="flex flex-col lg:flex-row gap-2 lg:gap-1 px-6 py-4">
                    <Link
                        to={`/admin/add-movie-schedule/${movie.maPhim}`}
                        className="text-white bg-amber-500 hover:bg-green-800 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2"
                    >
                        Thêm lịch chiếu
                    </Link>
                    <button
                        type="button"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        Green
                    </button>
                    <DeleteMovie key={movie.maPhim} movie={movie} />
                </td>
                {/* <td className="px-6 py-4">
                    {movie.dangChieu}
                    </td>
                    <td className="px-6 py-4">
                    {movie.sapChieu}
                    </td> */}
            </tr>
        </>
    );
}
