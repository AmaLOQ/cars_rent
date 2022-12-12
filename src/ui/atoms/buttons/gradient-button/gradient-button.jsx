import { StyledButtonGradient } from "./gradient-button-style"

export const GradientButton = ({ isSmallGradientBtn, text, onClick }) => <StyledButtonGradient onClick={onClick} isSmallGradientBtn={isSmallGradientBtn}>{text}</StyledButtonGradient>