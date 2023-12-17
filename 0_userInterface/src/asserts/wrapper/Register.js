import { styled } from "styled-components";

const Wrapper = styled.section`
  .regMain {
    /* background-color: black; */
    height: 100%;
    width: 100%;
  }

  .form-label{
    font-size: 1.4rem;
  }

  .regContainer {
    width: 70%;
    margin: 8% auto;
    height: 500px;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 2rem;
  }

  .regContainer div {
    /* align-items: center; */
    margin: 0 auto;
    /* background-color: aliceblue; */
    width: inherit;
  }
  .regText {
    font-size: 1.2rem;
  }
  .illustration {
    font-size: 1.2rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  /* Style for the input element */
  .input-container {
    position: relative;
    margin: 20px;
  }

  /* Style for the input field */
  .input-field {
    border: none;
    background: none;
    border-bottom: 1px solid;
    width: 300px;
    padding: 10px;
    margin: 1rem;
    font-size: 16px;
    outline: none; /* Remove the default input field focus outline */
  }

  /* Style for the placeholder text */
  .input-field::placeholder {
    color: #888; /* Placeholder text color */
    font-style: italic; /* Italic font style */
    font-size: 14px; /* Adjust the font size */
  }

  /* Style for the placeholder text when the input is focused */
  .input-field:focus::placeholder {
    color: transparent; /* Make the placeholder text transparent when focused */
  }

  span::after {
  padding-left: 5px;
}

input:invalid + span::after {
  content: "✖";
}

input:valid + span::after {
  content: "✓";
}

  /* Style for a label to give additional context to the input */
`;

export default Wrapper;
