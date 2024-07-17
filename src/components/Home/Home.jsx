import ProfileSide from "../leftSide/ProfileSide";
import MiddleSide from "../middleSide/MiddleSide";
import RightSide from "../RightSide/RightSide";
import BottomNav from "../mobileBottomNav/BottomNav";
import "./Home.css";
import MidLeftSide from "../midLeftSide/MidLeftSide";
import { useEffect, useContext } from "react";
import AppContext from "../Global/AppContext";

const Home = () => {
  const {
    firstResize,
    setFirstResizeState,
    secondResize,
    setSecondResizeState,
    thirdResize,
    setThirdResizeState,
    setShowPostPanel,
  } = useContext(AppContext);


  useEffect(() => {
    const handleResize = () => {
      setFirstResizeState(window.innerWidth >= 1200);
      setSecondResizeState(window.innerWidth >= 981);
      setThirdResizeState(window.innerWidth >= 490);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setFirstResizeState, setSecondResizeState, setThirdResizeState]);

  useEffect(() => {
    console.log(secondResize);
  }, [secondResize]);

  return (
    <div className="Home">
      {firstResize ? <ProfileSide /> : !thirdResize ? null : <MidLeftSide />}
      <MiddleSide />
      {secondResize ? <RightSide /> : null}
      {!thirdResize && <BottomNav setShow={setShowPostPanel} />}
    </div>
  );
};

export default Home;
