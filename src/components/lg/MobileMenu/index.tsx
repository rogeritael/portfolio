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

                <a href="#" onClick={() => setIsMobileMenuOpen(false)}>.home&#40; &#41;</a>
                <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>.habilidades&#40; &#41;</a>
                <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>.projetos&#40; &#41;</a>
                <a href="#contact_form" onClick={() => setIsMobileMenuOpen(false)}>.contato&#40; &#41;</a>
            </nav>
        </StyledSection>
    )
}