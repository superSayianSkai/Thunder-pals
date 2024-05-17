import Logosearch from "../LogoSearch/LogoSearch";
import PeopleCard from "../PeopleCard/PeopleCard";
import ProfileCard from "../profileCard/ProfileCard";
import "./profileSide.css";
const ProfileSide= () => {
  return (
   <div className="profileSide">
   <Logosearch/>
   <ProfileCard/>
   <PeopleCard/>
   </div>
  )
}

export default ProfileSide