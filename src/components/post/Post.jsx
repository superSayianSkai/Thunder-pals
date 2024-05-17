import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import "./post.css";
const Post = ({ data }) => {
  return (
    <>
      <div className="post">

        <div className="span-kids">
    
            <img className="profileImage" src={data.profieImage} alt="" />
          

          <div className="span-kids-sub">
            <h2>{data.name}</h2>
            <p>{data.desc}</p>
          </div>
        </div>

        <img className="main-image" src={data.img} alt="" />

        <div className="insidePost">
          <div className="font-icon1-box">
            <div className="font-icon1-sub-box">
              <FontAwesomeIcon className="font-icon1" icon={faHeart} />
              <div>{data.likes}</div>
            </div>
            <div className="font-icon1-sub-box">
              <FontAwesomeIcon className="font-icon1" icon={faComment} />
              <div>{data.comments}</div>
            </div>

            <div className="font-icon1-sub-box">
              <FontAwesomeIcon className="font-icon1" icon={faShare} />
              <div>{data.shares}</div>
            </div>
          </div>

          {/* <p>{data.likes}</p>
  
          */}
        </div>
      </div>
    </>
  );
};

export default Post;
