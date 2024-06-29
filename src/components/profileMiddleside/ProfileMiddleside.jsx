import ProfileCard from "../profileCard/ProfileCard"
import Posts from "../posts/Posts"
import "../middleSide/middleSide.css"

const ProfileMiddleside = () => {
  return (
    <div className="postSide">
    <ProfileCard/>
    <Posts/>
  </div>
  )
}

export default ProfileMiddleside