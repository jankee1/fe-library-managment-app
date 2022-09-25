import { useContext, useEffect, useState } from "react";
import { Button } from "../common/";
import { AuthContext } from "../../context/AuthProvider";
import { FullNameInterface } from "../../interfaces";
import { usePrivateAxios } from "../../hooks/usePrivateAxios";
import { LoginResponse } from "types";
import { SuccessMessage } from "../common/";

export const Profile = () => {

    const {authUser, setAuthUser} = useContext(AuthContext)
    const [fullName, setFullName] = useState<FullNameInterface>({
        firstName: '',
        lastName: '',
    })
    const [isFullNameChanged, setIsFullNameChanged] = useState(false)
    const privateAxios = usePrivateAxios()

    const updateProfile = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): Promise<void> => {
        e.preventDefault();
        const value = e.target.value;
        setFullName({
            ...fullName,
            [e.target.name]: value
          });
    }

    const handleProfileForm = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        // formRegisterValidation(register)
        try {
            await privateAxios.patch(`user/${authUser?.id}`, fullName)
            const user = {
                ...authUser,
                firstName: fullName.firstName,
                lastName: fullName.lastName,
            } as LoginResponse
            setAuthUser(user)
            setIsFullNameChanged(true)
        } catch(e) {console.error(e)}
      }

    useEffect(() => {
        if(authUser) {
            setFullName({
                firstName: authUser.firstName,
                lastName: authUser.lastName,
              });
        }
    },[])

    useEffect(() => {
        const timeId = setTimeout(() => {
            setIsFullNameChanged(false)
          }, 3000)
          return () => clearTimeout(timeId)
    }, [isFullNameChanged])

    return (
        <div>
            <form onSubmit={handleProfileForm}>
                <p>Firstname</p>
                <input type="text" name="firstName" id="" value={fullName.firstName} onChange={updateProfile}/>
                <p>Lastname</p>
                <input type="text" name="lastName" id="" value={fullName.lastName} onChange={updateProfile} />
                <p>Email</p>
                <p>{authUser?.email}</p>
                <p>Registration date</p>
                <p>{authUser && new Date(authUser.createdAt).toLocaleDateString()}</p>
                <p>Total sum of fees</p>
                <p>{authUser?.fees}</p>
                <Button type="submit" text="Update profile" />
                { isFullNameChanged && <SuccessMessage text="Your profile has been updated" /> }
            </form>
        </div>
  );
}