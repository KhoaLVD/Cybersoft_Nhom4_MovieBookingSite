import Sidebar from "../../components/admin/Sidebar/Sidebar"
import { Outlet } from "react-router-dom"
export default function AdminTemplate() {
  return (
    <div>
        <Sidebar />
        <Outlet />
    </div>
  )
}
