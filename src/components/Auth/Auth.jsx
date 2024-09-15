import { useState } from "react";
import thunder from "../../assets/img/thunder.jpeg";
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
  const [change, setChange] = useState(true);
  const setChangeUp = () => {
    setChange(!change);
  };
  console.log(change);
  return (
    <div className="auth-body relative">
      <div className="auth-form">
        <div className="a-left">
          <img
            src="https://media.tenor.com/I0w9VW2gaL8AAAAi/lightning-bolt-thunder.gif"
            alt=""
          />
          <div className="title">
            <span>THUNDER </span>
            <span>PALS</span>
          </div>
        </div>
        {change ? (
          <Login setChangeUp={setChangeUp} />
        ) : (
          <SignUp setChangeUp={setChangeUp} />
        )}
      </div>
    </div>
  );
};

export default Auth;
