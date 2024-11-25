import { BrowserRouter, Routes } from "react-router-dom";
import renderRoutes from "./routes";
import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>{renderRoutes()}</Routes>
        </BrowserRouter>
    );
}

export default App;
