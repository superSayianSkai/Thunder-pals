import "./infocard.css";
import { FaPen } from "react-icons/fa";
const InfoCard = () => {
  return (
    <div className="InfoCard shadow-md">
      <div className="InfoHead">
        <h4>Your Info</h4>
        <FaPen />
      </div>

      <div className="info font-bold">
        <span>Skai</span>
      </div>

      <div className="info font-bold">
        <span>Junior Frontend Engineer</span>
      </div>
      <button className="loginOut-button">Logout</button>
    </div>
  );
};

export default InfoCard;
