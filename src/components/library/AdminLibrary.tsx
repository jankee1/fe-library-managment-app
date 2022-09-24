import { useEffect, useState } from "react";
import { usePrivateAxios } from "../../hooks/usePrivateAxios";
import { BookType } from "types";
import { AdminCreateNewBook } from "./AdminCreateNewBook";
import { SingleItemAdminLibrary } from "./SingleItemAdminLibrary";


export const AdminLibrary = () => {
    const privateAxios = usePrivateAxios()
    const [booksInLibrary, setBooksInLibrary] = useState<BookType [] | []>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getBooks = async (): Promise<void> => {
        setIsLoaded(false)
        try {
            const { data } = await privateAxios.get<BookType []>('book')
            setBooksInLibrary(data)
        } catch(e) {
            console.error(e)
        }
    }



    useEffect( () => {
        void getBooks();
        setIsLoaded(true)
    }, [isLoaded])

    return (
        <div>
            <AdminCreateNewBook setIsLoaded={setIsLoaded}/>
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
                            book => <SingleItemAdminLibrary 
                                id={book.id} 
                                key={book.id} 
                                title={book.title} 
                                authorFirstName={book.authorFirstName} 
                                authorLastName={book.authorLastName}
                                releaseDate={new Date(book.publishedOn).toDateString()} 
                                numberOfAvailableBooks={book.numberOfAvailable} 
                                setIsLoaded={setIsLoaded}
                            />)
                    }
                </tbody>
            </table>
        }
        </div>
  );
}