import { useState, useRef } from "react";
import "./postpanel.css";
import itadori from "../../assets/img/itadori.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faVideo,
  faLocationDot,
  faCalendarDays,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const PostPanel = () => {
  // stores data a component needs to render and Drives UI update

  const [post, setpost] = useState({
    image: null,
    video: null,
  });

  const imageRef = useRef();
  const videoRef = useRef();

  const imagePull = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setpost({
        image: URL.createObjectURL(img),
        video: null,
      });
    }
    event.target.value =null
  };

  const videoPull = (event) => {
    if (event.target.files && event.target.files[0]) {
      const vid = event.target.files[0];
      setpost({
        image: null,
        video: URL.createObjectURL(vid),
      });
    }
    event.target.value =null;
  };

  return (
    <div className="post-panel-container">
      <img src={itadori} alt="profile picture" />

      <div>
        <input type="text" placeholder="What's Thundering?" />
        {post.image ? (
          <div className="imageDisplayBox">
            <FontAwesomeIcon
              onClick={() => setpost({ image: null, video: null })}
              className="close"
              icon={faXmark}
            />
            <div className="previewImage">
              <img src={post.image} alt="Selected" />
            </div>
          </div>
        ) : post.video ? (
          <div className="imageDisplayBox">
            <FontAwesomeIcon
              onClick={() => setpost({ image: null, video: null })}
              className="close"
              icon={faXmark}
            />
            
            <video width="100%" controls>
              <source src={post.video} type="video/mp4" />
            </video>
          </div>
        ) : null}

        <div className="pick-option">
          <div
            style={{ color: "var(--green)" }}
            className="option"
            onClick={() => {
              imageRef.current.click();
            }}
          >
            <FontAwesomeIcon icon={faImage} />
            <span>Photo</span>
          </div>

          <div
            className="option"
            style={{ color: "var(--blue)" }}
            onClick={() => {
              videoRef.current.click();
            }}
          >
            <FontAwesomeIcon icon={faVideo} />
            <span>Video</span>
          </div>

          <div className="option" style={{ color: "var(--black)" }}>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Location</span>
          </div>
          <div className="option" style={{ color: "var(--red)" }}>
            <FontAwesomeIcon icon={faCalendarDays} />
            <span>Schedule</span>
          </div>
          <div className="option">
            <button className="button pp-button">Share</button>
          </div>
          <div style={{ display: "none" }}>
            <input type="file" ref={imageRef} onChange={imagePull} />
            <input type="file" ref={videoRef} onChange={videoPull} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPanel;
