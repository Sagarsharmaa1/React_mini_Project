import React from "react";
import { useContext,createContext } from "react";

export const ThemeContext = createContext();

function Themecontext({childern}){

    const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
   
  const toggleTheme = ()=>{
    return setTheme((prev)=> prev=="light"? "dark":"light" )
  }

    return(
        <ThemeContext.Provider value={{theme , toggleTheme}} >
            {childern}
        </ThemeContext.Provider>
    )
}

export default Themecontext;


export function useTheme() {
  return useContext(ThemeContext);
}
//custtom hook
// if not then where we will use this theme context it should be used as -> const{theme , toggletheme} = useContext(ThemeContext)

