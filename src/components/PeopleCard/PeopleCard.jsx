import "./peopleCard.css";
import { Followers } from "../../Data/peopleCard";
import t from "../../assets/img/auth/t.jpeg";
const PeopleCard = () => {
  return (
    <div
      style={{ border: `1px solid rgba(47, 51, 54, var(--opacity))` }}
      className="followersCard border-[1px] border-[#2F3336]  bg-[--bg-color] text-[--primary-color]"
    >
      <p className="followersCard-p">Who is your pal?</p>
      {Followers.map((follower, id) => {
        return (
          <div className="follower" key={id}>
            <img src={follower.img} alt="" className="w-[15%] rounded-full" />

            <div className="name ml-1">
              <div className="flex gap-1 justify-center items-center">
                <h3 className="">{follower.name}</h3>
                <img src={t} className="rounded-full w-[12px] h-[100%]" />
              </div>

              <p>{follower.username}</p>
            </div>

            <button className="button button-follower text-sm bg-blue-800">
              Following
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PeopleCard;
