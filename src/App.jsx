import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Outlet, RouterProvider } from "react-router-dom";
const App = () => {
  return (
    <main>
      <Navbar />
      <div id="content">
        <Outlet/>
      </div>
    </main>
  );
};

export default App;
