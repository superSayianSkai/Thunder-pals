import "./peopleCard.css";
import { Followers } from "../../Data/peopleCard";
const PeopleCard = () => {
  return (
    <div
      className="followersCard"
  
    >
      <p className="followersCard-p">Who is your pal?</p>
      {Followers.map((follower, id) => {
        return (
          <div className="follower" key={id}>
            <img src={follower.img} alt="" />

            <div className="name ">
              <h3>{follower.name}</h3>
              <p>{follower.username}</p>
            </div>

            <button className="button button-follower text-sm">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default PeopleCard;
