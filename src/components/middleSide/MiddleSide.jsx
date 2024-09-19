import PostPanel from "../PostPanel/PostPanel";
import Posts from "../posts/Posts";
import "./middleSide.css";
import AppContext from "../Global/AppContext";
import { useContext } from "react";
import SingleHeader from "../SingleHeader/SingleHeader";
import BottomNav from "../mobileBottomNav/BottomNav";

const MiddleSide = () => {
  const { posts, setPost, thirdResize, setShowPostPanel,  } =
    useContext(AppContext);

  return (
    <>
      <div
        className="postSide
          bg-[--bg-color] pb-2 h-[92svh] sm:h-[100svh] md:h-[100svh] lg:h-[100svh]"
      >
        {thirdResize ? <PostPanel setPost={setPost} /> : <SingleHeader />}
        <Posts postData={posts} />
        {!thirdResize && <BottomNav setShow={setShowPostPanel} />}
      </div>
    </>
  );
};

export default MiddleSide;
