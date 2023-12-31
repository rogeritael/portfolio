import styled from "styled-components";

export const StyledDiv = styled.div`
    max-width: 100%;
    width: 100%;
    padding: 18px 24px;
    border-radius: 8px;
    transition: 500ms;
    border: 1px solid var(--gray3);

    .header {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 14px;

        p {
            color: var(--blue);
        }

        svg {
            width: 36px;
            height: 36px;
            fill: var(--blue);
        }
    }

    .description {
        span {
            font-weight: 200;
            margin-right: 8px;
            font-size: 14px;
        }

        font-weight: normal;
    }

    &:hover {
        border-color: var(--blue);
        background-color: #7E74F105;
    }
`