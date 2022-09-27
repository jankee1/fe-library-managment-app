import { BorrowedBookUserType } from "types";

export const SingleBorrowedBookUserItem = (props: BorrowedBookUserType) => {

    return (
            <tr>
                <td>{props.title}</td>
                <td>{props.author}</td>
                <td>{props.borrowDate}</td>
                <td>{props.additionalFees ? props.additionalFees : "N / A"}</td>
                <td>
                    <button onClick={props.handleReturnBook} className="book-btn">Return book</button>
                </td>
            </tr>
  );
}