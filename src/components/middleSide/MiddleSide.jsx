import Posts from '../posts/Posts'
import PostPanel from "../PostPanel/PostPanel"
import './middleSide.css'


const MiddleSide= () => {
  return (
    <div className="postSide">
      <PostPanel/>
      <Posts/>
    </div>
  )
}

export default MiddleSide