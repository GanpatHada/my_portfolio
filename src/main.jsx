import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import "./utils.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import  SideNavProvider  from "./context/SideNavContext.jsx";
createRoot(document.getElementById("root")).render(
  <SideNavProvider>
    <RouterProvider router={router} />
  </SideNavProvider>
);
