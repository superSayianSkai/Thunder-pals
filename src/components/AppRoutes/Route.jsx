import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "../Home/Home";
import MobilePostPanel from "../MobilePostPanel/MobilePostPanel";

const Route = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<MobilePostPanel/>),
    },
    {
      // path: "/post",
      // element: (<MobilePostPanel/>),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Route;
