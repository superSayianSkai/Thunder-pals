import { createContext,useState } from "react"

const AppContext=createContext();

export const AppProvider= ({children}) => {
    const [firstResize,setFirstResizeState]=useState(false);
    const [secondResize,setSecondResizeState]=useState(false);
    const [thirdResize,setThirdResizeState]=useState(false);
  return (
    <AppContext.Provider
    value={{firstResize,setFirstResizeState,secondResize,setSecondResizeState,thirdResize,setThirdResizeState}}
    >
        {children}
    </AppContext.Provider>
  )
}


export default AppContext