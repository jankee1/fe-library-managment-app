import { useState } from "react";
import { BorrowerForStats } from "src/interfaces";


export const BorrowersStatsSingleItem = (props: BorrowerForStats) => {

    const [showBooksList, setShowBooksList] = useState(false);

    const handleBooksListVisibility = (): void => {
        setShowBooksList(!showBooksList)
    }

    return (
        <>
            <tr>
                <td>{props.fullName}</td>
                <td>{props.email}</td>
                <td>{props.numberOfBorrowed} <button type="button" onClick={handleBooksListVisibility}>Show books</button> </td>
                <td>{props.feesSum}</td>
            </tr>
            {showBooksList &&
                <tr>
                    <td colSpan={4}>
                        {
                            props.borrowedBooksDetails.map(item => {
                                return <ul>
                                    <ol>
                                        Title: {item.bookTitle}
                                        <li>
                                            Author: {item.authorFullName}
                                        </li>
                                        <li>
                                            Borrowed since: {new Date(item.bookBorrowedAt).toLocaleDateString()}
                                        </li>
                                        <li>
                                            Fees: {item.feeForBook}
                                        </li>
                                    </ol>
                                </ul>
                            })
                        }
                    </td>
                </tr>
            }
        </>
  );
}