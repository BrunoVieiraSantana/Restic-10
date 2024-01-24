import { createContext, useState} from "react";

const ThemeContext = createContext("dark")

export default function ThemeProvider({children}) {

    const [theme,setTheme] = useState("light")

    return (
        <>
        <ThemeContext.Provider value = {{theme:theme,setTheme:setTheme}}>
            {children}
        </ThemeContext.Provider>
        </>
    )

}