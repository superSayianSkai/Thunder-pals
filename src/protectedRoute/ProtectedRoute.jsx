import { Navigate } from "react-router";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ Component }) => {
  const userInfo = useSelector((state) => state.user);
  console.log(userInfo);

  return userInfo?.userToken ? <Component /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
