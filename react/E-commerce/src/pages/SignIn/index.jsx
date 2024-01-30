import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"

export default function SignIn() {
    return (
        <main>
            Login
            <br/>
            <Link to="/">Voltar Home</Link>
        </main>
    )
}