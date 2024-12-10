import { useDispatch } from "react-redux"

export default function Movies(props) {
    const {movie} = props;
    const dispatch = useDispatch();
  return (
    <>
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {movie.maPhim}
                    </th>
                    <td className="px-2 py-4">
                    {movie.tenPhim}
                    </td>
                    <td className="px-2 py-4">
                    {movie.biDanh}
                    </td>
                    <td className="px-6 py-4">
                    <iframe src={movie.trailer} >
                    
                    </iframe>
                    </td>
                    <td className="px-6 py-4">
                        <img className="max-w-full" src={movie.hinhAnh} alt="" />
                    </td>
                    <td className="px-12 py-4">
                    {movie.moTa}
                    </td>
                    <td className="px-2 py-4">
                    {movie.ngayKhoiChieu}
                    </td>
                    <td className="px-2 py-4">
                    {movie.danhGia}
                    </td>
                    <td className="px-6 py-4">
                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
                    <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
                    </td>
                    {/* <td className="px-6 py-4">
                    {movie.dangChieu}
                    </td>
                    <td className="px-6 py-4">
                    {movie.sapChieu}
                    </td> */}
                </tr>
    </>
  )
}
