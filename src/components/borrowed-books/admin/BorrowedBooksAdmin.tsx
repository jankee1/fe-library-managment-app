import { useEffect, useState } from "react";
import { BorrowedBookItemForStats } from "types";
import { usePrivateAxios } from "../../../hooks/usePrivateAxios";
import { BorrowedBooksStats } from "./BorrowedBooksStats";

enum StatsSelection {
    Books = "Borrowed books",
    Users = "Borrowers"
}

export const BorrowedBooksAdmin = () => {

    const privateAxios = usePrivateAxios()
    const [borrowedBooksForStats, setBorrowedBooksForStats] = useState<BorrowedBookItemForStats[]>()
    const [statsSelection, setStatsSelection] = useState<StatsSelection>()
    const [isLoaded, setIsLoaded] = useState(false);

    const getBorrowedBooksForStats = async () =>{
        try {
            const { data } = await privateAxios.get<BorrowedBookItemForStats[]>("borrowed-books/stats")
            setBorrowedBooksForStats(data)
            setIsLoaded(true)
        } catch(e) {console.error(e)}
    }

    const handleStatsSelection = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if(Object.values(StatsSelection).includes(event.currentTarget.value as StatsSelection))
            setStatsSelection(event.currentTarget.value as StatsSelection)

    }

    useEffect(() => {
        getBorrowedBooksForStats()
    },[])

    return (

        <>
            <form>
            `   <p>Select statistics</p>
                <input type="radio" value={StatsSelection.Books} checked={statsSelection === StatsSelection.Books} onChange={handleStatsSelection}/> {StatsSelection.Books}
                <input type="radio" value={StatsSelection.Users} checked={statsSelection === StatsSelection.Users} onChange={handleStatsSelection}/> {StatsSelection.Users}
            </form>`
            
            {!isLoaded && <p>loading...</p>}

            {isLoaded && borrowedBooksForStats && statsSelection === StatsSelection.Books &&

                <BorrowedBooksStats booksForStats={borrowedBooksForStats}/>
            }
        </>
  );
}