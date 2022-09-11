import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { SingleItemUserLibrary } from "./SingleItemUserLibrary";


export const UserLibrary = () => {

    const {jwtAccessToken, setJwtAccessToken} = useContext(AuthContext);
    console.log(jwtAccessToken)
    const books = [
        {
            title: "test",
            author: "author test",
            releaseDate: "2022",
            numberOfAvailableBooks: 5
        },
        {
            title: "test",
            author: "author test",
            releaseDate: "2022",
            numberOfAvailableBooks: 5
        },
        {
            title: "test",
            author: "author test",
            releaseDate: "2022",
            numberOfAvailableBooks: 0
        },
        {
            title: "test",
            author: "author test",
            releaseDate: "2022",
            numberOfAvailableBooks: 5
        },
        {
            title: "test",
            author: "author test",
            releaseDate: "2022",
            numberOfAvailableBooks: 5
        }
    ]

    return (
        <div>
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
                        books.map(
                            book => <SingleItemUserLibrary 
                                key={Math.floor(Math.random() * (1000000 - 1 + 1)) + 1} 
                                title={book.title} 
                                author={book.author} 
                                releaseDate={book.releaseDate} 
                                numberOfAvailableBooks={book.numberOfAvailableBooks} 
                            />)
                    }
                </tbody>
            </table>
        </div>
  );
}