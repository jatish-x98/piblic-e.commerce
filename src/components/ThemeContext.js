import React, {createContext, useState, useContext} from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{

    const [theme,setTheme] = useState("light")

    const toggleTheme = () => {
        if(theme === "light"){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )



}

export const useTheme = () =>{
    return useContext(ThemeContext)
}