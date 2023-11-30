import { CoverContainer } from "./styles";
import cover from '../../../assets/automation/conver_bg.png'
import { Button } from "../Button";
import { InfiniteList } from "../InfiniteList";
import { InfiniteListItem } from "../InfiniteListItem";

export function Cover(){
    return(
        <CoverContainer>
            <div className="title_box">
                <h1>
                    Precisando de <br/> uma automação/bot?
                </h1>
                <p>
                    Como profissional experiente, desenvolvo soluções de automação totalmente adaptadas às suas necessidades. Seja para simplificar processos complexos ou otimizar fluxos de trabalho, aumentando a sua produtividade.
                </p>
                <Button />
            </div>
            <img src={cover} className="background" alt="capa de fundo" />
            <InfiniteList>
                <InfiniteListItem label="email" />
                <InfiniteListItem label="planilhas" />
                <InfiniteListItem label="bots" />
                <InfiniteListItem label="scrapping" />
                <InfiniteListItem label="conversores" />
            </InfiniteList>
        </CoverContainer>
    )
}