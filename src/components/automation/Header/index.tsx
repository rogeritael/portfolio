import { HeaderComponent } from "./styles";
import { FaWhatsapp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

export function Header(){
    return(
        <HeaderComponent>
            <IoMenu className="mobile_menu"/>
            
            <Link to="" className="logo">
                <h2>Roger Rosa</h2>
            </Link>

            <div className="header_links">
                <a href="#">
                    <FaWhatsapp />
                    WhatsApp
                </a>
                <Link to="#" className="orcamento">
                    Solicitar Orçamento
                </Link>
            </div>
        </HeaderComponent>
    )
}