import Header from "../components/customer/Header";
import Footer from "../components/customer/Footer";
import { Outlet } from "react-router-dom";

export default function CustomerLayout() {
    return (
        <div className="page-wrapper">
            {/* Header */}
            <Header />

            {/* Main content */}
            <main className="main-content">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
