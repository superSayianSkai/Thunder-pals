import { CgProfile } from "react-icons/cg";
import { BiMessage } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { GoHome } from "react-icons/go";
import MobileIcons from "./MobileIcons";
import { FaPlus } from "react-icons/fa";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { Link } from "react-router-dom";
import { CiVideoOn } from "react-icons/ci";


const BottomNav = ({ setShow }) => {
  const customStyles = {
    backgroundColor: "black",
    borderRadius: "9999px",
    color: "white",
    padding: "4px",
    width: "35px",
    height: "35px",
  };
  const showThePanel = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="fixed w-[100%] py-3 px-2 h-[60px] justify-between items-center bg-white ed bottom-0 flex border-t-[1px] border-slate-400">
      <Link to="/">
        <button className="bg-transparent text-black text-2xl">
          <GoHome className="text-3xl" />
        </button>
      </Link>

      <CiVideoOn className="text-3xl"/>

      <button onClick={showThePanel} className="bg-transparent">
        <MobileIcons styles={customStyles} Icons={FaPlus} />
      </button>

      <BiMessage className="text-3xl"/>

      <Link to="./profile">
        <button className="bg-transparent text-black">
          <CgProfile className="text-3xl"/>
        </button>
      </Link>
    </div>
  );
};
export default BottomNav;
