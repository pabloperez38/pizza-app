import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledButton = styled(motion.button)`
    padding: 0.8rem 1.5rem;
    outline: none;
    border-radius: ${({ radius }) => `${radius}px`};
    background: var(--btn-gradient);
    color: #fff;
    text-transform: uppercase;
    font-weight: 400;
    cursor: pointer;
    border: none;
    &:hover {
        opacity: 0.9;       
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
