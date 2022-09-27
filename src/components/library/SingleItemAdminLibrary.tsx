import { useEffect, useState } from "react";
import { BookEdited } from "types";
import { usePrivateAxios } from "../../hooks/usePrivateAxios";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./SingleItemAdminLibrary.css"

interface SingleItemLibraryProps {
    id: string;
    authorFirstName: string;
    authorLastName: string;
    title:string;
    releaseDate: string;
    numberOfAvailableBooks: number;
    setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
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
    const [isLoaded, setIsLoaded] = useState(false);

    const updateBookDetails = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): Promise<void> => {
        e.preventDefault();
        const value = e.target.value;
        setBookDetails({
            ...bookDetails,
            [e.target.name]: e.target.name !== "numberOfAvailable" ? value : Number(value)
          });
    }

    const showEditForm = (): void => {
        setEditForm(!editForm)
    }

    const handleDelete = async (id: string): Promise<void> => {
        try{ 
            await privateAxios.delete(`book/${id}`)
            props.setIsLoaded(false)
        }catch(e) {console.error(e)}
    }

    const handleEditForm = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        try{ 
            const date =  await privateAxios.patch(`book/${props.id}`, bookDetails)
            props.setIsLoaded(false)
            setIsLoaded(false)
        }catch(e) {console.error(e)}
    }

    useEffect(() => {
        setBookDetails({
                authorFirstName: props.authorFirstName,
                authorLastName: props.authorLastName,
                numberOfAvailable: props.numberOfAvailableBooks,
                publishedOn: new Date(props.releaseDate) ,
                title: props.title
            });
        setIsLoaded(true)
    },[isLoaded])

    return (
            <>
            {!isLoaded && 
                <tr>
                    <td colSpan={5}>
                        <p>loading...</p>
                    </td>
                </tr>
            }

            {isLoaded && 
                <tr>
                    <td>{props.title}</td>
                    <td>{`${props.authorFirstName} ${props.authorLastName}`}</td>
                    <td>{props.releaseDate}</td>
                    <td>{props.numberOfAvailableBooks}</td>
                    <td>
                        <button type="button" onClick={() => showEditForm()} className="book-btn">Edit</button>
                        <button type="button" onClick={() => handleDelete(props.id)} className="danger-btn">Delete</button>
                    </td>
                </tr>
            }

            { editForm && isLoaded &&
        
                <tr >
                    <td colSpan={5} >
                        <div className="edit-form-container">
                            <form onSubmit={handleEditForm} className="book-form-to-edit">
                                <p>Title</p>
                                <input type="text" name="title" id="" value={bookDetails.title} onChange={updateBookDetails} />
                                <p>Author's first name</p>
                                <input type="text" name="authorFirstName" id="" value={bookDetails.authorFirstName} onChange={updateBookDetails} />
                                <p>Author's last name</p>
                                <input type="text" name="authorLastName" id="" value={bookDetails.authorLastName} onChange={updateBookDetails} />
                                <p>Release date</p>
                                <DatePicker selected={bookDetails.publishedOn} onChange={(date) =>  {
                                        if(date === null)
                                            date = new Date()
                                        setBookDetails({...bookDetails, publishedOn: date})
                                    }} 
                                    dateFormat="dd/MM/yyyy"
                                    minDate={new Date("01/01/1900")}
                                    maxDate={new Date()}
                                    showMonthYearDropdown
                                    dropdownMode= "select"
                                    className="data-picker-input"
                                />
                                <p>In Stock</p>
                                <input type="number" name="numberOfAvailable" id="" min={1} value={bookDetails.numberOfAvailable} onChange={updateBookDetails} />
                                <button type="submit">Update book</button> 
                            </form>
                        </div>
                    </td>
                </tr>
            
            }
            
            </>
            
  );
}