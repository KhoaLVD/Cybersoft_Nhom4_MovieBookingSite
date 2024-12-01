import { useSelector } from "react-redux";

export default function Dashboard() {
  const props = useSelector((state)=> state.adminLoginReducer);
  console.log(props);

  return (
    <div>
      <div className="p-4 sm:ml-64">
          <h1 className="text-black ">Hello <span className="text-blue-600 font-bold">{props.data.hoTen}</span>, have a good day!</h1>
      </div>
    </div>
  )
}
