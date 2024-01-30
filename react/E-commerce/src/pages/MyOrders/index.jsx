import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"

export default function MyOrders() {
    return (
        <main>
            Meus pedidos
            <br/>
            <Link to="/">Voltar Home</Link>
        </main>
    )
}