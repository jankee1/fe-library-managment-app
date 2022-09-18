import { useEffect, useState } from "react";
import { usePrivateAxios } from "../../hooks/usePrivateAxios";
import { SingleItemUserLibrary } from "./SingleItemUserLibrary";
import { BookType } from "types"


export const UserLibrary = () => {

    const privateAxios = usePrivateAxios()
    const [booksInLibrary, setBooksInLibrary] = useState<BookType [] | []>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getBooks = async (): Promise<void> => {
        try {
            const { data } = await privateAxios.get<BookType []>('book')
            setBooksInLibrary(data)
            setIsLoaded(true);
        } catch(e) {
            console.error(e)
            setIsLoaded(false)
        }
    }

    useEffect( () => {
        void getBooks();
    }, [])

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