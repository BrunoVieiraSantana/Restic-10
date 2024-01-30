import { useState } from "react"
import api from "./api"
import Dialog from "./components/Dialog"
import ContactCreate from "./components/ContactCreate"
import ContactList from "./components/ContactList"

function App() {
  const [showModal, setShowModal] = useState(true)

  async function handleApiExample() {
    const response = await api.getContatos()
    const result = await response.json()
    console.log(result)
  }
  return (
    <div className="dark:bg-cyan-800 dark:text-slate-50 bg-slate-100 text-slate-800 min-h-screen flex flex-col items-center py-12">
      <h1 className="text-2xl font-semibold my-6">Minha Lista Telefônica</h1>
      <main className="border shadow-lg  px-4 py-2 max-w-[300px] md:max-w-[500px] lg:max-w-[700px] rounded-xl flex flex-col gap-4">
{/* CAMPO CRIAR CONTATO  */}
        {/* <section id="campoCriarContato" className="flex gap-2 flex-wrap justify-center pt-2 border items-center ">
          <div className="flex flex-col gap-2 py-4 px-2 ">
            <label className="flex gap-2 items-center justify-between">
              Nome:
              <input placeholder="Digite o nome completo" className="px-2 py-1 border rounded-md" />
            </label>
            <label className="flex gap-2 items-center">
              Telefone:
              <input placeholder="Digite o nome completo" className="px-2 py-1 border rounded-md" />
            </label>
          </div>
          <button className="border-2 border-black rounded-md px-4 bg-emerald-600 text-white w-32 h-20"> Adicionar Contato</button>
        </section> */}
      {/* CAMPO LISTAR CONTATOS */}
        <ContactCreate/>
        <ContactList/>
      </main>


      <div className="border p-8 w-full max-w-[450px] mt-4 gap-4 flex flex-col justify-center bg-white rounded-lg">
        <h2>Exemplo de como requisições a uma API funcionam</h2>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
          onClick={handleApiExample}
        > Acionar Api</button>
      </div>

      {/* Esse modal pode ser utilizado para exibir informações de modificação do usuário */}
      <Dialog showModal={showModal} setShowModal={setShowModal}/>
      
    </div>
  )
}

export default App
