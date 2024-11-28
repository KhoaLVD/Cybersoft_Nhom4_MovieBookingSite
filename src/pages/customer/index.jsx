import Header from "../../components/customer/Header";
import Footer from "../../components/customer/Footer";
import { Outlet } from "react-router-dom";
import "../../styles/customer/main.scss";

export default function CustomerTemplate() {
    return (
        <div className="page-wrapper bg-primary">
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
