import { StyledButton } from "./ButtonStyles";

const Button = ({ radius = "32", disabled = false, children }) => {
    return (
        <StyledButton radius={radius} disabled={disabled}>
            {children}
        </StyledButton>
    );
};

export default Button;
