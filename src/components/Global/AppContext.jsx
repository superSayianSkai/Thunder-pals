import { createContext, useState } from "react";
import { postData as initialPostData } from "../../Data/postData";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [firstResize, setFirstResizeState] = useState(false);
  const [secondResize, setSecondResizeState] = useState(false);
  const [thirdResize, setThirdResizeState] = useState(false);
  //posts
  const [posts, setPost] = useState(initialPostData);

  const deletePost = (name) => {
    setPost((prevPosts) =>prevPosts.filter((post) => post.name !== name));
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
        deletePost
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
