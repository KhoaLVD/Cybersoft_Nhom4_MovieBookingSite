export default function Pagination() {
    return (
        <div>
            <nav className="flex justify-center items-center gap-4 mt-6">
                <button className="bg-secondary-dark text-white py-2 px-4 rounded-lg">
                    {"<"}
                </button>
                <button className="bg-secondary-dark text-white py-2 px-4 rounded-lg">
                    1
                </button>
                <button className="bg-secondary-dark text-white py-2 px-4 rounded-lg">
                    2
                </button>
                <button className="bg-secondary-dark text-white py-2 px-4 rounded-lg">
                    3
                </button>
                <button className="bg-secondary-dark text-white py-2 px-4 rounded-lg">
                    {">"}
                </button>
            </nav>
        </div>
    );
}
