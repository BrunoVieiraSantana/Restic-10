export default function Header(){
    return(
        <div className="flex flex-row items-center m-4">

            <img className="w-[18.74%] h-9" src="./src/assets/image-1.png"></img>
            
            
            <ul className="flex flex-row space-x-4 text-sm text-[#171A31] mr-4 ml-auto">
                <li>Home</li>
                <li>Sobre</li>
                <li className="whitespace-nowrap">Como Funciona</li>
                <li>Serviços</li>
                <li className="whitespace-nowrap">Contate-nos</li>
            </ul>

            <button className="bg-primary rounded-[10px] w-[11.71%] text-md text-white h-11">Login</button>


        </div>
    )
}