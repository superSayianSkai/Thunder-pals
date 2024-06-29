import { useState, useRef } from "react";
import "./postpanel.css";
import itadori from "../../assets/img/itadori.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdInsertPhoto } from "react-icons/md";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import PostNav from "./PostNav";
const PostPanel = () => {
  // stores data a component needs to render and Drives UI update

  return (
    <div className="post-panel-container ">
      <img src={itadori} alt="profile picture" />

      <div>
        <input type="text" placeholder="What's Thundering?" />
        {/* pick-option */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <PostNav Icon={MdInsertPhoto} />
            <PostNav Icon={MdOutlineGifBox} />
            <PostNav Icon={BiPoll} />
            <PostNav Icon={MdOutlineEmojiEmotions} />
            <PostNav Icon={RiCalendarScheduleLine} />
            <PostNav Icon={CiLocationOn} />
          </div>
          <div className="option">
            <button className="text-md">Share</button>
          </div>
          <div style={{ display: "none" }}>
            <input type="file" />
            <input type="file" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPanel;
