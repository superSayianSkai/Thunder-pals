import ProfileCard from "../profileCard/ProfileCard";
import "../middleSide/middleSide.css";
import MyPostParent from "../post/MyPostParent";
import { myData } from "../../Data/myData";
const ProfileMiddleside = () => {
  return (
    <div className="postSide">
      <ProfileCard location="profilePage" />
      <MyPostParent myData={myData} />
    </div>
  );
};

export default ProfileMiddleside;
