import { SingleItemLibrary } from "./SingleItemLibrary";


export const Library = () => {

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
                            book => <SingleItemLibrary 
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