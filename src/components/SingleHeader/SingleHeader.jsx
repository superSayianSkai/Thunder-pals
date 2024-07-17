import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons";
import thunder from "../../assets/img/thunder.jpeg";
import { CiSearch } from "react-icons/ci";
import { IoSunnySharp } from "react-icons/io5";
import "./singleHeader.css";
import { useContext, useState } from "react";
import AppContext from "../Global/AppContext";
const SingleHeader = () => {
  const { setTheTheme } = useContext(AppContext);
  const [changeTheme, setTheme] = useState(false);
  const changeTheTheme = () => {
    setTheme((prev) => !prev);
    setTheTheme((prev) => !prev);
  };
  return (
    <div className=" px-2 py-2 flex justify-between items-center  bg-white w-[100%] single">
      <div className="flex gap-1 justify-center items-center">
        <img className="w-[25px] rounded-md" src={thunder} alt="" />
        <h3 className="text-xl font-extrabold text-black leading-10">
          Thunderpals
        </h3>
      </div>

      <div className="flex gap-3 items-center">
        {changeTheme ? (
          <button className="bg-transparent" onClick={changeTheTheme}>
            <FontAwesomeIcon
              className="font-icon2 text-2xl text-black"
              icon={faCloudBolt}
            />
          </button>
        ) : (
          <button
            className="bg-transparent text-black"
            onClick={changeTheTheme}
          >
            <IoSunnySharp className="font-icon2 text-2xl text-black" />
          </button>
        )}

        <CiSearch className="text-2xl" />
      </div>
    </div>
  );
};

export default SingleHeader;
