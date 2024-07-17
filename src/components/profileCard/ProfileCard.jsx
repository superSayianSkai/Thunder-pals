import sukuna from "../../assets/img/sukuna.jpeg";
import itadori from "../../assets/img/itadori.jpeg";
import { Link } from "react-router-dom";

import "./profileCard.css";

const ProfileCard = ({ location }) => {
  return (
    <div
      style={{
        boxShadow: location === "profilePage" ? "none" : "",
        borderRadius: location === "profilePage" ? "0" : "",
        marginBottom: location === "profilePage" ? "1rem" : "",
      }}
      className="profile-card"
    >
      <div className="profileImages cursor-pointer">
        <img
          style={{
            borderRadius:
              location === "profilePage" ? "0" : "1.5rem 1.5rem 0 0",
          }}
          src={sukuna}
          alt=""
        />

        <img src={itadori} alt="" />
      </div>

      <div className="profile-info">
        <span>
          <b>Skai.</b>
        </span>
        <span>Junior Frontend Engineer</span>
      </div>

      <div className="people-box">
        <hr style={{ width: location === "profilePage" ? "100%" : "" }} />

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

          {location === "profilePage" ? (
            <>
              <div className="middle-line"></div>
              <div className="follow">
              <span>3</span>
              <span>Posts</span>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <hr style={{ width: location === "profilePage" ? "100%" : "" }} />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <div className="footer">
          <Link to="/profile">
            <button>My profile</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
