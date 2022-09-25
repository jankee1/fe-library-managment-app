

interface BorrowedBooksStatSingleItemProps {
    bookId: string;
    title: string;
    author: string;
    numberOfBorrowed: number;
    numberOfAvailable: number;
    feesSum: number
}

export const BorrowedBooksStatSingleItem = (props: BorrowedBooksStatSingleItemProps) => {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.author}</td>
            <td>{props.numberOfBorrowed}</td>
            <td>{props.numberOfAvailable}</td>
            <td>{props.feesSum}</td>
        </tr>
  );
}