import { CgProfile } from "react-icons/cg";
import { BiMessage } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { GoHome } from "react-icons/go";
import MobileIcons from "./MobileIcons";
import { FaPlus } from "react-icons/fa";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
const BottomNav = () => {
  const customStyles = {
    backgroundColor: 'black',
    borderRadius: '9999px', 
    color:'white',
    padding:'4px',
    width:'35px',
    height:'35px'
   };
  return (
    <div className="fixed w-[100%] p-3 h-[60px] justify-around items-center bg-white ed bottom-0 flex ">
      <MobileIcons Icons={GoHome} />
      <MobileIcons Icons={MdOutlineExplore} />
      <MobileIcons styles={customStyles} Icons={FaPlus} />
      <MobileIcons Icons={BiMessage} />
      <MobileIcons Icons={CgProfile} />
    </div>
  );
};
export default BottomNav;
