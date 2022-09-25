import { useEffect, useState } from "react";
import { BorrowedBookItemForStats } from "types";
import { usePrivateAxios } from "../../../hooks/usePrivateAxios";
import { BorrowedBooksStats } from "./BorrowedBooksStats";
import { BorrowersStats } from "./BorrowersStats";

enum StatsSelection {
    BorrowedBooks = "Borrowed books",
    Borrowers = "Borrowers"
}

export const BorrowedBooksAdmin = () => {

    const privateAxios = usePrivateAxios()
    const [borrowedBooksForStats, setBorrowedBooksForStats] = useState<BorrowedBookItemForStats[]>()
    const [statsSelection, setStatsSelection] = useState<StatsSelection>()
    const [isLoaded, setIsLoaded] = useState(false);

    const getBorrowedBooksForStats = async (): Promise<void> =>{
        try {
            const { data } = await privateAxios.get<BorrowedBookItemForStats[]>("borrowed-books/stats")
            setBorrowedBooksForStats(data)
            setIsLoaded(true)
        } catch(e) {console.error(e)}
    }

    const handleStatsSelection = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        if(Object.values(StatsSelection).includes(event.currentTarget.value as StatsSelection))
            setStatsSelection(event.currentTarget.value as StatsSelection)
    }

    useEffect(() => {
        getBorrowedBooksForStats()
        setStatsSelection(StatsSelection.BorrowedBooks)
    },[])

    return (

        <>
            <form>
            `   <p>Select statistics</p>
                <input type="radio" value={StatsSelection.BorrowedBooks} checked={statsSelection === StatsSelection.BorrowedBooks} onChange={handleStatsSelection}/> {StatsSelection.BorrowedBooks}
                <input type="radio" value={StatsSelection.Borrowers} checked={statsSelection === StatsSelection.Borrowers} onChange={handleStatsSelection}/> {StatsSelection.Borrowers}
            </form>`
            
            {!isLoaded && <p>loading...</p>}

            {isLoaded && borrowedBooksForStats && statsSelection === StatsSelection.BorrowedBooks &&
                <BorrowedBooksStats booksForStats={borrowedBooksForStats}/>
            }

            {isLoaded && borrowedBooksForStats && statsSelection === StatsSelection.Borrowers &&
                <BorrowersStats borrowersForStats={borrowedBooksForStats}/>
            }
        </>
  );
}