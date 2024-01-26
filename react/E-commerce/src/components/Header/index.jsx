export default function Header() {
    return (
    <div className="bg-[#1E3A8A]">
      <div className="flex flex-row justify-center items-center space-x-24">
        <img className="w-[5.0%]" src="./src/assets/menu.svg"></img>
        <img className="w-[30.0%]" src="./src/assets/logo.png"></img>
        <img className="w-[5.0%]" src="./src/assets/cart.svg"></img>
      </div>
      <div className="flex justify-center items-center pb-4">
        <input className="w-[94.0%]" placeholder="Buscar"/>
      </div>
    </div>
    );
  }


  