import Card from "../Card"
export default function Promo({setCart}){
    const products = [
        {id:1, title:"Pizza", img:"https://www.minhareceita.com.br/app/uploads/2022/12/pizza-de-pepperoni-caseira-portal-minha-receita.jpg", description:"Nossas pizzas são feitas com ingredientes frescos e de alta qualidade. A massa é preparada com farinha de trigo especial, o molho de tomate é feito com tomates frescos e o queijo é mussarela de primeira qualidade. Também oferecemos uma variedade de sabores para atender a todos os gostos."},
        {id:2, title:"Hamburgao", img:"https://img-global.cpcdn.com/recipes/7e4dd783fc266e9a/1360x964cq70/foto-principal-da-receita-hamburgao.webp", description:"Nossos hambúrgueres são feitos com ingredientes frescos e de alta qualidade. A carne é moída na hora, o pão é feito com farinha de trigo especial e o queijo é mussarela de primeira qualidade. Também oferecemos uma variedade de sabores para atender a todos os gostos."}
    ]
    return(
        <section className="flex flex-wrap px-8 items-center justify-center gap-8 ">
            <Card product={products[0]} setCart={setCart}/>
            <Card product={products[1]} setCart={setCart}/>
        </section>
    )
}