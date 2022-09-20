
interface SingleItemLibraryProps {
    id: string;
    title: string;
    author: string;
    releaseDate: string;
    numberOfAvailableBooks: number;
    edit: (id: string) => void;
    delete: (id: string) => void;
}

export const SingleItemAdminLibrary = (props: SingleItemLibraryProps) => {

    return (
            <tr>
                <td>{props.title}</td>
                <td>{props.author}</td>
                <td>{props.releaseDate}</td>
                <td>{props.numberOfAvailableBooks}</td>
                <td>
                    <button type="button" onClick={() => props.edit(props.id)}>Edit</button>
                    <button type="button" onClick={() => props.delete(props.id)}>Delete</button>

                </td>
            </tr>
  );
}