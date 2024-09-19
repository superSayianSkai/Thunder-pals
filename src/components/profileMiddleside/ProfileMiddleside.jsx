import ProfileCard from "../profileCard/ProfileCard";
import "../middleSide/middleSide.css";
import MyPostParent from "../post/MyPostParent";
import { myData } from "../../Data/myData";
import AppContext from "../Global/AppContext";

const ProfileMiddleside = () => {
  return (
    <div className="postSide h-[92svh] sm:h-[100svh] md:h-[100svh] lg:h-[100svh]">
      <ProfileCard location="profilePage" />
      <MyPostParent myData={myData} />
    </div>
  );
};

export default ProfileMiddleside;
