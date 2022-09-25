import { useEffect, useState } from "react";
import { usePrivateAxios } from "../../hooks/usePrivateAxios";
import { BorrowedBookItemForStats } from "types";
import { BorrowedBooksStatSingleItem } from "./BorrowedBooksStatsSingleItem";
import { BorrowedBooksStatSummary } from "./BorrowedBooksStatsSummary";

interface SingleBookItemDetailsForStats {
    bookId: string;
    author: string;
    title: string;
    numberOfBorrowed: number;
    numberOfAvailable: number;
    feesSum: number;
}

export const BorrowedBooksStats = () => {

    const privateAxios = usePrivateAxios()
    const [borrowedBooksForStats, setBorrowedBooksForStats] = useState<SingleBookItemDetailsForStats []>()
    const [isLoaded, setIsLoaded] = useState(false);

    const getBorrowedBooksForStats = async () =>{
        try {
            const { data } = await privateAxios.get<BorrowedBookItemForStats[]>("borrowed-books/stats")

            setBorrowedBooksForStats(filterBookDetailsForStats(data))
            setIsLoaded(true)
        } catch(e) {console.error(e)}
    }

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

        return booksArr
    }

    useEffect(() => {
        getBorrowedBooksForStats()
    },[])

    return (

        <>
            {!isLoaded && <p>loading...</p>}
            
            {isLoaded && borrowedBooksForStats &&
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Book title</th>
                                <th>Author</th>
                                <th>Number of borrowed books</th>
                                <th>Number of available books</th>
                                <th>Fees sum</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
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
                            <BorrowedBooksStatSummary 
                                totalNumberOfBorrowed={borrowedBooksForStats.map(singleItem => singleItem.numberOfBorrowed).reduce((a, b) => a + b, 0)}
                                totalNumberOfAvailable={borrowedBooksForStats.map(singleItem => singleItem.numberOfAvailable).reduce((a, b) => a + b, 0)}
                                totalFeesSum={borrowedBooksForStats.map(singleItem => singleItem.feesSum).reduce((a, b) => a + b, 0)}
                            />
                        </tbody>
                    </table>
                </div>
            }
        </>
  );
}