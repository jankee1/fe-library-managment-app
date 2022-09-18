import { useEffect, useState } from "react";
import { BorrowedBookUserType } from "types";
import { usePrivateAxios } from "../../hooks/usePrivateAxios";
import { SingleBorrowedBookUserItem } from "./SingleBorrowedBookUserItem";

export const BorrowedBooksUser = () => {

    const privateAxios = usePrivateAxios()
    const [borrowedBooks, setBorrowedBooks] = useState<BorrowedBookUserType []>()
    const [isLoaded, setIsLoaded] = useState(false);

    const getBorrowedBooks = async (): Promise<void> => {
        try {
            const { data } = await privateAxios.get<BorrowedBookUserType []>('borrowed-books')
            setBorrowedBooks(data)
            setIsLoaded(true);
        } catch(e) {
            console.error(e)
            setIsLoaded(false)
        }
    }

    const handleReturnBook = async (bookId: string) =>{
        try {
            const { data } = await privateAxios.delete(`borrowed-books/${bookId}`)
            getBorrowedBooks()
        } catch(e) {
            console.error(e)
        }
    }

    useEffect( () => {
        void getBorrowedBooks();
    }, [])

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