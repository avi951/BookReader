import React, { createContext, useContext } from "react";
import customFetch from "../../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import BooksContainer from '../components/BooksContainer.jsx';

export const loader = async ({ request }) => {
try {
  const {data} = await customFetch.get('/books')
  return {data}
} catch (error) {
  toast.error(error?.response?.data?.msg)
}
};
const AllBooksContext = createContext();

const AllBooks = () => {
  const {data} = useLoaderData();
  console.log(data);
  return (
    <AllBooksContext.Provider value={{ data }}>
      <BooksContainer />
    </AllBooksContext.Provider>
  );
};

export const useAllBooksContext = () => useContext(AllBooksContext);
export default AllBooks;
