import sukuna from "../../assets/img/sukuna.jpeg"
import itadori from "../../assets/img/itadori.jpeg"
import "./profileCard.css";

//*banner image
const banner={
  backgroundImage:`url(${sukuna})`
};
// *banner image
const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="banner" style={banner}>
      <img className="profileImg" src={itadori} alt="" />
      </div>

      <div className='section2'>

        <div className="about">
          <h1>Kvng Aeionie!</h1>
          <p>Machine learning and AI Engineer</p>
          
        </div>

        <div className='people-box'>
          
        <div className='people'>


          <div className="followers">
            <h1>6,866</h1>
            <p>Followers</p>
          </div>

          <div className='middle-line'></div>

          <div className="following">
            <h1>1</h1>
            <p>Following</p>
          </div>
          </div>

        </div>

        <div className='footer'>
          <p>My profile</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard