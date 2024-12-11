import Sidebar from "../../components/admin/Sidebar/Sidebar"
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AdminTemplate() {
  const props = useSelector((state) => state.adminLoginReducer);
  if(!props.data){
    //redirect ve auth
    return <Navigate to="/auth" />;
  }
  return (
    <div>
        <Sidebar />
        <Outlet />
    </div>
  )
}
