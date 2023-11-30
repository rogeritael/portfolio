import styled, { keyframes } from "styled-components";

const slide = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-626px);
    }
`

export const InfiniteListContainer = styled.div`
    position: absolute;
    bottom: 40px;
    right: 0;
    max-width: 400px;
    width: 100%;
    padding: 8px 20px;
    overflow: hidden;

    &::after {
        content: '';
        width: 32px;
        height: 100%;
        position: absolute;
        bottom: 0;
        background: linear-gradient(90deg, #0C0B1C 0%, rgba(12, 11, 28, 0.00) 100%);
        left: 0;
    }

    .rail {
        display: flex;
        gap: 20px;
        animation: ${slide} 15s linear infinite;
    }
`