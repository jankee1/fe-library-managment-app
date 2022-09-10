interface ButtonProps { 
    text: string
    type: "button" | "submit" | "reset"
}

export const Button = (props: ButtonProps) => {
    return (
        <button type={props.type}>{props.text}</button>
    );
}