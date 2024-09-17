import "./infocard.css";
import { HiOutlinePencil } from "react-icons/hi";
import { getAuth, signOut } from "firebase/auth";
import { setLogOut } from "../../context/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ThreeCircles } from "react-loader-spinner";
import { useState } from "react";
import { useSelector } from "react-redux";

import ProfileModal from "../ProfileModal/ProfileModal";
const InfoCard = () => {
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleLogOut = () => {
    setLoading(true);
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(setLogOut());
        navigateTo("/");
        setLoading(false);
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
        <h4 className="font-bold text-[18px] mb-2">Your Info</h4>
        <HiOutlinePencil className="text-2xl" onClick={() => setOpen(true)} />
      </div>

      <div className="info">
        <span>{userInfo.userName}</span>
      </div>

      <div className="text-[14px]">{userInfo.name ? `@${userInfo.name}` : "add your name"}</div>

      <div className="info">
        <span>{userInfo.userDesc}</span>
      </div>

      <button
        onClick={handleLogOut}
        className="rounded-sm py-2 bg-blue-700 hover:opacity-50"
      >
        {!loading ? (
          <p>Log out</p>
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
      {open && <ProfileModal setOpen={setOpen} />}
    </div>
  );
};

export default InfoCard;
