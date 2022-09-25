import { BorrowerBorrowedBooksDetails } from './borrower-borrowed-book-details';
export interface BorrowerForStats {
    userId: string;
    fullName: string;
    email: string;
    numberOfBorrowed: number;
    feesSum: number;
    borrowedBooksDetails: BorrowerBorrowedBooksDetails[] | [];
}