import { BiLike, BiComment, BiGlobe } from "react-icons/bi";
import { BsArrow90DegRight } from "react-icons/bs";

export default function Card() {
  return (
    <div className="mx-auto items-center justify-center p-[10px] flex flex-col relative">
      <div className="w-[278px] h-[295px] absolute z-10 shadow-lg"></div>


      <div className="flex space-x-2 m-2 z-20">
        <img className="w-12 h-12 rounded-full transform -translate-x-16" src="img/Ellipse-1.png" alt="Profile" />
        <div className="transform -translate-x-16 -translate-y-[-6px]">
          <div>
            <p className="text-black text-xs font-medium font-inter">Istituto IREDE</p>
          </div>
          <p className="flex space-x-2 text-neutral-400 text-xs font-medium font-inter">12h <BiGlobe /></p>
        </div>
      </div>
      <img className="w-[278px] h-[188.32px] z-20" src="img/Rectangle-1.png" alt="Post" />
      <nav className="flex space-x-[10px] p-4 z-20">
        <p className="text-neutral-400 text-xs font-medium font-inter">Curtir</p>
        <p className="text-neutral-400 text-xs font-medium font-inter"><BiLike /></p>
        <p className="text-neutral-400 text-xs font-medium font-inter">Comentar</p>
        <p className="text-neutral-400 text-xs font-medium font-inter"><BiComment /></p>
        <p className="text-neutral-400 text-xs font-medium font-inter">Compartilhar</p>
        <p className="text-neutral-400 text-xs font-medium font-inter"><BsArrow90DegRight /></p>
      </nav>
    </div>
  );
}
