import React from "react";
import Wrapper from "../asserts/wrapper/AddBook.js";
import { Form, redirect, useNavigation } from "react-router-dom";
import FormRow from "../components/FormRow.jsx";
import FormRowSelect from "../components/FormRowSelect.jsx";
import { useOutletContext } from "react-router-dom";
import {
  BOOK_CATEGORIES,
  BOOK_SUBCATEGORIES,
} from "../../../utils/constant.js";
import SubmitBtn from "../components/SubmitBtn.jsx";
import customFetch from "../../utils/customFetch.js";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("bookImage");
  if (file && file.size > 500000) {
    toast.error("Image size is too large");
    return null;
  }
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/books", formData);
    console.log(data);
    toast.success("Book is successfully added...");
    return redirect("/dashboard/myProfile/all-books");
  } catch (error) {
    toast.error(error?.response?.data?.error[0]?.msg);
    return error;
  }
};


// const onSubmit= (e)=>{
//   e.preventDefault();
//   const formData = new FormData(e.currentTarget);
//   console.log([...formData.entries()]);
//   const data = Object.fromEntries(formData)
//   console.log(data);
//   try {
//      customFetch.post('/books',data);
//     toast.success("Bookds");
//   } catch (error) {
//     toast.error(error?.response?.data?.msg)
//     return error
//   }
// }

const AddBook = () => {
  const { user } = useOutletContext();
  console.log("user", user);



  return (
    <Wrapper>
      <div className="addBooks_main">
        <div className="form_addBook">
          <Form
            method="post"
            className="form"
            encType="multipart/form-data"
          >
            <h2 className="page-heading">Add Book</h2>
            <div className="form-center parent">
              <div className="child#1">
                <FormRow type="text" name="bookName" labelText="Book Name" />
              </div>
              <div className="child#2">
                <FormRow type="number" name="bookPage" labelText="Pages" />
              </div>
              <div className="child#3">
                <FormRow
                  type="text"
                  name="bookAuthor"
                  labelText="Book Author"
                />
              </div>
              <div className="child#4">
                <FormRow
                  type="text"
                  name="ISBNNumber"
                  labelText="ISBN Number"
                />
              </div>
              <div className="child#5">
                <FormRow
                  type="text"
                  name="publication"
                  labelText="Publication"
                />
              </div>
              <div className="child#6">
                <FormRow
                  type="text"
                  name="recommendedBy"
                  labelText="Recommended By"
                />
              </div>
              <div className="child_7">
                <FormRow type="text" name="link" labelText="Link" />
              </div>
              <div className="child#8">
                <FormRowSelect
                  type="text"
                  labelText="Book Categories"
                  name="bookCategory"
                  list={Object.values(BOOK_CATEGORIES)}
                ></FormRowSelect>
              </div>
              <div className="child#9">
                <FormRowSelect
                  type="text"
                  labelText="Book Sub-Categories"
                  name="bookSubCategory"
                  list={Object.values(BOOK_SUBCATEGORIES)}
                ></FormRowSelect>
              </div>
              {/* <button onSubmit={onSubmit}>Submit</button> */}
              {/* <div className="child" id="12">
                <FormRow
                  type="date"
                  id="date"
                  name="Start-Date"
                  labelText="Starting Date"
                ></FormRow>
              </div>
              <div className="child" id="13">
                <FormRow
                  type="date"
                  id="date"
                  name="Finish-Date"
                  labelText="Finishing Date"
                ></FormRow>
              </div> */}
              <div className="child#10">
                <FormRow
                  type="textarea"
                  name="bookDescription"
                  labelText="Book Description"
                />
              </div>
              <div className="child#11">
                <FormRow
                  type="file"
                  name="bookImage"
                  id="bookImage"
                  accept="/image/*"
                  // defaultValue="Choose File"
                  labelText="Book Image"
                ></FormRow>
              </div>
            </div>
            <SubmitBtn  />
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddBook;
