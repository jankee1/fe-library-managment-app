import { Button } from "../common/Button";

interface SingleItemLibraryProps {
    title: string;
    author: string;
    releaseDate: string;
    numberOfAvailableBooks: number;
}

export const SingleItemLibrary = (props: SingleItemLibraryProps) => {
    return (
            <tr>
                <td>{props.title}</td>
                <td>{props.author}</td>
                <td>{props.releaseDate}</td>
                <td>{props.numberOfAvailableBooks}</td>
                <td>
                    {props.numberOfAvailableBooks > 0 && <Button type="button" text="Borrow" />}
                </td>
            </tr>
  );
}