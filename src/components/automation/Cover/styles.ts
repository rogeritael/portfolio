import styled from "styled-components";

export const CoverContainer = styled.section`
    min-height: calc(100vh - 105px);
    display: flex;
    justify-content: center;
    position: relative;

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

        .infinite_list {
            position: relative;
            display: none;
        }

        .mobile_whatsapp {
            z-index: 1;
            align-items: center;
            font-size: 14px;
            gap: 8px;
            display: none;
        }
    }

    .background {
        height: 80vh;
        position: absolute;
        right: 180px;
        bottom: 0;
        pointer-events: none;
    }

    @media(max-width: 1024px){
        .title_box{
            h1 {
                font-size: 38px;
            }

            p {
                font-size: 14px;
                color: #fff;
                opacity: 0.8;
                max-width: 540px;
            }
        }

        .background {
            right: 5%;
        }
    }

    @media(max-width: 600px){
        .background {
            right: 0;
            width: 100%;
            object-fit: cover;
        }
    }

    @media(max-width: 425px){
        /* height: 100vh; */

        .infinite_list {
            display: none;
        }

        .title_box{
            margin-top: 0;
            position: absolute;
            bottom: 20px;
            
            /* h1, p {
                position: absolute;
                top: 50vh;
                transform: translateY(-50vh);
            } */

            h1 {
                font-size: 32px;
                width: 100%;
                border: 1px solid red;
            }

            p {
                border: 1px solid red;
            }

            .mobile_whatsapp {
                display: flex;
            }

            .infinite_list {
                display: flex;
                /* right: -20px; */
                bottom: -10px;
            }

            p {
                width: 95vw;
                color: #fff;
                opacity: 0.8;
                max-width: 100%;
            }
        }
    }
    
`