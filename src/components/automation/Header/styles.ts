import styled from "styled-components";

// 721AE7

export const HeaderComponent = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding:  30px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0C0B1C;
    z-index: 2;

    .logo {
        position: absolute;

        h2 {
            font-size: 16px;
            text-transform: uppercase;
        }
    }

    .mobile_menu {
        opacity: 0;
        pointer-events: none;
        font-size: 24px;
    }

    .header_links {
        display: flex;
        align-items: center;
        gap: 24px;

        a {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;

            &.orcamento {
                background-color: #721AE7;
                padding: 12px 24px;
            }
        }
    }


    @media(max-width: 768px){
        .mobile_menu {
            opacity: 1;
            pointer-events: auto;
        }

        .header_links {
            display: none;
        }

        .logo {
            left: 50%;
            transform: translateX(-50%);
        }

    }

    @media(max-width: 425px){
        padding: 20px 20px;
    }  
`