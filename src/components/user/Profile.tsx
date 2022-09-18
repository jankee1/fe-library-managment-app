import { useContext, useEffect, useState } from "react";
import { Button } from "../common/Button";
import { AuthContext } from "../../context/AuthProvider";

export const Profile = () => {

    const user = {
        firstName: "Test name",
        lastName: "Lastname test",
        email: "test@email.com",
        userSince: "2019",
        borrowedBooks: 5,
        feesTotal: 20
    }
    const {authUser} = useContext(AuthContext)
    const [firstName, setFirstName] = useState<string>()
    const [lastName, setLastName] = useState<string>()
    const [isLoaded, setIsLoaded] = useState(false);
    const [fees, setFees] = useState<number>()

    const updateProfile = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

    }

    const totalFees = async () => {

    }

    useEffect(() => {
        setFirstName(authUser?.firstName)
        setLastName(authUser?.lastName)
    },[])

    return (
        <div>
            {/* {!isLoaded && <p>loading...</p>} */}
            {
                <form onSubmit={updateProfile}>
                    <p>Firstname</p>
                    <input type="text" name="firstName" id="" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <p>Lastname</p>
                    <input type="text" name="lastName" id="" value={lastName} onChange={e => setLastName(e.target.value)} />
                    <p>Email</p>
                    <p>{authUser?.email}</p>
                    <p>Registration date</p>
                    <p>{authUser && new Date(authUser.createdAt).toDateString()}</p>
                    <p>Number of borrowed books</p>
                    <p>{authUser?.bookedBooks}</p>
                    <p>Total sum of fees</p>
                    <p>{user.feesTotal}</p>
                    <Button type="submit" text="Update profile" />
                </form>
            }

        </div>
  );
}