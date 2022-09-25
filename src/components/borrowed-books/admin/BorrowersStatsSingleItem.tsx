import { BorrowerForStats } from "src/interfaces";


export const BorrowersStatsSingleItem = (props: BorrowerForStats) => {
    return (
        <tr>
            <td>{props.fullName}</td>
            <td>{props.email}</td>
            <td>{props.numberOfBorrowed} <button type="button">Show books</button> </td>
            <td>{props.feesSum}</td>
        </tr>
  );
}