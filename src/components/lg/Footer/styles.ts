import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    background-color: #272727;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    /* gap: 12px; */

    h2 {
        font-size: 32px;
        font-weight: normal;
        color: var(--gray4);

        span {
            font-weight: bold;
            color: #fff;
        }
    }

    .socials {
        padding: 24px 0;

        a {
            padding: 8px;
            font-size: 18px;
        }
    }

    p {
        color: var(--gray4);

        &:last-child {
            color: #fff;
        }

        span {
            color: var(--blue);
            text-decoration: underline;
        }
    }
`;