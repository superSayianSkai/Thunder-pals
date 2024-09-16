import { GoHome } from "react-icons/go";
import MidLeftSideIcons from "./MidLeftSideIcons";
import { MdOutlineExplore } from "react-icons/md";
import thunder from "../../assets/img/thunder.jpeg";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessage } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import Theme from "../Theme/Theme";
import { Link } from "react-router-dom";
const MidLeftSide = () => {
  return (
    <div
      style={{
        borderRight: `1px solid rgba(47, 51, 54, var(--opacity))`,
      }}
      className="utility items-center justify-start bg-[--bg-color] text-[--primary-color] border-opacity-80 flex flex-col  gap-12 py-10 "
    >
      <div className="image-container">
        <Link to="/">
          <img src={thunder} alt="eyes" />
        </Link>
      </div>

      <div className="flex flex-col gap-6 ">
        <Link to="/">
          <MidLeftSideIcons Icon={GoHome} />
        </Link>
        <MidLeftSideIcons Icon={MdOutlineExplore} />
        <Link to="/profile">
          <MidLeftSideIcons Icon={CgProfile} />
        </Link>
        <MidLeftSideIcons Icon={BiMessage} />
        <MidLeftSideIcons Icon={IoMdNotificationsOutline} />
        <MidLeftSideIcons Icon={IoSettingsOutline} />
        <Theme />
      </div>
    </div>
  );
};

export default MidLeftSide;
