import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "../Home/Home";
// import MobilePostPanel from "../MobilePostPanel/MobilePostPanel";
// import MobilePostNav from "../MobilePostPanel/MobilePostNav";

const Route = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Route;
