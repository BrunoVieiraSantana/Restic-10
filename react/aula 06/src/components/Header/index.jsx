import Carrinho from "../Carrinho"
export default function Header({cart}){
    return(
        <header className="flex px-16 items-center text-2xl bg-fuchsia-700 text-white w-screen py-6 mb-8">
           <h1 className="flex-1 text-center font-semibold">IREDE Food</h1>
           <Carrinho cart={cart}/>
        </header>

    )
}