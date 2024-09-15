import PostPanel from "../PostPanel/PostPanel";
import Posts from "../posts/Posts";
import "./middleSide.css";
import AppContext from "../Global/AppContext";
import { useContext } from "react";
import SingleHeader from "../SingleHeader/SingleHeader";
const MiddleSide = () => {
  const { posts, setPost, thirdResize } = useContext(AppContext);

  return (
    <div className="postSide border-r-[1px] border-l-[1px] border-[#2F3336] border-opacity-80">
      {thirdResize ? <PostPanel setPost={setPost} /> : <SingleHeader />}
      <Posts postData={posts} />
    </div>
  );
};

export default MiddleSide;
