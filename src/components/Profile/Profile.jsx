import ProfileLeftside from "../profileLeftside/ProfileLeftside"
import ProfileMiddleside from "../profileMiddleside/ProfileMiddleside"
import ProfileRightside from "../profileRightside/ProfileRightside"
import './profile.css'
const Profile = () => {
  return (
    <div className="profile">

        <ProfileLeftside/>
        <ProfileMiddleside/>
        <ProfileRightside/>
    </div>
  )
}

export default Profile