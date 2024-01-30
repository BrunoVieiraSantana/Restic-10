import Carrinho from "../Carrinho"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"


export default function Header({cart}){
    const {theme, setTheme} = useContext(ThemeContext)

    function handleTheme(){
        if(theme === "light"){
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return(
        <header className="flex px-16 items-center text-2xl bg-fuchsia-700 text-white w-screen py-6 mb-8">
           <h1 className="flex-1 text-center font-semibold">IREDE Food</h1>
           <button onClick={handleTheme}>{theme === "light" ? "dark" : "light"}</button>
           <Carrinho />
        </header>

    )
}