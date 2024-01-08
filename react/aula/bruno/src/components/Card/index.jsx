import estilo from "./style.module.css" 
import { BiLike,BiComment, BiGlobe} from "react-icons/bi";
import { BsArrow90DegRight } from "react-icons/bs";


export default function Card(){
    return(
        <div >
            <img className={estilo.logo} src="img/Ellipse-1.png" />
            <p className={estilo.nome}>Istituto irede</p>
            <p>12h <BiGlobe /></p>
            <img className={estilo.main} src="img/Rectangle-1.png" />
            <nav>
                <p>Curtir <BiLike /> </p>
                <p>Comentar<BiComment /> </p>
                <p>Compartilhar <BsArrow90DegRight /> </p>
            </nav>
        </div>
    )
}