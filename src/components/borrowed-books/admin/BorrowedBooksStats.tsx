import { useEffect, useState } from "react";
import { SingleBookItemDetailsForStats } from "src/interfaces";
import { BorrowedBookItemForStats } from "types";
import { BorrowedBooksStatSingleItem } from "./BorrowedBooksStatsSingleItem";
import { BorrowedBooksStatSummary } from "./BorrowedBooksStatsSummary";

interface BorrowedBooksStatsProps {
    booksForStats: BorrowedBookItemForStats[];
}

export const BorrowedBooksStats = (props: BorrowedBooksStatsProps) => {

    const [borrowedBooksForStats, setBorrowedBooksForStats] = useState<SingleBookItemDetailsForStats []>()

    const filterBookDetailsForStats = (borrowedBooks : BorrowedBookItemForStats[]) => {

        let booksArr: SingleBookItemDetailsForStats[] = [];
        let bookItem: SingleBookItemDetailsForStats = {
            bookId: '',
            title: '',
            author: '',
            numberOfBorrowed: 0,
            numberOfAvailable: 0,
            feesSum: 0,
        }

        for(const book of borrowedBooks) {
            if(booksArr.filter(item => item.bookId === book.bookId).length === 0) {
                bookItem.bookId = book.bookId;
                bookItem.title = book.bookTitle;
                bookItem.author = `${book.bookAuthorFirstName} ${book.bookAuthorLastName}`;
                bookItem.numberOfBorrowed = borrowedBooks.filter(singleBook => singleBook.bookId === book.bookId).length;
                bookItem.numberOfAvailable = book.bookNumberOfAvailable;
                bookItem.feesSum = borrowedBooks.filter(singleItem => singleItem.bookId === book.bookId).map(singleItem => singleItem.userfees).reduce((a, b) => a + b, 0)

                booksArr.push(bookItem)

                bookItem = {
                    bookId: '',
                    title: '',
                    author: '',
                    numberOfBorrowed: 0,
                    numberOfAvailable: 0,
                    feesSum: 0,
                }
            }
        }

        setBorrowedBooksForStats(booksArr)
    }

    useEffect(() => {
        filterBookDetailsForStats(props.booksForStats)
    },[])

    return (

        <>
            { borrowedBooksForStats &&
                borrowedBooksForStats.map(singleItemForStats => <BorrowedBooksStatSingleItem
                    key={singleItemForStats.bookId}
                    bookId={singleItemForStats.bookId}
                    author={singleItemForStats.author}
                    title={singleItemForStats.title}
                    numberOfBorrowed={singleItemForStats.numberOfBorrowed}
                    numberOfAvailable={singleItemForStats.numberOfAvailable}
                    feesSum={singleItemForStats.feesSum}
                />)
            }
            { borrowedBooksForStats &&
                <BorrowedBooksStatSummary 
                    totalNumberOfBorrowed={borrowedBooksForStats.map(singleItem => singleItem.numberOfBorrowed).reduce((a, b) => a + b, 0)}
                    totalNumberOfAvailable={borrowedBooksForStats.map(singleItem => singleItem.numberOfAvailable).reduce((a, b) => a + b, 0)}
                    totalFeesSum={borrowedBooksForStats.map(singleItem => singleItem.feesSum).reduce((a, b) => a + b, 0)}
                />
            }
        </>
  );
}