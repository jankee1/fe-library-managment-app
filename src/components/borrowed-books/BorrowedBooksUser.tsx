import { useEffect, useState } from "react";
import { getBorrowedBooks } from "../../helpers/get-borrowed-books.helper";
import { BorrowedBookUserType } from "types";
import { usePrivateAxios } from "../../hooks/usePrivateAxios";
import { SingleBorrowedBookUserItem } from "./SingleBorrowedBookUserItem";

export const BorrowedBooksUser = () => {

    const privateAxios = usePrivateAxios()
    const [borrowedBooks, setBorrowedBooks] = useState<BorrowedBookUserType []>()
    const [isLoaded, setIsLoaded] = useState(false);

    const myBorrowedBooks = async (): Promise<void> => {
        const myBooks = await getBorrowedBooks();
        if(!myBooks) setIsLoaded(false);

        myBooks && setBorrowedBooks(myBooks)
        setIsLoaded(true);
    }

    const handleReturnBook = async (bookId: string) =>{
        try {
            const { data } = await privateAxios.delete(`borrowed-books/${bookId}`)
            setIsLoaded(false)
        } catch(e) {
            console.error(e)
        }
    }

    useEffect( () => {
        void myBorrowedBooks();
    }, [isLoaded])

    return (
        <div>
        {!isLoaded && <p>loading...</p>}
        {isLoaded && borrowedBooks &&
            <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Borrowed at</th>
                <th>Fees</th>
                <th>Action</th>
            </tr>
            </thead>
                <tbody >
                    {borrowedBooks.map(
                        singleBorrowedBook => <SingleBorrowedBookUserItem 
                            handleReturnBook={() => handleReturnBook(singleBorrowedBook.bookId)}
                            key={singleBorrowedBook.borrowId} 
                            bookId={singleBorrowedBook.bookId} 
                            title={singleBorrowedBook.title} 
                            author={singleBorrowedBook.author} 
                            borrowDate={singleBorrowedBook.borrowDate} 
                            additionalFees={singleBorrowedBook.additionalFees ?? 0} 
                        />)
                    }
                </tbody>
            </table>
        }

    </div>
  );
}