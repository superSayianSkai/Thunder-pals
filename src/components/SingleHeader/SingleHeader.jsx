import thunder from "../../assets/img/thunder.jpeg";
import { CiSearch } from "react-icons/ci";

import { useContext, useState } from "react";
import AppContext from "../Global/AppContext";
import Theme from "../Theme/Theme";
const SingleHeader = () => {
  const { setTheTheme } = useContext(AppContext);
  const [changeTheme, setTheme] = useState(false);
  const changeTheTheme = () => {
    setTheme((prev) => !prev);
    setTheTheme((prev) => !prev);
  };
  return (
    <div className="border-r-[0] border-l-[0] px-2 py-2 flex justify-between items-center w-[100%]  bg-[--bg-color] text-[--primary-color] border-[1px] border-b-[#2F3336] border-opacity-40">
      <div className="flex gap-4 justify-center items-center">
        <img className="w-[25px] rounded-md" src={thunder} alt="" />
        <h3 className="text-xl font-extrabold leading-10">Thunderpals</h3>
      </div>

      <div className="flex gap-3 items-center">
        <Theme />

        <CiSearch className="text-2xl" />
      </div>
    </div>
  );
};

export default SingleHeader;
