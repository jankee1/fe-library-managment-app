import { SingleBorrowedBookUserItem } from "./SingleBorrowedBookUserItem";

export const BorrowedBooksUser = () => {
    
    const borrowedBooks = [
        {
            title: "test",
            author: "author test",
            returnDate: "2022",
            additionalFees: 4.5
        },
        {
            title: "test",
            author: "author test",
            returnDate: "2022",
        },
        {
            title: "test",
            author: "author test",
            returnDate: "2022",
        }
    ]

    return (
        <div>
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
                {
                    borrowedBooks.map(
                        singleBorrowedBook => <SingleBorrowedBookUserItem 
                            key={Math.floor(Math.random() * (1000000 - 1 + 1)) + 1} 
                            title={singleBorrowedBook.title} 
                            author={singleBorrowedBook.author} 
                            returnDate={singleBorrowedBook.returnDate} 
                            additionalFees={singleBorrowedBook.additionalFees} 
                        />)
                }
            </tbody>
        </table>
    </div>
  );
}