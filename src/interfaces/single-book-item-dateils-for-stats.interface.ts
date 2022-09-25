export interface SingleBookItemDetailsForStats {
    bookId: string;
    author: string;
    title: string;
    numberOfBorrowed: number;
    numberOfAvailable: number;
    feesSum: number;
}