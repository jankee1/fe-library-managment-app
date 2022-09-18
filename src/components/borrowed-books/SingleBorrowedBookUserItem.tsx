import { BorrowedBookUserType } from "types";
import { Button } from "../common/Button";

export const SingleBorrowedBookUserItem = (props: BorrowedBookUserType) => {
    return (
            <tr>
                <td>{props.title}</td>
                <td>{props.author}</td>
                <td>{props.borrowDate}</td>
                <td>{props.additionalFees ? props.additionalFees : "N / A"}</td>
                <td>
                    <Button type="button" text="Return book" />
                </td>
            </tr>
  );
}