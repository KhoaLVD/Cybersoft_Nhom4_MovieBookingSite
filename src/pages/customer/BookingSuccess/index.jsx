import { Link } from "react-router-dom";
export default function BookingSuccess() {
    return (
        <div className="py-4 px-2 md:py-16 lg:px-40">
            <div className="mb-4">
                <h2 className="mb-4 xl:mb-0 text-4xl text-center font-bold">
                    Đặt vé thành công
                </h2>
                <Link className="text-center block text-accent" to="/">
                    Quay lại trang chủ
                </Link>
            </div>
        </div>
    );
}
