import { Link } from "react-router-dom";
import { ButtonComponent } from "./styles";

export function Button(){
    return(
        <ButtonComponent>
            <Link to='#'>
                Solicitar Orçamento
            </Link>
        </ButtonComponent>
    )
}