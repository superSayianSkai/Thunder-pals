import PostPanel from "../PostPanel/PostPanel";
import Posts from "../posts/Posts";
import "./middleSide.css";
import AppContext from "../Global/AppContext";
import { useContext } from "react";
import SingleHeader from "../SingleHeader/SingleHeader";
import BottomNav from "../mobileBottomNav/BottomNav";
import MobilePostPanel from "../MobilePostPanel/MobilePostPanel";
const MiddleSide = () => {
  const { posts, setPost, thirdResize, setShowPostPanel, showPostPanel } =
    useContext(AppContext);

  return (
    <>
      {showPostPanel ? (
        <MobilePostPanel
          className="bg-[--bg-color]"
          setPost={setPost}
          setShowPostPanel={setShowPostPanel}
        />
      ) : (
        <div className="postSide border-r-[1px] border-l-[1px] border-[#2F3336] border-opacity-80 bg-[--bg-color]">
          {thirdResize ? <PostPanel setPost={setPost} /> : <SingleHeader />}
          <Posts postData={posts} />
          {!thirdResize && <BottomNav setShow={setShowPostPanel} />}
        </div>
      )}
    </>
  );
};

export default MiddleSide;
