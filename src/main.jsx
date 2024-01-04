import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FiltersProvider } from "./context/Filters.jsx";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </BrowserRouter>
);
