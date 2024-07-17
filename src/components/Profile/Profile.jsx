import ProfileSide from "../leftSide/ProfileSide";
import MiddleSide from "../middleSide/MiddleSide";
import RightSide from "../RightSide/RightSide";
import BottomNav from "../mobileBottomNav/BottomNav";
import "../../components/Home/Home.css";
import MidLeftSide from "../midLeftSide/MidLeftSide";
import { useEffect } from "react";
import { useContext } from "react";
import AppContext from "../Global/AppContext";
import ProfileLeftSide from "../profileLeftside/ProfileLeftside";
import ProfileMiddleSide from "../profileMiddleside/ProfileMiddleside";

const Home = () => {
  const { firstResize, setFirstResizeState } = useContext(AppContext);
  const { secondResize, setSecondResizeState } = useContext(AppContext);
  const { thirdResize, setThirdResizeState } = useContext(AppContext);
  const {setShowPostPanel } = useContext(AppContext);

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
      {firstResize ? <ProfileLeftSide /> : !thirdResize ? "" : <MidLeftSide />}

      <ProfileMiddleSide />
      {secondResize ? <RightSide /> : ""}
      {!thirdResize && <BottomNav setShow={setShowPostPanel} />}
    </div>
  );
};

export default Home;
