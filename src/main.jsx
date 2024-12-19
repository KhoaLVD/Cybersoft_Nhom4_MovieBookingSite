import { Profiler } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createRoot } from "react-dom/client";
import "../node_modules/flowbite/dist/flowbite.js";
import "./index.scss";
import App from "./App.jsx";
import store from "./utils/redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <Profiler id="App" onRender={() => {}}>
            <App />
        </Profiler>
    </Provider>
);
