import PostPanel from "../PostPanel/PostPanel";
import Posts from "../posts/Posts";
import "./middleSide.css";
import AppContext from "../Global/AppContext";
import { useContext } from "react";
import SingleHeader from "../SingleHeader/SingleHeader";

const MiddleSide = () => {
  const { thirdResize } = useContext(AppContext);
  return (
    <div className="postSide">
        {
          thirdResize ? <PostPanel />:<SingleHeader/>
        }
  
      <Posts />
    </div>
  );
};

export default MiddleSide;
