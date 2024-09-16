import "../../styles/Auth.css";
import { useState } from "react";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { LiaEyeSolid } from "react-icons/lia";
import { toast } from "react-toastify";
import { ThreeCircles } from "react-loader-spinner";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../../context/authSlice";
const SignUp = ({ setChangeUp }) => {
  const auth = getAuth();

  //use state for app
  const navigateTo = useNavigate("/");
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [toggleVisibility, setToggleVisisbility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userDesc, setUserDesc] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
    console.log(userName);
  };
  const handlePwd = (e) => {
    setPwd(e.target.value);
    console.log(pwd);
  };
  const handleConfirmPwd = (e) => {
    setConfirmPwd(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleUserDesc = (e) => {
    setUserDesc(e.target.value);
  };
  const handlePwdVisibility = () => {
    setToggleVisisbility((prev) => !prev);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (pwd === confirmPwd) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, userEmail, pwd)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: "https://www.pinterest.com/pin/4081455904310080/",
          });
          console.log(userCredential);
          const user = userCredential.user;
          dispatch(
            setUser({
              _id: user.uid,
              userName: userName,
              userImage: "https://www.pinterest.com/pin/4081455904310080",
              userToken: user.accessToken,
              userDesc: userDesc,
            })
          );
          console.log(user);

          // Signed up
          setLoading(false);
          toast.success("user Registered successfully");
          setTimeout(() => {
            setChangeUp();
          }, 3000);

          navigateTo("/");

          // ...
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          if (errorCode === "auth/email-already-in-use") {
            toast.error("User exists ");
            setLoading(false);
            // ..
          }
        });
    } else {
      toast.error("Password Don't match!", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleFormSubmit} className="text-black ">
        <h1 className="font-bold text-4xl text-center mb-6 text-black ">
          SIGN UP
        </h1>

        <div className="flex flex-col gap-4">
          <div>
            <input
              value={userName}
              type="text"
              className="outline-none p-[15px] border-[1px] border-black  rounded-full text-black"
              placeholder="Username"
              onChange={handleUserName}
            />
          </div>

          <div>
            <input
              value={userEmail}
              type="text"
              className="outline-none p-[15px] border-[1px] border-black text-black rounded-full"
              placeholder="Email"
              onChange={handleEmail}
            />
          </div>
          <div>
            <input
              value={userDesc}
              type="text"
              className="outline-none p-[15px] border-[1px] border-black text-black rounded-full"
              placeholder="Something short that describes you"
              onChange={handleUserDesc}
            />
          </div>
          <div className="">
            <input
              type={toggleVisibility ? "text" : "password"}
              className="outline-none p-[15px] border-[1px] border-black  text-black  rounded-full"
              value={pwd}
              placeholder="Password"
              onChange={handlePwd}
              required
            />
          </div>
          <div>
            <input
              type={toggleVisibility ? "text" : "password"}
              className="outline-none p-[15px] border-[1px] border-black  text-black bg-white  rounded-full"
              value={confirmPwd}
              placeholder="Confirm Password"
              onChange={handleConfirmPwd}
              required
            />

            <div
              onClick={handlePwdVisibility}
              className="flex gap-2 justify-end pr-2 items-center"
            >
              <p className="text-[12px]">Check password</p>
              {toggleVisibility ? (
                <LiaEyeSolid className=" text-[md] cursor-pointer" />
              ) : (
                <HiOutlineEyeSlash className=" text-md  cursor-pointer" />
              )}
            </div>
          </div>
        </div>

        <button className="button-auth rounded-full mt-2">
          {!loading ? (
            "Sign up"
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

        <span className="flex gap-2 justify-center items-center mt-3">
          <p>Already have an account? </p>
          <a
            className="opacity-80 text-blue-600"
            href="#"
            onClick={setChangeUp}
          >
            Sign in
          </a>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
