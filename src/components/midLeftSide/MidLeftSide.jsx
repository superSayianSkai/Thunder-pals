import { GoHome } from "react-icons/go";
import MidLeftSideIcons from "./MidLeftSideIcons";
import { MdOutlineExplore } from "react-icons/md";
import thunder from "../../assets/img/thunder.jpeg";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessage } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosThunderstorm } from "react-icons/io";

  
const MidLeftSide = () => {
  

  return (
    <div className="flex flex-col items-center gap-12 py-10">
      <div className="image-container">
        <img src={thunder} alt="eyes" />
      </div>

      <div className="flex flex-col gap-6 ">
        <MidLeftSideIcons Icon={GoHome} />
        <MidLeftSideIcons Icon={MdOutlineExplore} />
        <MidLeftSideIcons Icon={CgProfile} />
        <MidLeftSideIcons Icon={BiMessage} />
        <MidLeftSideIcons Icon={IoMdNotificationsOutline} />
        <MidLeftSideIcons Icon={IoSettingsOutline} />
       <MidLeftSideIcons Icon={IoIosThunderstorm} />

      </div>
    </div>
  );
};

export default MidLeftSide;
