import customFetch from '../../utils/customFetch'
import { toast } from 'react-toastify'
import { redirect } from 'react-router-dom'

export const action =async ({params})=>{
    try {
        console.log("params",params.id);
        await customFetch.delete(`/books/${params.id}`)
        toast.success('Book Deleted Successfully')
    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.error?.msg)
    }
    return redirect("/dashboard/myProfile/all-books");
}
