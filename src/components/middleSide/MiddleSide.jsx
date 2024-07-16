import PostPanel from "../PostPanel/PostPanel";
import Posts from "../posts/Posts";
import "./middleSide.css";
import AppContext from "../Global/AppContext";
import { useContext } from "react";
import SingleHeader from "../SingleHeader/SingleHeader";
const MiddleSide = ({ show, setShow }) => {
  const { posts, setPost, thirdResize } = useContext(AppContext);

  return (
    <div className="postSide">
      {thirdResize ? <PostPanel setPost={setPost} /> : <SingleHeader />}
      {show ? (
        <PostPanel show={show} setShow={setShow} setPost={setPost} />
      ) : (
        ""
      )}
      <Posts postData={posts} />
    </div>
  );
};

export default MiddleSide;
