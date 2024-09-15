import "../../styles/Auth.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeCircles } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { setUser } from "../../context/authSlice";
const Login = ({ setChangeUp }) => {
  const dispatch = useDispatch();
  const [userEmail, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate("/");
  const handleUserEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleUserPwd = (e) => {
    setPwd(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    setLoading(true);
    signInWithEmailAndPassword(auth, userEmail, pwd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(
          setUser({
            _id: user.id,
            userName: user.displayName,
            userImage: user.photoURL,
            userToken: user.accessToken,
          })
        );

        navigateTo("/");
        toast.success("login Successful");
        setTimeout(() => {
          setLoading(false);
        }, 2000);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setLoading(false);
        if (errorCode === "auth/invalid-email") {
          toast.error("invalid email");
        } else if (errorCode === "auth/invalid-credential") {
          toast.error("invalid password");
        }
      });
  };
  return (
    <div className="a-right">
      <form onSubmit={handleSubmit} className="form-container">
        <h1 className="font-bold text-4xl mb-2">Login</h1>
        <div>
          <input
            value={userEmail}
            type="text"
            className="outline-none p-[15px] bg-[#E1E1CA]  rounded-2xl"
            placeholder="Email"
            onChange={handleUserEmail}
          />
        </div>
        <div>
          <input
            value={pwd}
            type="text"
            className="outline-none p-[15px] bg-[#E1E1CA] rounded-2xl"
            placeholder="Password"
            onChange={handleUserPwd}
          />
        </div>
        <button className="button-auth rounded-2xl ">
          {!loading ? (
            "Sign in"
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
        <span className="flex gap-2">
          <p>Already have an account? </p>
          <a href="#" onClick={setChangeUp}>
            Sign up
          </a>
        </span>
      </form>
    </div>
  );
};

export default Login;
