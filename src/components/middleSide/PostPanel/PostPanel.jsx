import { useState,useRef } from "react";
import "./postpanel.css"
import itadori from "../../../assets/img/itadori.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faImage} from "@fortawesome/free-solid-svg-icons";
import {faVideo} from "@fortawesome/free-solid-svg-icons";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";

const PostPanel = () => {
  const[image,setImage]=useState(null)
  const imageRef=useRef();

  const imageChange=(event)=>{
    if(event.target){
      console.log(event)
    }
  }  
  
  return (
    <div className="post-panel-container">

      <div className="search-panel">

        <div className="profile-picture">
          <img src={itadori} alt="profile picture"/>
        </div>

        <input type="text" placeholder="What's Thundering?" />
      </div>

      <div className="pick-option"> 
        <div className="option" >
          <FontAwesomeIcon icon={faImage} />
          <span>Photo</span>
        </div>

        <div className="option">
        <FontAwesomeIcon icon={faVideo} />
        <span>Video</span>

        </div>
        <div className="option">
        <FontAwesomeIcon icon={faLocationDot} />
        <span>Location</span>
        
        </div>
        <div className="option">
        <FontAwesomeIcon icon={faCalendarDays} />
        <span>Schdule</span>

        </div>
        <div className="option">
          <button>Share</button>
        </div>
        <div style={{display:"none"}}>
          <input type="file" name='myImage' ref={imageRef} onChange={{imageChange}} />
        </div>
      </div>

    </div>
  )
}

export default PostPanel