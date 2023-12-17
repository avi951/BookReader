import styled from "styled-components";

const Wrapper = styled.article`
  /* display: grid;
  grid-template-rows: 1fr auto; */
  /* .page-heading {
    margin-bottom: 1.3rem;
  }
  h2 {
    color: black;
  } */
  /* .addBooks_main {
    margin-left: 19%;
    margin-top: 2%;
    margin-right: 4rem;
    position: absolute;
    overflow: 5;
    width: 80%;
  } */
  /* .bookDetails {
    margin-top: 8%;
    margin-left: 20%;
  } */
  .outer-container {
    position: relative;
    width: 80px;
    height: 80px;
    background-color: orange;
  }
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 3rem;
    transform: translate(-50%, -50%);
  }

  .main-container {
    width: 500px;
    border: 2px solid black;
    padding: 2rem;
  }
  .info {
    /* border:1px solid black; */
    margin: 1rem 0rem;
  }

  .action {
    display: flex;
  }

  .deleteBtn {
    border-radius: var(--border-radius);
    letter-spacing: var(--letter-spacing);
    padding: 0.61rem 0.75rem;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    text-transform: capitalize;
    display: inline-block;
    cursor: pointer;
    color: var(--white);
    background: #222;
    border: none;
  }

  .deleteBtn:hover {
    cursor: pointer;
    color: var(--white);
    border: none;
    background: var(--primary-700);
  }
`;

export default Wrapper;
