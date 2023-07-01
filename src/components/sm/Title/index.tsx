import { StyledH1 } from "./styles";

interface TitleProps {
    string: string,
    emphasis: string
}

export function Title({ string, emphasis }: TitleProps){
    return(
        <StyledH1>
            {string} <span>{emphasis}</span>
        </StyledH1>
    )
}