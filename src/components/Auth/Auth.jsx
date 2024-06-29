import { useState } from "react";
import thunder from "../../assets/img/thunder.jpeg";
import "./Auth.css";
const Auth = () => {
  const [change, setChange] = useState(true);
  const setChangeUp = () => {
    setChange(!change);
  };
  console.log(change);
  return (
    <div className="auth-body">
      <div className="auth-form">
        <div className="a-left">
          <img src={thunder} alt="" />
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

const Login = ({ setChangeUp }) => {
  return (
    <div className="a-right">
      <form className="form-container">
        <h1>Login</h1>
        <div>
          <input type="text" className="inputForm" placeholder="Email" />
        </div>
        <div>
          <input type="text" className="inputForm" placeholder="Password" />
        </div>
        <button className="button-auth">Sign up</button>
        <span>
          <p>Already have an account? </p>
          <a href="#" onClick={setChangeUp}>
            Sign in
          </a>
        </span>
      </form>
    </div>
  );
};

const SignUp = ({ setChangeUp }) => {
  return (
    <div className="a-right">
      <form className="form-container">
        <h1>SIGN UP</h1>
        <div>
          <input type="text" className="inputForm" placeholder="Lastname" />
          <input type="text" className="inputForm" placeholder="Firstname" />
        </div>

        <div>
          <input type="text" className="inputForm" placeholder="Username" />
        </div>

        <div>
          <input type="text" className="inputForm" placeholder="Password" />
          <div>
            <input
              type="text"
              className="inputForm"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <button className="button-auth">Sign up</button>

        <span>
          <p>Already have an account? </p>
          <a href="#" onClick={setChangeUp}>
            Sign up
          </a>
        </span>
      </form>
    </div>
  );
};

export default Auth;
