import { Link } from "react-router-dom";
import { StyledHeader } from "./styles";

import { BsArrowRight, BsThreeDotsVertical } from 'react-icons/bs';

interface HeaderProps {
    setIsMobileMenuOpen: (param: boolean) => void
}

export function Header({ setIsMobileMenuOpen }: HeaderProps){
    return(
        <StyledHeader>
            <button className="mobile_menu" onClick={() => setIsMobileMenuOpen(true)}>
                <BsThreeDotsVertical  />
            </button>
            <p className="mobile_brand">
                Roger<span>Rosa</span>
            </p>
            <nav>
                <ul className="menu">
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#skills">Habilidades</a>
                    </li>
                    <li>
                        <a href="#projects">Projetos</a>
                    </li>
                    <li>
                        <Link to="/automation">Automação</Link>
                    </li>
                </ul>
            </nav>
            <a className="contact_button" href="#contact_form">
                Entre em contato
                <BsArrowRight />
            </a>
        </StyledHeader>
    )
}