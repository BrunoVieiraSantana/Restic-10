import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"

export default function Home() {
    return (
        <main>
            Home
            <br/>
            <Link to="/myorders">Meus pedidos</Link>
            <br/>
            <Link to="/signin">Login</Link>
            <br/>
            <Link to="/signup">Cadastro</Link>
        </main>
    )
}