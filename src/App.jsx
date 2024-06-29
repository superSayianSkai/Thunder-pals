import "./App.css";
import Auth from "./components/Auth/Auth.jsx";
import Home from "./components/Home/Home.jsx";
import Profile from "./components/Profile/Profile.jsx";

const App = () => {
  return (
    <div className="app">
      <Home/>
      {/* <Profile/>
      <Auth /> */}
    </div>
  );
};

export default App;
