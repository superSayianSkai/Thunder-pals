import ProfileCard from "../profileCard/ProfileCard";
import Posts from "../posts/Posts";
import "../middleSide/middleSide.css";
import { postData } from "../../Data/postData";
import { useContext } from "react";
import AppContext from "../Global/AppContext";

const ProfileMiddleside = () => {
  const { profile } = useContext(AppContext);
  return (
    <div className="postSide ">
      <ProfileCard location="profilePage" />
      <Posts postData={postData} />
    </div>
  );
};

export default ProfileMiddleside;
