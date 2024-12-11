export default function Contact() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-red-600">
                    Liên hệ với chúng tôi
                </h1>
                <p className="text-gray-200 mt-2">
                    Chúng tôi rất mong nhận được phản hồi từ bạn! Điền vào mẫu
                    dưới đây hoặc liên hệ với chúng tôi theo thông tin liên lạc
                    của chúng tôi.
                </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-700"
                        >
                            Họ và tên
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nguyen Van A"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@mail.com"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-sm font-semibold text-gray-700"
                        >
                            Nội dung
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Tôi đang gặp vấn đề ..."
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-[20%] block mx-auto bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        Gửi
                    </button>
                </form>
            </div>

            <div className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-500">
                    Chi tiết liên hệ của chúng tôi
                </h2>
                <p className="mt-4 text-gray-600">
                    <strong>Địa chỉ:</strong> 123 Movie Street, Filmtown, FL
                    45678
                </p>
                <p className="mt-2 text-gray-600">
                    <strong>Số điện thoại:</strong> +1 (123) 456-7890
                </p>
                <p className="mt-2 text-gray-600">
                    <strong>Email:</strong>{" "}
                    <a
                        href="mailto:support@moviebooking.com"
                        className="text-red-600 hover:underline"
                    >
                        support@moviebooking.com
                    </a>
                </p>
            </div>
        </div>
    );
}
