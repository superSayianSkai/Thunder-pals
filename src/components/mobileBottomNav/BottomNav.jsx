import { CgProfile } from "react-icons/cg";
import { BiMessage } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";

const BottomNav = () => {
  return (
    <div className="fixed w-[100%] py-3 px-2 h-[60px] justify-between items-center bottom-0 flex border-t-[1px] border-slate-400 bg-[--bg-color] text-[--primary-color] border-opacity-40">
      <Link to="/">
        <button className="bg-transparent"> 
          <GoHome className="text-2xl text-[--primary-color]" />
        </button>
      </Link>
      <Link to="/rough">
        <BiMessage className="text-2xl" />
      </Link>
      <Link to="/mobilePostPanel">
        <FaPlus className="text-2xl" />
      </Link>
      <Link to="/setting">
        <IoSettingsOutline className="text-2xl" />
      </Link>
      <Link to="./profile">
        <button className="bg-transparent">
          <CgProfile className="text-2xl text-[--primary-color]" />
        </button>
      </Link>
    </div>
  );
};
export default BottomNav;
