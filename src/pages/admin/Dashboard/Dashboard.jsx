import { useSelector } from "react-redux";

export default function Dashboard() {
  const props = useSelector((state)=> state.adminLoginReducer);
  console.log(props);

  return (
    <div>
      <div className="p-4 sm:ml-64">
          <h1>Hello {props.data.hoTen}, have a good day!</h1>
      </div>
    </div>
  )
}
