import styled from "styled-components";

export const CoverContainer = styled.section`
    min-height: calc(100vh - 105px);
    display: flex;
    justify-content: center;

    .title_box{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;

        /* NÃO DEIXA O TITLEBOX EXATAMENTE NO CENTRO */
        margin-top: -100px;

        h1 {
            text-align: center;
            font-size: 48px;
            z-index: 1;
        }

        p {
            z-index: 1;
            max-width: 680px;
            text-align: center;
            color: #61616C;
            margin-bottom: 40px;
        }
    }

    .background {
        height: 80vh;
        position: absolute;
        right: 180px;
        bottom: 0;
        pointer-events: none;
    }

    
`