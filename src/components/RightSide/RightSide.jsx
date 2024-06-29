import Utility from "../utilities/Utility";
import "./RightSIde.css";
import Trend from "../Trends/Trends";
import { useContext, useEffect } from "react";
import AppContext from "../Global/AppContext";

const RightSide = () => {
  const {firstResize,setFirstResizeState}=useContext(AppContext);
  useEffect(() => {
    const handleResize=()=>{
      setFirstResizeState(window.innerWidth >1200);
    }
    window.addEventListener("resize",handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize);
  },[setFirstResizeState])
  return (
    <div className="right-side">
      {
        firstResize && <Utility/>
      }
      <Trend />
    </div>
  );
};

export default RightSide;
