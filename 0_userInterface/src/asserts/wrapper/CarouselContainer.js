import styled from "styled-components";

const Wrapper = styled.section`
  .explore-book-section-heading {
    margin: 4rem 0rem 4rem 0rem;
  }

  .carousel,
  .carousel-author {
    width: 100%;
    margin: 2rem 0rem;
    overflow: hidden;
  }
  .carousel-container {
    display: flex;
    animation: scroll 15s linear infinite;
  }

  .bookImage {
    width: 100%;
    min-width: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-width: 250px;
    max-height: 100%;
  }

  .bookImage p {
    flex-direction: column;
    font-size: 1.3rem;
    padding: 1rem;
    text-decoration: overline;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    /* 50%{
        transform: translate(-800px);
    }  */
    100% {
      transform: translateX(-100%);
    }
  }

  .carousel-container-author {
    display: flex;
    animation: scrollAuthor 15s linear infinite;
  }

  @keyframes scrollAuthor {
    0% {
      transform: translateX(-100%);
    }
    /* 50%{
        transform: translate(-800px);
    }  */
    100% {
      transform: translateX(0%);
    }
  }
`;

export default Wrapper;
