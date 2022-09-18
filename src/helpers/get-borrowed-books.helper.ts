import { BorrowedBookUserType } from 'types';
import { privateAxios } from './../api/axios';

export const getBorrowedBooks = async (): Promise<BorrowedBookUserType[] | undefined> => {
    try {
        const { data } = await privateAxios.get<BorrowedBookUserType []>('borrowed-books')
        return data
    } catch(e) {
        console.error(e)
    }
}