import "./infocard.css";
import { FaPen } from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth";
import { setLogOut } from "../../context/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ThreeCircles } from "react-loader-spinner";
import { useState } from "react";
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
    <div className="InfoCard shadow-md border-[1px] border-[#2F3336] border-opacity-55  bg-[--bg-color] text-[--primary-color]">
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
        <span>Home</span>
      </div>

      <button onClick={handleLogOut} className="rounded-sm py-2 bg-red-600">
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
