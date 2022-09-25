import { useEffect, useState } from "react";
import { BorrowerForStats, SingleBookItemDetailsForStats } from "src/interfaces";
import { BorrowedBookItemForStats } from "types";
import { BorrowersStatsSingleItem } from "./BorrowersStatsSingleItem";

interface BorrowersStatsProps {
    borrowersForStats: BorrowedBookItemForStats[];
}

export const BorrowersStats = (props: BorrowersStatsProps) => {

    const [borrowersForStats, setBorrowersForStats] = useState<BorrowerForStats[]>()
    const [borrowedBookOfSingleBorrower, setBorrowedBookOfSingleBorrower] = useState();

    const filterBorrowersDetailsForStats = (borrowersForStats : BorrowedBookItemForStats[]) => {

        let borrowersArr: BorrowerForStats[] = [];
        let borrowerItem: BorrowerForStats = {
            userId: '',
            fullName: '',
            email: '',
            numberOfBorrowed: 0,
            feesSum: 0
        }

        for(const borrower of borrowersForStats) {
            if(borrowersArr.filter(item => item.userId === borrower.userId).length === 0) {
                borrowerItem.userId = borrower.userId;
                borrowerItem.fullName = `${borrower.userFirstName} ${borrower.userLastName}`;
                borrowerItem.email = borrower.userEmail;
                borrowerItem.numberOfBorrowed = borrowersForStats.filter(item => item.userId === borrower.userId).length;
                borrowerItem.feesSum = borrower.userFeesTotal
    
                borrowersArr.push(borrowerItem)
    
                borrowerItem = {
                        userId: '',
                        fullName: '',
                        email: '',
                        numberOfBorrowed: 0,
                        feesSum: 0
                    }
            }
        }
        setBorrowersForStats(borrowersArr)
    }

    const filterBorrowedBookOfSingleBorrower = () => {
        
    }

    useEffect(() => {
        filterBorrowersDetailsForStats(props.borrowersForStats)
    },[])
    return (
        <>
            <table>
                <thead>
                    <th>
                        <td>Full name</td>
                    </th>
                    <th>
                        <td>Email</td>
                    </th>
                    <th>
                        <td>Number of borrowed books</td>
                    </th>
                    <th>
                        <td>Sum of fees</td>
                    </th>
                </thead>
                <tbody>
                    {
                        borrowersForStats?.map(borrower => 
                            <BorrowersStatsSingleItem 
                            key={borrower.userId}
                            userId={borrower.userId}
                            email={borrower.email}
                            fullName={borrower.fullName}
                            numberOfBorrowed={borrower.numberOfBorrowed}
                            feesSum={borrower.feesSum}
                        />
                        )
                    }
                </tbody>
            </table>
        </>
  );
}