interface ButtonProps {
    styles?: React.CSSProperties;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    buttonText: string;
}
const Button = ({ styles, onClick, buttonText }: ButtonProps) => {
    return (
        <button style={styles} onClick={onClick}>
            {buttonText}
        </button>
    );
};
export default Button;
