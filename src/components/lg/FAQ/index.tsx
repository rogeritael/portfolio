import { Accordion } from "../../md/Accordion";
import { Title } from "../../sm/Title";
import { StyledSection } from "./styles";

export function FAQ(){
    return (
        <StyledSection id="about">
            <Title
                string="Um Pouco Mais"
                emphasis="Sobre Mim"
            />
            <div className="FAQ_container">
                <Accordion
                    question="porque você escolheu a área da programação?"
                    response=""
                />
                <Accordion
                    question="Qual o seu maior sonho?"
                    response=""
                />
                <Accordion
                    question="Quais tecnologias você mais utiliza?"
                    response=""
                />
            </div>
        </StyledSection>
    )
}