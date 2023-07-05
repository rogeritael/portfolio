import { AiOutlinePlus } from "react-icons/ai";
import { StyledDiv } from "./styles";
import { useState } from "react";

interface AccordionProps {
    question: string,
    response: string
}

export function Accordion({ question, response }: AccordionProps){
    const [isResponseOpen, setIsResponseOpen] = useState(false)

    function handleOpenCloseResponse(){
        isResponseOpen ? setIsResponseOpen(false) : setIsResponseOpen(true);
    }    

    return(
        <StyledDiv data-aos="fade-up">
            <button className={isResponseOpen ? 'active': ''} onClick={() => handleOpenCloseResponse()}>
                { question }
                <AiOutlinePlus />
            </button>
            <div className={isResponseOpen ? 'response' : 'closed response'}>
                <p>{ response }</p>
            </div>
        </StyledDiv>
    )
}