import 'tailwindcss/tailwind.css';

export default function Footer() {
  return (
    <div className="bg-[#1E3A8A] px-10 pt-10">
      <div className="flex flex-col gap-5 pb-5 text-white">
        <div className="flex gap-5">
          <img className="h-[32px]" src="images/logo.png" alt="Logo"></img>
          <section className="text-[10px]">Explore nossa variedade de equipamentos esportivos de última geração, roupas confortáveis e estilosas, calçados especializados e acessórios essenciais.
          </section>
        </div>

        <section className="flex text-base gap-6">
          <img className="h-[20px]" src="images/face.png" alt="Logo"></img>
          <img className="h-[20px]" src="images/inst.png" alt="Logo"></img>
          <img className="h-[20px]" src="images/what.png" alt="Logo"></img>
        </section>

        <div className="flex">
          <div className="flex-1">
            <ul className="font-semibold text-[10px] min-w-32">
              <p className="pb-[14px] ">Informações</p>
              
              <li className="pl-[2px] pb-2">Sobre o E-Rede Store</li>
              <li className="pl-[2px] pb-2">Segurança</li>
              <li className="pl-[2px] pb-2">Lista de desejos</li>
              <li className="pl-[2px] pb-2">Trabalhe conosco</li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="font-semibold text-[10px] min-w-32">
              <p className="pb-[14px] ">Informações</p>
              
              <li className="pl-[2px] pb-2">Tênis</li>
              <li className="pl-[2px] pb-2">Camiseta</li>
              <li className="pl-[2px] pb-2">Acessórios</li>
              <li className="pl-[2px] pb-2">Esportivo</li>
            </ul>
          </div>
        </div>

        <div className="text-[10px]">
          <h1 className=" font-semibold py-[14px]">Localização</h1>
          <p className="font-regular pb-2">Rua Martinho Rodrigues, 331</p>
          <p className="font-regular pb-2">Bairro de Fátima, Fortaleza-CE</p>
        </div>
        <hr className="px-6" />
        <span className="text-[10px] text-center">2023 Irede</span>
      </div>
    </div>
  );
}
