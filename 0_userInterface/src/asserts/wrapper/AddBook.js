import styled from "styled-components";

const Wrapper = styled.section`
  .page-heading {
    margin-bottom: 1.3rem;
  }
  h2 {
    color: black;
  }

  .parent {
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .child_7{
    grid-column-start: 1;
    grid-column-end: 3;
    /* background-color: red; */
  }
 
  .addBooks_main {
    margin-left: 19%;
    margin-top: 2%;
    margin-right: 4rem;
    padding-bottom: 3rem;
    position: absolute;
    overflow: 5;
    width: 80%;
  }

  .form {
    margin-right: 3%;
    margin: 4rem 0rem;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }

  .form-center {
    display: grid;
    row-gap: 1rem;
  }

  .input-field {
    margin: 0px 0px;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-select {
    width: 50%;
    padding: 0.375rem 0.75rem;
    border-radius: var(--border-radius);
    background: var(--background-color);
    border: 1px solid var(--grey-300);
    color: var(--text-color);
  }

  .form-label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    line-height: 1.5;
  }

  .btn-submit {
    margin-top: 1.3rem;
  }

  textarea {
    background: none;
    cursor: text;
    padding: 1rem;
    border: 1px solid black;
  }
`;

export default Wrapper;
