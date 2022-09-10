import { Button } from "../common/Button";

interface SingleBorrowedBookUserItemProps {
    title: string;
    author: string;
    returnDate: string;
    additionalFees?: number
}

export const SingleBorrowedBookUserItem = (props: SingleBorrowedBookUserItemProps) => {
    return (
            <tr>
                <td>{props.title}</td>
                <td>{props.author}</td>
                <td>{props.returnDate}</td>
                <td>{props.additionalFees ? props.additionalFees : "N / A"}</td>
                <td>
                    <Button type="button" text="Return book" />
                </td>
            </tr>
  );
}