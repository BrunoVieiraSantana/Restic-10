export default function IntroductionSection(){
    return(
        <div className="flex flex-row items-center m-4">
            <div className="flex flex-col">
                <p className="text-violet-950 text-[50px] font-bold">Empresa de Restauração em Encanamentos</p>
                <ul className="my-8 space-y-4">
                    <div className="flex flex-row">
                        <img className="w-[3.60%] h-[3.60%]" src="./src/assets/Rectangle-20.png"></img>
                        <li className="ml-2">24/7 Serviços de Emergência</li>
                    </div>
                    <div className="flex flex-row">
                        <img className="w-[3.60%] h-[3.60%]" src="./src/assets/Rectangle-21.png"></img>
                        <li className="ml-2">Garantia de chegada ao local em 45 minutos</li>
                    </div>
                    <div className="flex flex-row">
                        <img className="w-[3.60%] h-[3.60%]" src="./src/assets/Rectangle-22.png"></img>
                        <li className="ml-2">Trabalhos diretamente com a empresa de seguros</li>
                    </div>
                </ul>
            
                <div className="flex flex-row space-x-4">
                    <button className="whitespace-nowrap bg-primary rounded-[10px] w-36 text-sm text-white h-14">FAÇA SUA COTAÇÃO</button>
                    <button className="whitespace-nowrap bg-secondary rounded-[10px] w-36 text-sm text-white h-14">FALE CONOSCO</button>
                </div>
            
            </div>

            <div>
                <img className="w-[1/2] shadow" src="./src/assets/image-3.png"></img>
            </div>

        </div>
    )
}