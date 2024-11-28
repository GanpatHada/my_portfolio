import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Project from "./pages/projects/Project";
import App from "./App";
import About from "./pages/about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ]
  },
  
]);
