import styled, { keyframes } from "styled-components";

const arrow_animation = keyframes`
    0% {
        right: 0;
    }
    50% {
        right: -8px;
    }
    100% {
        right: 0;
    }
`

export const StyledHeader = styled.header`
    width: 100%;
    background-color: var(--bg);
    border-bottom: 2px solid #202226;
    height: 84px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 48px;
    font-size: 14px;
    position: fixed;
    top: 0;
    left: 0;

    .menu {
        display: flex;
        gap: 48px;

        li {

            a {
                position: relative;

                &::after {
                    content: '';
                    height: 2px;
                    width: 0;
                    background-color: #fff;
                    position: absolute;
                    bottom: -6px;
                    transition: 500ms;
                    transform-origin: left;
                    right: 0;
                }

                &:hover {
                    &::after {
                        left: 0;
                        width: 100%;
                    }
                }
            }
        }
    }

    .mobile_menu {
        display: none;
        background-color: transparent;
        
        svg {
            font-size: 20px;
            transform: scaleX(-1);
        }
    }

    .mobile_brand {
        font-size: 20px;
        font-weight: bold;
        display: none;

        span {
            color: var(--blue);
        }
    }

    .contact_button {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 16px 24px;
        background-color: var(--blue);
        cursor: pointer;
        transition: 300ms ease-in-out;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            width: 0;
            height: 100%;
            left: 0;
            bottom: 0;
            transition: 500ms ease-in-out;
            background-color: #ffffff20;
        }

        &:hover {
            &::before {
               width: 100%;
            }
        }

        svg {
            position: relative;
            right: 0;
            animation: ${arrow_animation} 1000ms ease-in-out infinite;
        }
    }


    @media(max-width: 768px){
        padding: 0 24px;
        justify-content: space-between;
        display: flex;
        justify-content: space-between;
        
        .mobile_menu, .mobile_brand {
            display: block;
        }

        .mobile_menu {
            order: 2;
        }

        .menu, .contact_button {
            display: none;
        }
    }
    
    @media(max-width: 425px){
        
    }
`