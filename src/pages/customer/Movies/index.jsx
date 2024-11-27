import LeftSideBar from "../../../components/customer/LeftSideBar";
import MoviesGrid from "../../../components/customer/MoviesGrid";
import { useSearchParams } from "react-router-dom";

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();

    let heThongRap = searchParams.get("heThongRap");

    return (
        <div className="bg-zinc-800 flex flex-col md:flex-row px-2 py-4 md:py-10 md:px-6">
            <LeftSideBar />
            <MoviesGrid />
        </div>
    );
}
