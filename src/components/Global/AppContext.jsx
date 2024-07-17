import { createContext, useState } from "react";
import { postData as initialPostData } from "../../Data/postData";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [firstResize, setFirstResizeState] = useState(false);
  const [secondResize, setSecondResizeState] = useState(false);
  const [thirdResize, setThirdResizeState] = useState(false);
  const [posts, setPost] = useState(initialPostData);
  const [showPostPanel, setShowPostPanel] = useState(false);
  const [profile,setProfile]=useState(false)
  const [Theme,setTheTheme]=useState(false);

  const deletePost = (name) => {
    setPost((prevPosts) => prevPosts.filter((post) => post.name !== name));
  };

  return (
    <AppContext.Provider
      value={{
        firstResize,
        setFirstResizeState,
        secondResize,
        setSecondResizeState,
        thirdResize,
        setThirdResizeState,
        posts,
        setPost,
        deletePost,
        showPostPanel,
        setShowPostPanel,
        profile,
        setProfile,
        Theme,
        setTheTheme
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
