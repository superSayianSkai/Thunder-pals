import ProfileCard from "../profileCard/ProfileCard";
import "../middleSide/middleSide.css";
import MyPostParent from "../post/MyPostParent";
import { myData } from "../../Data/myData";
const ProfileMiddleside = () => {
  return (
    <div className="postSide border-r-[1px] border-l-[1px] border-[#2F3336] border-opacity-80">
      <ProfileCard location="profilePage" />
      <MyPostParent myData={myData} />
    </div>
  );
};

export default ProfileMiddleside;
