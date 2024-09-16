import { trendings } from "../../Data/trendingData";
import "./Trends.css";

const Trends = () => {
  return (
    <>
      <div
        style={{ border: `1px solid rgba(47, 51, 54, var(--opacity))` }}
        className="trend bg-[--bg-color] text-[--secondary-color]"
      >
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
