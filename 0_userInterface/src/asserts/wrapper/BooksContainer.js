import styled from "styled-components";

const Wrapper = styled.section`
  .addBooks_main {
   top: 13%;
   left: 20%;
    position: absolute;
    overflow: 5;

    width: 80%;
  }

  .books {
    display: grid;
    grid-template-columns: repeat(2, 0fr); /* Three columns with equal width */
    row-gap: 2rem;
    column-gap: 3rem;
  }
  .page-heading {
    margin-bottom: 1.3rem;
  }
`;

export default Wrapper;