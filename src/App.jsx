import { BrowserRouter, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import renderRoutes from "./routes";
import Spinner from "@/components/customer/Spinner";
import "./App.scss";

function App() {
    return (
        <Suspense fallback={<Spinner />}>
            <BrowserRouter>
                <Routes>{renderRoutes()}</Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
