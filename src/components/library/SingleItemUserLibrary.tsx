interface SingleItemLibraryProps {
    title: string;
    author: string;
    releaseDate: string;
    numberOfAvailableBooks: number;
    isBorrowed: boolean;
    borrowThisBook: () => {}
}

export const SingleItemUserLibrary = (props: SingleItemLibraryProps) => {

    return (
            <tr>
                <td>{props.title}</td>
                <td>{props.author}</td>
                <td>{props.releaseDate}</td>
                <td>{props.numberOfAvailableBooks}</td>
                <td>
                    { !props.isBorrowed && props.numberOfAvailableBooks > 0 && <button onClick={props.borrowThisBook}>Borrow this book</button>}
                    { props.isBorrowed && "Book already borrowed"}
                </td>
            </tr>
  );
}