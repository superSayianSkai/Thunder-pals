import { HiArrowSmLeft } from "react-icons/hi";
import PeopleCard from "../PeopleCard/PeopleCard";
import { Link } from "react-router-dom";
import "../leftSide/profileSide.css";
import { useSelector } from "react-redux";
import InfoCard from "../infoCard/InfoCard";
const ProfileSide = () => {
  const userInfo = useSelector((state) => state.user);
  return (
    <div
      style={{
        borderRight: `1px solid rgba(47, 51, 54, var(--opacity))`,
      }}
      className="profileSide "
    >

      <div className="flex gap-4 items-center">
        <Link to="/">
          <HiArrowSmLeft className="text-3xl text-[--primary-color] hover:bg-slate-100 hover:rounded-xl hover:text-[--primary-color]" />
        </Link>
        <div className="flex flex-col justify-center">
          <span className="text-xl text-[--primary-color]">@ {userInfo.userName}</span>
          <p className="text-[13px] text-[--primary-color]">3 posts</p>
        </div>
      </div>

      <InfoCard />

      <PeopleCard />
    </div>
  );
};

export default ProfileSide;
