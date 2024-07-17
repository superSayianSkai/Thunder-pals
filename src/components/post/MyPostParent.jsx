
import "../post/post.css";
import MyPost from "./MyPost";

const MyPostParent = ({ myData }) => {
  return (
    <div className="posts">
      {myData.map((post, id) => {
        console.log(post.id);
        return <MyPost post={post} key={id} />;
      })}
    </div>
  );
};

export default MyPostParent;
