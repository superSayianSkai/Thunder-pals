import Logosearch from "../LogoSearch/LogoSearch";
import PeopleCard from "../PeopleCard/PeopleCard";
import ProfileCard from "../profileCard/ProfileCard";
import "./profileSide.css";

const ProfileSide = () => {
  return (
    <div
      style={{
        borderRight: `1px solid rgba(47, 51, 54, var(--opacity))`,
      }}
      className="profileSide h-[98svh]"
    >
      <Logosearch />
      <ProfileCard />
      <PeopleCard />
    </div>
  );
};

export default ProfileSide;
