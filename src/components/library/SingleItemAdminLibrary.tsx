import { useEffect, useState } from "react";
import { BookEdited } from "types";
import { usePrivateAxios } from "../../hooks/usePrivateAxios";

interface SingleItemLibraryProps {
    id: string;
    authorFirstName: string;
    authorLastName: string;
    title:string;
    releaseDate: string;
    numberOfAvailableBooks: number;
    setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>
}

export const SingleItemAdminLibrary = (props: SingleItemLibraryProps) => {

    const privateAxios = usePrivateAxios()
    const [editForm, setEditForm] = useState(false)
    const [bookDetails, setBookDetails] = useState<BookEdited>({
        authorFirstName: '',
        authorLastName: '',
        numberOfAvailable: 0,
        publishedOn: new Date(props.releaseDate),
        title: ''
    })

    const updateBookDetails = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): Promise<void> => {
        e.preventDefault();
        const value = e.target.value;
        setBookDetails({
            ...bookDetails,
            [e.target.name]: value
          });
    }

    const showEditForm = () => {
        setEditForm(!editForm)
    }

    const handleDelete = async (id: string) => {
        try{ 
            await privateAxios.delete(`book/${id}`)
            props.setIsLoaded(false)
        }catch(e) {console.error(e)}
    }

    const handleEditForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(bookDetails)

        try{ 
            const datte =  await privateAxios.patch(`book/${props.id}`, bookDetails)
            console.log(datte)
            props.setIsLoaded(false)
        }catch(e) {console.error(e)}
    }

    useEffect(() => {
        setBookDetails({
                authorFirstName: props.authorFirstName,
                authorLastName: props.authorLastName,
                numberOfAvailable: props.numberOfAvailableBooks,
                publishedOn: new Date(bookDetails.publishedOn) ,
                title: props.title
              });
              
    },[])

    return (
            <>
            <tr>
                <td>{props.title}</td>
                <td>{`${props.authorFirstName} ${props.authorLastName}`}</td>
                <td>{props.releaseDate}</td>
                <td>{props.numberOfAvailableBooks}</td>
                <td>
                    <button type="button" onClick={() => showEditForm()}>Edit</button>
                    <button type="button" onClick={() => handleDelete(props.id)}>Delete</button>
                </td>
            </tr>
            { editForm  && 
        
            <tr >
                <td colSpan={5} >
                    <form onSubmit={handleEditForm}>
                        <p>Title</p>
                        <input type="text" name="title" id="" value={bookDetails.title} onChange={updateBookDetails} />
                        <p>Author's first name</p>
                        <input type="text" name="authorFirstName" id="" value={bookDetails.authorFirstName} onChange={updateBookDetails} />
                        <p>Author's last name</p>
                        <input type="text" name="authorLastName" id="" value={bookDetails.authorLastName} onChange={updateBookDetails} />
                        <p>Release date</p>
                        <input type="date" name="publishedOn" id="" value={bookDetails.publishedOn.toLocaleDateString('en-CA')} onChange={updateBookDetails} />
                        <p>In Stock</p>
                        <input type="number" name="numberOfAvailable" id="" value={bookDetails.numberOfAvailable} onChange={updateBookDetails} />
                        <button type="submit">Update book</button> 
                    </form>
                </td>
            </tr>
            
            }
            </>
            
  );
}