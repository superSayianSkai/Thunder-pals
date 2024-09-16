import "./peopleCard.css";
import { Followers } from "../../Data/peopleCard";
const PeopleCard = () => {
  return (
    <div style={{ border: `1px solid rgba(47, 51, 54, var(--opacity))` }} className="followersCard border-[1px] border-[#2F3336]  bg-[--bg-color] text-[--primary-color]">
      <p className="followersCard-p">Who is your pal?</p>
      {Followers.map((follower, id) => {
        return (
          <div className="follower" key={id}>
            <img src={follower.img} alt="" />

            <div className="name ">
              <h3>{follower.name}</h3>
              <p>{follower.username}</p>
            </div>

            <button className="button button-follower text-sm bg-blue-800">
              Follow
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PeopleCard;
