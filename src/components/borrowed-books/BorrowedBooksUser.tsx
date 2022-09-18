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
                <th>Return date</th>
                <th>Fees</th>
                <th>Action</th>
            </tr>
            </thead>
                <tbody>
                    {borrowedBooks.map(
                        singleBorrowedBook => <SingleBorrowedBookUserItem 
                            key={singleBorrowedBook.id} 
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