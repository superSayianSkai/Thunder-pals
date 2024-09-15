import { useState, useRef } from "react";
import "./MobilePostpanel.css";
import Itadori from "../../assets/img/itadori.jpeg";
import {
  MdInsertPhoto,
  MdOutlineGifBox,
  MdOutlineEmojiEmotions,
  MdCancel,
} from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import MobilePostNav from "./MobilePostNav";

const MobilePostPanel = ({ setPost }) => {
  const mediaRef = useRef();
  const textareaRef = useRef();

  const openFileDialog = () => {
    mediaRef.current.click();
  };

  const [newPost, setNewPost] = useState({
    media: "",
    name: "Skai",
    desc: "",
    userName: "@Aeionie",
    likes: "12k",
    comments: "12k",
    shares: "12k",
    liked: "false",
    profileImage: Itadori,
    ownerId: "Skai",
  });

  const handlePost = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));

    // Auto-expand the textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const [mediaPreview, setMediaPreview] = useState("");

  const handleImage = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      setNewPost((prev) => ({ ...prev, media: URL.createObjectURL(file) }));
      setMediaPreview(URL.createObjectURL(file));
    } else {
      console.log("Couldn't select an image");
    }
  };

  const handleSubmit = () => {
    if (newPost.desc === "" && newPost.media === "") {
      alert("Please Input something");
    } else {
      setPost((prev) => [newPost, ...prev]);
    }
    setNewPost({
      media: "",
      name: "Skai",
      desc: "",
      userName: "@Aeionie",
      likes: "12k",
      comments: "12k",
      shares: "12k",
      liked: "false",
      profileImage: Itadori,
      ownerId: "Skai",
    });

    if (mediaRef.current) {
      mediaRef.current.value = "";
    }
  };

  const removePicture = () => {
    setMediaPreview("");
    if (mediaRef.current) {
      mediaRef.current.value = "";
    }
  };

  return (
    <div className="post-panel-container">
      <div>
        <div className="flex flex-col gap-4 w-[100%] overflow-scroll">
          <img
            className="MobileProfileImg"
            src={Itadori}
            alt="profile picture"
          />
          <div className="h-[100vh] flex flex-col justify-between">
            <div className="flex flex-col">
              <textarea
                ref={textareaRef}
                name="desc"
                type="text"
                value={newPost.desc}
                placeholder="What's Thundering?"
                onChange={handlePost}
                className="outline-0 max-h-[100vh]"
                style={{ overflow: "hidden", resize: "none" }}
              />

              <input
                accept="image/*"
                type="file"
                name="file"
                ref={mediaRef}
                onChange={handleImage}
                style={{ display: "none" }}
              />
              {mediaPreview && (
                <div className="">
                  {newPost.media && (
                    <>
                      <div className="relative">
                        <img
                          src={mediaPreview}
                          alt="preview"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <button
                          className="absolute top-2 right-1 bg-transparent"
                          onClick={removePicture}
                        >
                          <MdCancel className="text-black text-4xl cursor-pointer" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pb-2">
          <div className="flex gap-2 items-center">
            <button className="bg-transparent" onClick={openFileDialog}>
              <MobilePostNav Icon={MdInsertPhoto} />
            </button>
            <MobilePostNav Icon={MdOutlineGifBox} />
            <MobilePostNav Icon={BiPoll} />
            <MobilePostNav Icon={MdOutlineEmojiEmotions} />
            <MobilePostNav Icon={RiCalendarScheduleLine} />
            <MobilePostNav Icon={CiLocationOn} />
          </div>
          <div className="option">
            <button className="text-md" onClick={handleSubmit}>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePostPanel;
