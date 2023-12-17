import styled from "styled-components";

const Wrapper = styled.section`
  .main_bg {
    position: relative;
    width: 100%;
  }
  .bg {
    width: 100%;
    overflow-x: -1;
    /* margin-top: -5rem; */
    /* display: block; */
    height: auto;
  }
  .main_headline {
    top: 53%;
    left: 50%;
    transform: translate(-50%, -30%);
    text-align: center;
    font-size: 3rem;
    position: absolute;
    color: black;
  }
  .main_headline_text {
    top: 64%;
    left: 50%;
    transform: translate(-50%, -30%);
    position: absolute;
    font-size: 1.3rem;
  }
  .main_headline_btn {
    transform: translate(-50%, -30%);
    position: absolute;
    top: 70%;
    left: 50%;
    border: 0px;
  }
 
  a{
    color: white;
  }
 
`;
export default Wrapper