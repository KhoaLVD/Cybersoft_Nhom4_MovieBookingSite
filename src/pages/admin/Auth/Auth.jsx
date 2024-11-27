import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actLogin } from "./duck/reducer"
import { useNavigate } from "react-router-dom"
export default function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const props = useSelector((state)=> state.adminLoginReducer);
  
  useEffect(()=>{
    if(props.data){
      navigate("/admin/dashboard");
    }
  }, [props.data])

  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleOnChange = (e) =>{
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleLogin = (e) =>{
    e.preventDefault();
    dispatch(actLogin(user));
  }

  if(props.loading) return <p>Loading...</p>;

  const renderError = () => {
    const { error } = props;
    if(error) {
      return(
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{error.data.content}</span>
        </div>
      )
    }
  }

  return (
    <>
      <h1 className="max-w-sm mx-auto text-2xl font-bold text-blue-600 mt-4">Login page</h1>
      <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-8">
        {renderError()}
        <div className="mb-5">
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input type='text' name='taiKhoan' 
          onChange={handleOnChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" id="password" name='matKhau'
          onChange={handleOnChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      </form>
    </>
  )
}
