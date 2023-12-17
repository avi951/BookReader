import React from 'react'
import { useAllBooksContext } from '../pages/AllBooks'
import Book from './Book.jsx';
import Wrapper from '../asserts/wrapper/BooksContainer.js';

const BooksContainer = () => {
    const {data} = useAllBooksContext();
    const {books,totalBooks,numOfPages} = data;
  // console.log(data);
  return (
    <Wrapper>
      <div className="addBooks_main">
        <h3 className="page-heading ">Books</h3>
        <div className="books">
          {books.map((book) => {
            return <Book key={book._id} {...book} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default BooksContainer