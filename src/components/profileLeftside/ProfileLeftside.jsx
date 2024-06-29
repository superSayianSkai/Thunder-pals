import Logosearch from "../LogoSearch/LogoSearch";
import PeopleCard from "../PeopleCard/PeopleCard";
import "./profileLeftside.css";
import InfoCard from "../infoCard/InfoCard";

const ProfileLeftside = () => {
  return (
    <div className="profileSide">
      <Logosearch/>
      <InfoCard/>
      <PeopleCard/>
    </div>
  );
};

export default ProfileLeftside;
