import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons";
import thunder from "../../assets/img/thunder.jpeg"
import { CiSearch } from "react-icons/ci";
import "./singleHeader.css";
const SingleHeader = () => {
  return (
    <div className=" px-2 py-3 flex justify-between items-center  bg-white w-[100%] single">
      <div className="flex gap-1 justify-center items-center">
        <img className="w-[25px] rounded-md" src={thunder} alt="" />
        <h3 className="text-xl italic font-extrabold text-black">
          Thunderpals
        </h3>
      </div>

      <div className="flex gap-3">
        <FontAwesomeIcon
          className="font-icon2 text-2xl text-black"
          icon={faCloudBolt}
        />
        <CiSearch className="text-2xl" />
      </div>
    </div>
  );
};

export default SingleHeader;
