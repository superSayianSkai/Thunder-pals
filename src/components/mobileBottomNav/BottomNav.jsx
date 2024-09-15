import { CgProfile } from "react-icons/cg";
import { BiMessage } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";

const BottomNav = ({ setShow }) => {
  const showThePanel = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="fixed w-[100%] py-3 px-2 h-[60px] justify-between items-center bottom-0 flex border-t-[1px] border-slate-400 bg-[--bg-color] text-[--primary-color] border-opacity-40">
      <Link to="/">
        <button className="bg-transparent">
          <GoHome className="text-3xl text-[--primary-color]" />
        </button>
      </Link>

      <BiMessage className="text-3xl" />

      <FaPlus className="text-3xl" onClick={showThePanel} />

      <IoSettingsOutline className="text-3xl" />

      <Link to="./profile">
        <button className="bg-transparent">
          <CgProfile className="text-3xl text-[--primary-color]" />
        </button>
      </Link>
    </div>
  );
};
export default BottomNav;
