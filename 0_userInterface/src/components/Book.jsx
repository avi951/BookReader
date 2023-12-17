import React from "react";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import Wrapper from "../asserts/wrapper/Book";
import Button from "react-bootstrap/esm/Button";
import { Form, Link } from "react-router-dom";

day.extend(advancedFormat);

const Book = ({
  _id,
  bookName,
  bookPage,
  bookAuthor,
  bookDescription,
  publication,
  ISBNNumber,
  bookCategory,
  bookSubCategory,
  bookImage,
  createdAt,
}) => {
  const data = day(createdAt).format("MMM Do, YYYY");
  return (
    <Wrapper>
      <div className="main-container">
        <div className="outer-container">
          <div className="center">
            <p className="bookAuthor">
              {bookAuthor ? bookAuthor.charAt(0) : "X"}
            </p>
          </div>
        </div>
        <div className="info">
          <h4 className="bookName">{bookName}</h4>
          <h5 className="bookPage">{bookPage}</h5>
          <p className="bookDesciption">{bookDescription}</p>
          <h4>{bookCategory}</h4>
          <h4>{bookSubCategory}</h4>
          <h4>{ISBNNumber}</h4>
          <h4>{publication}</h4>
          <img src={bookImage}></img>
        </div>
        <div className="action">
          <Link to={`../edit-book/${_id}`}>
            <Button
              variant="dark"
              style={{ border: "none", marginRight: "1rem" }}
            >
              Edit
            </Button>
          </Link>

          <Form method="post" action={`../delete-book/${_id}`}>
            {" "}
            <button className="deleteBtn" >
              Delete
            </button>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Book;
