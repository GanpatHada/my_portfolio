import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import "./utils.css";
import SideNavProvider from "./context/SideNavContext.jsx";
createRoot(document.getElementById("root")).render(
  <SideNavProvider>
    <App />
  </SideNavProvider>
);
