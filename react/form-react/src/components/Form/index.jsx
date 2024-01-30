import React, {useState} from "react"

export default function Form(){
    const [theme, setTheme] = useState("claro")
    function handleTheme(){
        setTheme((prevTheme) => (prevTheme === "claro" ? "escuro" : "claro"))
    }

    const [user, setUser] = useState({nome:"", email:"", telefone:"", cep:"", emprego:""})

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(user)
    }
    function handleUser(e){
        setUser((preview) => ({...preview, [e.target.name]:e.target.value}))
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="App" style={{backgroundColor: theme === "claro" ? "white" : "black"}}>
                <h2 style={{color: theme === "claro" ? "white" : "black"}}>Formulário</h2>
                <label>Nome:</label>
                <input type="text" name="nome" onChange={(e) => {handleUser(e)}}></input>
                <br/>
                <label>Email:</label>
                <input type="email" name="email" onChange={(e) => {handleUser(e)}}></input>
                <br/>
                <label>Telefone:</label>
                <input type="number" name="telefone" onChange={(e) => {handleUser(e)}}></input>
                <br/>
                <label>Cep:</label>
                <input type="number" name="cep" onChange={(e) => {handleUser(e)}}></input>
                <br/>
                <label>Emprego:</label>
                <input type="text" name="emprego" onChange={(e) => {handleUser(e)}}></input>
                <br/>
                <button type="submit">Enviar</button>
                <br/>
                <button onClick={handleTheme}>{theme === "claro" ? "escuro" : "claro"}</button>
            </div>
        </form>
    )}