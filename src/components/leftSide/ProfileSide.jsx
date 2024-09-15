import Logosearch from "../LogoSearch/LogoSearch";
import PeopleCard from "../PeopleCard/PeopleCard";
import ProfileCard from "../profileCard/ProfileCard";
import "./profileSide.css";
import { useContext } from "react";
import AppContext from "../Global/AppContext";
import InfoCard from "../infoCard/InfoCard";
const ProfileSide = () => {
 
  return (
    <div className="profileSide h-[98svh]">
      <Logosearch />
      <ProfileCard   />
      <PeopleCard />
    </div>
  );
};

export default ProfileSide;
