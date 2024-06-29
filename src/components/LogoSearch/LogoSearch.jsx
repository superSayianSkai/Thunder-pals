import { CiSearch } from "react-icons/ci";
import thunder from "../../assets/img/thunder.jpeg";
import "./logosearch.css";
const Logosearch = () => {
  return (
    <div className="logoSearch">
      <div className="image-container">
        <img src={thunder} alt="eyes" />
      </div>

      <div className="search">
        <div className="icon-container">
          <CiSearch className="text-black text-2xl" />
        </div>
        <input type="text" placeholder="#Explore" />
      </div>
    </div>
  );
};

export default Logosearch;
