import { usePrivateAxios } from "../../../hooks/usePrivateAxios";
import { BorrowedBookUserType } from "types";

export const SingleBorrowedBookUserItem = (props: BorrowedBookUserType) => {

    const privateAxios = usePrivateAxios()

    return (
            <tr>
                <td>{props.title}</td>
                <td>{props.author}</td>
                <td>{props.borrowDate}</td>
                <td>{props.additionalFees ? props.additionalFees : "N / A"}</td>
                <td>
                    <button onClick={props.handleReturnBook}>Return book</button>
                </td>
            </tr>
  );
}