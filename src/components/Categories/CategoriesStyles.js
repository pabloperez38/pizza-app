import { motion } from "framer-motion";
import styled from "styled-components";

export const CategoriasWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1300px;
    margin: 0 15px;
    @media (min-width: 768px) {
        padding-top: 30px;
        text-align: center;
    }
`;

export const CategoriasContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-around;
    flex-wrap: wrap;
`;
export const CardCategoria = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 150px;
    background-color: var(--gray-bg);
    padding: 2rem 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    cursor: pointer;
    h2 {
        font-size: 1rem;
    }
`;

export const BorderDecoration = styled.div`
    height: 5px;
    width: 30%;
    border-radius: 5px;
    background: var(--btn-gradient);
`;
