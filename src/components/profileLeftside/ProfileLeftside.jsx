import Logosearch from "../LogoSearch/LogoSearch";
import PeopleCard from "../PeopleCard/PeopleCard";

import "../leftSide/profileSide.css";
import { useContext } from "react";
import AppContext from "../Global/AppContext";
import InfoCard from "../infoCard/InfoCard";
const ProfileSide = () => {
  const { profile, setProfile } = useContext(AppContext);
  return (
    <div className="profileSide">
      <Logosearch />

      <InfoCard />

      <PeopleCard />
    </div>
  );
};

export default ProfileSide;
