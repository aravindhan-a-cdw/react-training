import style from './Button.module.scss';

/*
    Button component on which text, onClick handler and class names can be passed as props.
*/
const Button = ({text, onClick, className}) => {
    return (
        <button className={`${style.button} ${className}`} onClick={onClick}>{text}</button>
    );
}

export default Button;
