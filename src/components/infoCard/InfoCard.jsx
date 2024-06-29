import './infocard.css'
import { FaPen } from "react-icons/fa";
const InfoCard = () => {
  return (
    <div className='InfoCard'>

        <div className='InfoHead'>
            <h4>Your Info</h4>
            <FaPen/>
        </div>

        <div className="info">
          <span>
            <b>Status</b>
          </span>
          <span>in Realationship</span>
        </div>

        <div className="info">
          <span>
            <b>Works at</b>
          </span>
          <span>
            Silicon Synergy
          </span>
        </div>
        <button className='loginOut-button'>
          Logout
        </button>

    </div>
  )
}

export default InfoCard