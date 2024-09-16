import "./infocard.css";
import { FaPen } from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth";
import { setLogOut } from "../../context/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ThreeCircles } from "react-loader-spinner";
import { useState } from "react";
import { Link } from "react-router-dom";
const InfoCard = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(setLogOut());
        navigateTo("/");
        setLoading(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      style={{ border: `1px solid rgba(47, 51, 54, var(--opacity))` }}
      className="InfoCard shadow-md  bg-[--bg-color] text-[--primary-color]"
    >
      <div className="InfoHead">
        <h4>Your Info</h4>
        <FaPen />
      </div>

      <div className="info font-bold">
        <span>Skai</span>
      </div>

      <div className="info font-bold">
        <span>Junior Frontend Engineer</span>
      </div>

      <div className="info font-bold">
        <Link to="/">
          <span>Home</span>
        </Link>
      </div>

      <button onClick={handleLogOut} className="rounded-sm py-2 bg-red-600 hover:opacity-50">
        {!loading ? (
          "Log out"
        ) : (
          <ThreeCircles
            visible={true}
            height="30"
            width="30"
            color="#fff"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
      </button>
    </div>
  );
};

export default InfoCard;
