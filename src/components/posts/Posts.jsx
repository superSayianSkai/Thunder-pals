import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { postData } from "../../Data/postData";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Post from "../post/Post";
import "./Posts.css";

const Posts = () => {
  return (
    <div className="posts">
      {postData.map((post, id) => {
        return (
          <Post data={post} id={id}/>
        );
      })}
    </div>
  );
};

export default Posts;
