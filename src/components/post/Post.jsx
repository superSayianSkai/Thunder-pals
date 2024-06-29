import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { CgQuoteO } from "react-icons/cg";
import { RiShareForwardLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";

import "./post.css";
const Post = ({ data }) => {
  return (
    <>
      <div className=" post py-4 pr-4 pl-5 justify-center items-center hover:bg-gray-100">
        <div className="flex h-[100%] w-[70px]">
          <img
            className=" rounded-full w-[40px] h-[40px]"
            src={data.profieImage}
            alt=""
          />
        </div>

        <div className="flex gap-2 flex-col justify-center">
          <div className="">
            <div className="flex items-center gap-1">
              <h2 className="font-bold text-md ">{data.name}</h2>
              <p className="text-sm">{data.userName}</p>
            </div>
            <p className="text-sm max-w-[500px] md break-words">{data.desc}</p>
          </div>
          <div className="w-[100%] mt-2">
            <img className=" rounded-2xl w-[100%]" src={data.img} alt="" />
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center justify-center gap-1">
              <CiHeart className="text-xl" />
              <div>{data.likes}</div>
            </div>
            <div className="flex items-center justify-center gap-1">
              <FaRegComment className="text-md" />
              <div>{data.comments}</div>
            </div>
            <div className="flex items-center gap-1 justify-center">
              <RiShareForwardLine className="text-xl" />
              <div>{data.shares}</div>
            </div>
            <div className="flex items-center justify-center  gap-1">
              <CiBookmark className="text-xl" />
            </div>
          </div>
        </div>

        {/* <p>{data.likes}</p>
  
          */}
      </div>
    </>
  );
};

export default Post;
