import sukuna from "../../assets/img/sukuna.jpeg";
import itadori from "../../assets/img/itadori.jpeg";

import { NavLink } from "react-router-dom";
import "./profileCard.css";

const ProfileCard = () => {
  const profilePage = true;

  return (
    <div className="profile-card">
      <div className="profileImages">
        <img src={sukuna} alt="" />
        <img src={itadori} alt="" />
      </div>

      <div className="profile-info">
        <span>
          <b>Sule-odu Ayotide</b>
        </span>
        <span>Junior Frontend Engineer</span>
      </div>

      <div className="people-box">
        <hr />

        <div className="follow-card">
          <div className="follow">
            <span>6,866</span>
            <span>Followers</span>
          </div>

          <div className="middle-line"></div>

          <div className="follow">
            <span>1</span>
            <span>Following</span>
          </div>
        </div>
        <hr />
      </div>
    
        <div className="footer">
          <p>My profile</p>
        </div>
      
    </div>
  );
};

export default ProfileCard;
