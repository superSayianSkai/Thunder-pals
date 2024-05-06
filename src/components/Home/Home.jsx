import ProfileSide from "../profileSide/ProfileSide"
import MiddleSide from "../middleSide/MiddleSide"
import RightSide from "../RightSide/RightSide"
import "./Home.css"
const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <MiddleSide />
      <RightSide />
    </div>
  )
}

export default Home