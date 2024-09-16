import { useState } from "react";
import lion from "../../assets/img/auth/hero.png";
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
  const [change, setChange] = useState(true);
  const setChangeUp = () => {
    setChange(!change);
  };

  return (
    <div className=" relative h-[100vh] lg:bg-black">
      <div className="flex overflow-hidden  justify-between w-[100%]  h-[100%]bg-black">
        <div className="lg:flex flex-col bg-black w-[50%] items-center justify-center hidden">
          <img className="w-[400px] " src={lion} alt="picture of thundercat" />
          {/* <div className="flex text-2xl font-bold mt-5 flex-col justify-center items-center">
            <span className="text-[20px]">Join the Thunder </span>
            <div className="flex ">
              <span>Become the Thunder</span>

              <img
                className="w-[20px]"
                src="https://media.tenor.com/I0w9VW2gaL8AAAAi/lightning-bolt-thunder.gif"
                alt=""
              />
            </div>
          </div> */}
        </div>
        <div className="w-[100%] h-[100vh] px-2 flex items-center justify-center lg:w-[50%] bg-white flex-col ">
          {change ? (
            <Login setChangeUp={setChangeUp} />
          ) : (
            <SignUp setChangeUp={setChangeUp} />
          )}
          <p className="text-[15px] bottom-6 absolute text-black text-center mt-8">
            Join The <span className="font-bold italic">Thunder</span>, Become
            the <span className="font-bold italic">Thunder.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
