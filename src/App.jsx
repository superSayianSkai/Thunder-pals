import "./App.css";
import Route from "./components/AppRoutes/Route.jsx";
import AppContext from "./components/Global/AppContext.jsx";
import { useContext } from "react";
import PostPanel from "./components/PostPanel/PostPanel.jsx";


// import Auth from "./components/Auth/Auth.jsx";
// import Home from "./components/Home/Home.jsx";
// import Profile from "./components/Profile/Profile.jsx";

const App = () => {
  const { setPost} = useContext(AppContext);

  const { showPostPanel, setShowPostPanel } = useContext(AppContext);
  return (
    <div className="app">
      {showPostPanel && <PostPanel setPost={setPost} showPostPanel={showPostPanel}  setShowPostPanel={setShowPostPanel} />}
      <Route />
      {/* <Profile/> */}
      {/* <Auth />  * */}
    </div>
  );
};

export default App;
