import { trendings } from "../../Data/trendingData";
import "./Trends.css";

const Trends = () => {
  return (
    <>
      <div className="trend bg-[--bg-color] text-[--secondary-color] border-[1px] border-[#2F3336] border-opacity-80">
        <h1>Trends for you</h1>
        {trendings.map((trend, id) => {
          return (
            <>
              <h2>{trend.tag}</h2>
              <p>{trend.shares}</p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Trends;
