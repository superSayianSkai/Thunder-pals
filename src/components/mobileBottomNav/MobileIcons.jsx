import { FaPlus } from "react-icons/fa";
const MobileIcons= ({ Icons,styles}) => {
    const additionalStyles=Icons === FaPlus ? styles:{};
  return <Icons style={additionalStyles} className="text-2xl hover:text-blue-800"/>;
};

export default MobileIcons;
