import { Skill } from "../../sm/Skill";
import { Title } from "../../sm/Title";
import { StyledSection } from "./styles";

import { skills } from "../../../mocks/skills";

export function SkillsContainer(){
    return(
        <StyledSection id="skills">
            <Title
                string="Minhas"
                emphasis="Habilidades"
            />
            <div className="skills_container">
                {skills.map((skill) => (
                    <Skill skill_name={skill}/>
                ))}
            </div>
        </StyledSection>
    )
}