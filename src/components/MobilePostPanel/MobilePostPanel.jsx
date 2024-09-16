import { useState, useRef, useEffect, useContext } from "react";
import "./../post/post.css";
import Itadori from "../../assets/img/itadori.jpeg";
import { MdInsertPhoto } from "react-icons/md";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import PostNav from "../PostPanel/PostNav";
import AppContext from "../Global/AppContext";
import { Link } from "react-router-dom";
const PostPanel = () => {
  const { setPost } = useContext(AppContext);
  const mediaRef = useRef();
  const textareaRef = useRef();

  const openFileDialog = () => {
    mediaRef.current.click();
  };

  const [words, setWords] = useState("");
  const [newPost, setNewPost] = useState({
    media: "",
    name: "Skai",
    desc: "",
    userName: "@Aeionie",
    likes: "0",
    comments: "0",
    shares: "0",
    liked: "false",
    profileImage: Itadori,
    ownerId: "Skai",
  });

  const handlePost = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
    setWords(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "20px";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    } else {
      textareaRef.current.style.height = "20px";
    }
  };
  console.log(newPost);

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
  const removePostPanel = () => {
    setShowPostPanel(false);
  };

  const handleSubmit = () => {
    if (newPost.desc === "" && newPost.media === "") {
      alert("Please Input something");
    } else {
      setPost((prev) => [newPost, ...prev]);
      removePostPanel();
      console.log(words);
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
    if (!textareaRef.current) {
      textareaRef.current.style.height = "20px";
    }
  };

  const removePicture = () => {
    setMediaPreview("");
    if (mediaRef.current) {
      mediaRef.current.value = "";
    }
  };
  return (
    <div className="h-[100svh] bg-[--bg-color]">
      <div className="post-panel-container h-[40svh] text-[--primary-color] border-b-[1px] border-[#2F3336] border-opacity-55 bg-[--bg-color]">
        {
          <button
            className="absolute top-2 right-0 justify-self-start  bg-transparent"
            onClick={removePostPanel}
          >
            <Link to="/">
              <IoMdClose className="bg-none text-3xl cursor-pointer text-[--primary-color]" />
            </Link>
          </button>
        }
        <div className="w-[100%] justify-between">
          <div className="flex w-[100%] items-center justify-center">
            <img
              src={Itadori}
              alt="profile picture"
              className="self-start image "
            />
            <div className="flex gap-2 w-[100%] ml-5">
              <textarea
                ref={textareaRef}
                name="desc"
                type="text"
                value={newPost.desc}
                placeholder="What's Thundering?"
                onChange={handlePost}
                className="flex-1 border-2 bg-transparent "
                autoFocus
                style={{ height: "20px" }}
              />

              <input
                accept="image/*"
                type="file"
                name="file"
                ref={mediaRef}
                onChange={handleImage}
                style={{ display: "none" }}
              />
            </div>
          </div>
          {mediaPreview && (
            <div className="overflow-auto">
              {newPost.media && (
                <>
                  <div className="relative ">
                    <img
                      src={mediaPreview}
                      alt="preview"
                      style={{ width: "100%" }}
                      className=""
                    />
                    <button
                      className="absolute top-2 right-1 bg-transparent"
                      onClick={removePicture}
                    >
                      <MdCancel className=" text-black text-4xl cursor-co" />
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          <div className="flex justify-between items-center lg:ml-[7%] md:ml sm:ml-0">
            <div className="flex gap-2 items-center">
              <button className="bg-transparent" onClick={openFileDialog}>
                <PostNav Icon={MdInsertPhoto} />
              </button>
              <PostNav Icon={MdOutlineGifBox} />
              <PostNav Icon={BiPoll} />
              <PostNav Icon={MdOutlineEmojiEmotions} />
              <PostNav Icon={RiCalendarScheduleLine} />
              <PostNav Icon={CiLocationOn} />
            </div>

            <div className="option ">
              <button
                className="text-md rounded-full py-2 px-4 opacity-75 hover:opacity-100"
                onClick={handleSubmit}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPanel;
