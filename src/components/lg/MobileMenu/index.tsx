import { StyledSection } from "./styles";

import { IoIosClose } from 'react-icons/io'

interface MobileMenuProps {
    isMobileMenuOpen: boolean,
    setIsMobileMenuOpen: (param: boolean) => void
}

export function MobileMenu({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileMenuProps){
    return(
        <StyledSection isMobileMenuOpen={isMobileMenuOpen}>
            <span className="background" onClick={() => setIsMobileMenuOpen(false)}></span>
            <nav>
                <span> <IoIosClose fill="#fff" onClick={() => setIsMobileMenuOpen(false)} /> </span>

                <a href="#home">.home&#40; &#41;</a>
                <a href="#skills">.habilidades&#40; &#41;</a>
                <a href="#projects">.projetos&#40; &#41;</a>
                <a href="#about">.sobreMim&#40; &#41;</a>
                <a href="/">.contato&#40; &#41;</a>
            </nav>
        </StyledSection>
    )
}