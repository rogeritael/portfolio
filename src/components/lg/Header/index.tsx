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
                        <a href="#skills">Habilidades</a>
                    </li>
                    <li>
                        <a href="#projects">Projetos</a>
                    </li>
                    <li>
                        <a href="#about">Sobre mim</a>
                    </li>
                </ul>
            </nav>
            <a className="contact_button" href="mailto:rogerrosa.dev@gmail.com">
                Entre em contato
                <BsArrowRight />
            </a>
        </StyledHeader>
    )
}