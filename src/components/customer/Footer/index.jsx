export default function Footer() {
    return (
        <footer className="container mx-auto py-10 px-4 md:px-0">
            <div className="flex flex-col items-center md:flex-row text-center pb-10">
                <h3 className="text-red-600 text-2xl font-bold flex-1 p-6">
                    <a href="#">MovieBooking</a>
                </h3>
                <div className="flex-1 p-6">
                    <h3 className="text-white text-lg font-bold">Danh mục</h3>
                    <ul>
                        <li className="mt-2">
                            <a className="text-gray-400">Danh sách phim</a>
                        </li>
                        <li className="mt-2">
                            <a className="text-gray-400">Rạp chiếu</a>
                        </li>
                        <li className="mt-2">
                            <a className="text-gray-400">Điều khoản</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 p-6">
                    <h3 className="text-white text-lg font-bold">Liên hệ</h3>
                    <p className="text-gray-400 mt-2 text-left">
                        <span className="block">
                            Địa chỉ: 123 ABC, XYZ, QWE
                        </span>
                        <span className="block">Email:</span>
                        <span className="block">Phone: 0123456789</span>
                    </p>
                </div>
            </div>
            <div className="text-center py-10 text-gray-400 border-t">
                <p>© 2024 MovieBooking. All Rights Reserved.</p>
                <p className="mt-2">
                    Follow us on:
                    <a href="#" className="text-red-600 hover:underline">
                        Facebook
                    </a>{" "}
                    |
                    <a href="#" className="text-red-600 hover:underline">
                        Twitter
                    </a>
                </p>
            </div>
        </footer>
    );
}
