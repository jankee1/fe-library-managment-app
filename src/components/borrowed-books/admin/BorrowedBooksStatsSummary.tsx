interface BorrowedBooksStatSummaryProps {
    totalNumberOfBorrowed: number;
    totalNumberOfAvailable: number;
    totalFeesSum: number
}

export const BorrowedBooksStatSummary = (props: BorrowedBooksStatSummaryProps) => {
    return (
        <tr>
            <td colSpan={2}>Summary</td>
            <td>
                {props.totalNumberOfBorrowed}
            </td>
            <td>
                {props.totalNumberOfAvailable}
            </td>
            <td>
                {props.totalFeesSum}
            </td>
        </tr>
  );
}