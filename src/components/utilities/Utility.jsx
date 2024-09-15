import "./Utility.css";
import { IoSettingsOutline } from "react-icons/io5";
import { LuBell } from "react-icons/lu";
import { IoChatboxOutline } from "react-icons/io5";

import Theme from "../Theme/Theme";
const Utility = () => {
  return (
    <div className="utility items-center  bg-[--bg-color] text-[--primary-color] border-[1px] border-[#2F3336] border-opacity-80">
      <Theme />
      <IoSettingsOutline className="font-icon2" />
      <LuBell className="font-icon2" />
      <IoChatboxOutline className="font-icon2" />
    </div>
  );
};

export default Utility;
