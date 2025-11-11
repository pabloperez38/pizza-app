import styled from "styled-components";

export const HeroContainerStyled = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
    gap: 30px;
    padding: 2rem 1rem;
    h1 {
        margin-bottom: 1rem;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const HeroTextContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    h1 {
        font-size: 3rem;
        margin: 10px 0;
    }
    h2 {
        font-size: 1.5rem;
        margin: 10px 0;
    }
    p {
        font-size: 1.2rem;
        margin: 10px 0;
    }
    @media (max-width: 768px) {
        width: 80%;
        align-items: center;
        text-align: center;
    }
`;

export const HeroImageContainerStyled = styled.div`
    width: 45%;
    img {
        width: 100%;
        padding-bottom: 1rem;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;
