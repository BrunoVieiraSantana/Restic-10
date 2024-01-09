import estilo from "./style.module.css" 
import { BiLike,BiComment, BiGlobe} from "react-icons/bi";
import { BsArrow90DegRight } from "react-icons/bs";


export default function Card(){
    return(
        <div className="box">
            <img className={estilo.logo} src="img/Ellipse-1.png" />
            <p className={estilo.nome}>Istituto IREDE</p>
            <p className={estilo.hora}>12h <BiGlobe /></p>
            <img className={estilo.main} src="img/Rectangle-1.png" />
            <nav>
                <p className={estilo.botao01}>Curtir <BiLike /> </p>
                <p className={estilo.botao02}>Comentar<BiComment /> </p>
                <p className={estilo.botao03}>Compartilhar <BsArrow90DegRight /> </p>
            </nav>
        </div>
    )
}

// import React from "react";
// import "./style.css";

// export const Box = () => {
//   return (
//     <div className="box">
//       <img className="card" alt="Card" src="card.png" />
//     </div>
//   );
// };

// import React from "react";
// import "./style.css";


