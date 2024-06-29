import RightSide from "../RightSide/RightSide"
import ProfileLeftside from "../profileLeftside/ProfileLeftside"
import ProfileMiddleside from "../profileMiddleside/ProfileMiddleside"
import './profile.css'

const Profile = () => {
  return (
    <div className="profile">
        <ProfileLeftside/>
        <ProfileMiddleside/>
        <RightSide/>
    </div>
  )
}

export default Profile