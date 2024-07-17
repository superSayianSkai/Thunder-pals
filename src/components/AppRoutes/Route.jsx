import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";

// import MobilePostPanel from "../MobilePostPanel/MobilePostPanel";
// import MobilePostNav from "../MobilePostPanel/MobilePostNav";

const Route = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Route;
