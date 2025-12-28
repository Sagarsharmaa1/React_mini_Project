import React from "react";
import { useContext,createContext ,useEffect ,useState } from "react";

export const ThemeContext = createContext();

function Themecontext({ children }) {
  
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch (e) {
      return "light";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default Themecontext;

export function useTheme() {
  return useContext(ThemeContext);
}
//custtom hook
// if not then where we will use this theme context it should be used as -> const{theme , toggletheme} = useContext(ThemeContext)

