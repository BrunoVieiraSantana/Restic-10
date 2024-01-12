// https://flowbite.com/docs/typography/paragraphs/

export default function Card(props) {
    
    const handleItens = (action) =>{
        if(action === "+"){
            props.setItens2(props.cachorro + 1)
        }else if(action === "-" && props.cachorro > 0) {
            props.setItens2(props.cachorro - 1)
        }
    }
    return (
        <div>
            <br/>
            <article >
                <img src="#" alt="" />
                <div>
                    <h2 className="flex justify-center">Hamburguer</h2>
                    <div className="flex justify-center">
                        <img  src="./src/img/03.jpg" className="rounded-lg"/>
                    </div>
                    <div className="flex justify-center mb-4">
                        <p className="flex text-center w-[278px] ">Experimente nosso hambúrguer premium: carne suculenta, queijo derretido, vegetais frescos (alface, tomate, cebola roxa) e molho especial. Uma combinação perfeita de sabores e texturas em cada mordida.</p>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={()=>{
                            handleItens("-")
                        
                        }} >-</button>
                            <p>{props.cachorro===0?"Adicionar item":props.cachorro===1?"1 Item":`${props.cachorro} Itens`}</p>
                        <button onClick={()=>{
                            handleItens("+")
                        }}>+</button>
                    </div>
                </div>


            </article>
            <br/>
            
        </div>
    )
}