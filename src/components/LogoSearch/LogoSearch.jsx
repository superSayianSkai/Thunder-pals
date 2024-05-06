import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

import thunder from "../../assets/img/thunder.jpeg"
import "./logosearch.css"
const Logosearch = () => {
  return (
    <div className="logoSearch">
      
      <div className="image-container">
        <img src={thunder} alt="eyes" />
      </div>

      <div className="search">
        <input type="text" placeholder="#Explore" />
        
      <div className="icon-container">
        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
      </div>
      
      </div> 
      


    </div>


  )
}

export default Logosearch 