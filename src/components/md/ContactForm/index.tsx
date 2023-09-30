import { AiOutlineArrowRight } from "react-icons/ai";
import { FormContainer } from "./styles";

export function ContactForm(){
    return(
        <FormContainer>
            <h2>Entre em contato para </h2>
            <h2 className="highlight">conversarmos melhor </h2>
            <form action="http://formsubmit.co/rogeritael.dev@gmail.com" method="POST">
                <input type="text" placeholder="Seu nome" name="name" required />
                <input type="email" placeholder="Seu email" name="email" required />
                <textarea cols={30} rows={10} name="message" required placeholder="Digite a sua mensagem">

                </textarea>
                <button type="submit">Enviar <AiOutlineArrowRight /></button>

                <input type="hidden" name="_subject" value="Novo Contato!"/>
                <input type="text" name="_honey" value="display:none" style={{display: 'none'}}/>
                <input type="hidden" name="_captcha" value="false"/>
            </form>
        </FormContainer>
    )
}