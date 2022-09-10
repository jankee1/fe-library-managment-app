interface ButtonProps { 
    text: string
}

export const Button = (props: ButtonProps) => {
    return (
        <button>{props.text}</button>
    );
}