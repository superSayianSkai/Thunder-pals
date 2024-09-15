import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "../src/components/Profile/Profile";
import Home from "../src/components/Home/Home";
import { useSelector } from "react-redux";
import Auth from "../src/components/Auth/Auth";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
import { Navigate } from "react-router-dom";
const App = () => {
  const userToken = useSelector((state) => state.user?.userToken);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute Component={Home} />,
    },
    {
      path: "/login",
      element: userToken ? <Navigate to="/" /> : <Auth />,
    },

    {
      path: "profile",
      element: <ProtectedRoute Component={Profile} />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
