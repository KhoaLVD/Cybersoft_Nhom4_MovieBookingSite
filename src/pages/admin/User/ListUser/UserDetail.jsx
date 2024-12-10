import { deleteUser } from "../DeleteUser/reducer"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function UserDetail(props) {
    const { user } = props;
    const dispatch = useDispatch();
  return (
    <>
        <tr key={user.taiKhoan} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.taiKhoan}
                    </th>
                    <td className="px-6 py-4">
                    {user.hoTen}
                    </td>
                    <td className="px-6 py-4">
                    {user.email}
                    </td>
                    <td className="px-6 py-4">
                    {user.soDT}
                    </td>
                    <td className="px-6 py-4">
                    {user.maLoaiNguoiDung}
                    </td>
                    <td className="px-6 py-4">
                    <Link to={`/admin/update-user/${user.taiKhoan}`}>
                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Chỉnh sửa</button>
                    </Link>
                    <button type="button" 
                    onClick={() => {dispatch(deleteUser(user.taiKhoan))}}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Xoá</button>
                    </td>
                </tr>
    </>
  )
}
