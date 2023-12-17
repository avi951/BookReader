import styled from "styled-components";

const Wrapper = styled.aside`
  .sideNavBar_main {
    /* height: max-content;  */
    /* height: 130%; 
    position: absolute;
    padding-top: -4rem; */
    height: 100%;
    padding-top: 10%;
    z-index: -1;
    position: fixed;    
    width: 16%;
    background-color: #222;
  }

  .nav-link {
    color: white;
    margin: 2rem 0rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .pending {
    background: none;
  }

  .icon {
    font-size: 1.6rem;
    padding-right: 1.4rem;
  }
`;
export default Wrapper;
