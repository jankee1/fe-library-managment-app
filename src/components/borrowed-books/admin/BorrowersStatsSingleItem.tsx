import { useState } from "react";
import { BorrowerForStats } from "src/interfaces";

import "./BorrowersStatsSingleItem.css"

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
                <td>{props.numberOfBorrowed} <button type="button" className="book-btn" onClick={handleBooksListVisibility}>Show books</button> </td>
                <td>{props.feesSum}</td>
            </tr>
            {showBooksList &&
                <tr>
                    <td colSpan={4}>
                        <div className="borrowed-books-from-borrower">
                            {
                                props.borrowedBooksDetails.map(item => {
                                    return <div key={item.borrowId} className="borrowed-books-from-borrower-single-element">
                                        <ul>
                                            <ol>
                                                <b>Title:</b> {item.bookTitle}
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
                                    </div>
                                })
                            }
                        </div>
                    </td>
                </tr>
            }
        </>
  );
}