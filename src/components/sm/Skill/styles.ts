import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    max-width: 100%;
    width: 100%;
    padding: 18px 24px;
    border: 1px solid var(--gray3);
    gap: 16px;
    border-radius: 8px;
    transition: 500ms;

    &:hover {
        border-color: var(--blue);
        background-color: #7E74F105;
    }
`