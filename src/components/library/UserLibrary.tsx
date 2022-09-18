import { useEffect, useState } from "react";
import { usePrivateAxios } from "../../hooks/usePrivateAxios";
import { SingleItemUserLibrary } from "./SingleItemUserLibrary";
import { BookType, BorrowedBookUserType } from "types"


export const UserLibrary = () => {

    const privateAxios = usePrivateAxios()
    const [booksInLibrary, setBooksInLibrary] = useState<BookType [] | []>([]);
    const [borrowedBooks, setBorrowedBooks] = useState<BorrowedBookUserType [] | []>([])
    const [isLoaded, setIsLoaded] = useState(false);

    const getBooks = async (): Promise<void> => {
        try {
            const { data } = await privateAxios.get<BookType []>('book')

            let booksInLibraryWithCheckedStatus = [] as BookType[]

            for(const book of data) {
                borrowedBooks?.some((item: BorrowedBookUserType) => item.bookId === book.id) ? book.isBorrowed = true : book.isBorrowed = false;
                booksInLibraryWithCheckedStatus.push(book)
            }
            setBooksInLibrary(booksInLibraryWithCheckedStatus)
            setIsLoaded(true);
        } catch(e) {
            console.error(e)
            setIsLoaded(false)
        }
    }

    const getBorrowedBooks = async (): Promise<void> => {
        try {
            const { data } = await privateAxios.get<BorrowedBookUserType []>('borrowed-books')
            setBorrowedBooks(data)
        } catch(e) {
            console.error(e)
            setIsLoaded(false)
        }
    }

    const borrowThisBook = async (bookId: string) => {
        try {
            await privateAxios.post('borrowed-books', {bookId})
            setIsLoaded(false)
        } catch(e) {
            console.error(e)
        }
    }

    useEffect( () => {
        void getBorrowedBooks();
        void getBooks();
    }, [isLoaded])


    return (
        <div>
            {!isLoaded && <p>loading...</p>}
            {isLoaded && 
                <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Date of release</th>
                    <th>In stock</th>
                    <th>Action</th>
                </tr>
                </thead>
                    <tbody>
                        {
                            booksInLibrary.map(
                                (book: BookType) => <SingleItemUserLibrary 
                                    borrowThisBook={() => borrowThisBook(book.id)}
                                    isBorrowed={book.isBorrowed}
                                    key={book.id} 
                                    title={book.title} 
                                    author={`${book.authorFirstName} ${book.authorLastName}`} 
                                    releaseDate={new Date(book.publishedOn).toDateString()} 
                                    numberOfAvailableBooks={book.numberOfAvailable} 
                                />)
                        }
                    </tbody>
                </table>
            }
            
        </div>
  );
}