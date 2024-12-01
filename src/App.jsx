import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Outlet, RouterProvider } from "react-router-dom";
import MobileNav from "./components/mobile_nav/MobileNav";
import { useContext, useState } from "react";
import { SideNavContext } from "./context/SideNavContext";
const App = () => {
  return (
    <main>
      <Navbar />
      <MobileNav />
      <div id="content">
        <Outlet />
      </div>
    </main>
  );
};

export default App;
