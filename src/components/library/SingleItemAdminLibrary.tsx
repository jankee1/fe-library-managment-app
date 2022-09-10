import { Button } from "../common";

interface SingleItemLibraryProps {
    title: string;
    author: string;
    releaseDate: string;
    numberOfAvailableBooks: number;
}

export const SingleItemAdminLibrary = (props: SingleItemLibraryProps) => {
    return (
            <tr>
                <td>{props.title}</td>
                <td>{props.author}</td>
                <td>{props.releaseDate}</td>
                <td>{props.numberOfAvailableBooks}</td>
                <td>
                    <Button type="button" text="Edit" />
                    <Button type="button" text="Delete" />
                </td>
            </tr>
  );
}