import ProfileSide from "../leftSide/ProfileSide";
import MiddleSide from "../middleSide/MiddleSide";
import RightSide from "../RightSide/RightSide";
import BottomNav from "../mobileBottomNav/BottomNav";
import "./Home.css";
import MidLeftSide from "../midLeftSide/MidLeftSide";
import { useEffect } from "react";
import { useContext } from "react";
import AppContext from "../Global/AppContext";
import SingleHeader from "../SingleHeader/SingleHeader";

const Home = () => {
  const { firstResize, setFirstResizeState } = useContext(AppContext);
  const { secondResize, setSecondResizeState } = useContext(AppContext);
  const { thirdResize, setThirdResizeState } = useContext(AppContext);

  useEffect(() => {
    const handleResize = () => {
      setFirstResizeState(window.innerWidth >= 1200);
      setSecondResizeState(window.innerWidth >= 971);
      setThirdResizeState(window.innerWidth >= 490);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    console.log(secondResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setFirstResizeState, setSecondResizeState, setThirdResizeState]);
  useEffect(() => {
    console.log(secondResize);
  }, [secondResize]);

  return (
    <div className="Home">
      {firstResize ? <ProfileSide /> : !thirdResize ? "":<MidLeftSide />} 
      <MiddleSide />
      {secondResize ? <RightSide /> :""} 
      {!thirdResize &&  <BottomNav/>}
     
    </div>
  );
};

export default Home;
