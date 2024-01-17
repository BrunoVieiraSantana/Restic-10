import { useEffect, useRef } from "react"
export default function ContactCreate() {
    return (
        <div>
        <section id="campoListarContatos" className="px-2 pb-4">
          <h2 className="py-4 font-semibold">Meus contatos:</h2>
          {/* Aqui representa um card de contatos */}
          <article className="px-6  border shadow-lg">

            <div>
              <h3 className="pt-4 pb-2"><strong>Nome:</strong> Fulano de Tal</h3>
              <hr />
              <p className="pt-2 pb-4">
                <strong>Telefone:</strong> (85)98600-0000
              </p>
            </div>


            <div className="flex mb-4 gap-4">
              <button className="py-2 bg-blue-500 text-white flex-1 rounded-md border border-black">
                Editar
              </button>
              <button className="py-2 bg-red-500 text-white flex-1 rounded-md border border-black">
                Deletar
              </button>
            </div>

          </article>
        </section>

        </div>
    )}