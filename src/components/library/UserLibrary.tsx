import { useEffect, useState } from "react";
import { usePrivateAxios } from "../../hooks/usePrivateAxios";
import { SingleItemUserLibrary } from "./SingleItemUserLibrary";
import {Book} from "types"


export const UserLibrary = () => {

    const privateAxios = usePrivateAxios()
    const [booksInLibrary, setBooksInLibrary] = useState<Book [] | []>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getBooks = async () => {
        try {
            const { data } = await privateAxios.get<Book []>('book')
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
                                (book: Book) => <SingleItemUserLibrary 
                                    key={Math.floor(Math.random() * (1000000 - 1 + 1)) + 1} 
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