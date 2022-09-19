interface Props {
    text: string
}
export const SuccessMessage = (props: Props) => {
    return <p>{props.text}</p>
}