import { useEffect, useState } from "react"

export default function Card({product, setCart}){
    const[qtdItens, setQtdItens] = useState(0)
    function handleItem(action){
        if(action==="+"){
            setQtdItens(oldValue => oldValue + 1)
        }else{
            if(qtdItens>0){
                setQtdItens(oldValue=> oldValue -1 )
            }
        }
       
    }
   
   



    useEffect(()=>{
        setCart((prevCart)=>{
           const differentItems =  prevCart.filter((item)=>item.id!== product.id)
           return [...differentItems , {...product, qtd: qtdItens}]
        })
    },[qtdItens])
    return(
        <article className="border shadow-lg rounded-lg flex flex-col sm:flex-row  w-full max-w-[80vw] sm:max-w-[750px] md:max-w-[900px] sm:max-h-[300px] ">
            <img src={product.img} alt={product.title} className=" h-[45vw] sm:h-[35vw] w-full max-h-[300px] max-w-[400px] sm:w-[35vw] object-cover rounded-l-lg "/>
            <div className="p-8 flex flex-col justify-center sm:max-w-[1000px] ">
                <h3 className="text-2xl font-semibold">{product.title}</h3>
                <p className="mt-4">
                    {product.description}
                </p>
                <span className=" bg-fuchsia-800 text-white flex gap-2 mr-auto px-4 py-2 rounded-md mt-4">
                <button onClick={()=>handleItem("-")}>-</button>
                {qtdItens===0?"Adicionar Itens":qtdItens===1?"01 Item":`0${qtdItens} Itens`}
                <button onClick={()=>handleItem("+")}>+</button>
                </span>
                
            </div>

        </article>
    )
}