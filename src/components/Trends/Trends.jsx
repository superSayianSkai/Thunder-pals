import React from "react";
import { trendings } from "../../Data/trendingData";
import "./Trends.css";

const Trends = () => {
  return (
    <>
      <div className="trend">
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
      <button className="button-right-side">Share</button>
    </>
  );
};

export default Trends;
