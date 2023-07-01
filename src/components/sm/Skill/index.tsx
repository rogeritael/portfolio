import { StyledDiv } from "./styles";

import skill_icon from '../../../assets/icons/skill_icon.svg'

export function Skill( { skill_name }: { skill_name: string } ){
    return(
        <StyledDiv data-aos="fade-up">
            <img src={skill_icon} alt="ícone de habilidade técnica" />
            <p>{skill_name}</p>
        </StyledDiv>
    )
}