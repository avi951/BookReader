import styled from "styled-components";

const Wrapper = styled.section`
  .main_bg {
    position: relative;
    width: 100%;
  }
  .bg {
    width: 100%;
    margin-top: -13rem;
    height: auto;
  }
  .text-border {
    /* border: 1px solid white; */
    top: 30%;
    position: absolute;
    transform: translate(-50%, -30%);
    left: 50%;
    width: 75%;
    /* padding: 3rem; */
    height: 325px;
  }
 
  .main_headline {
    top: 25%;
    left: 50%;
    transform: translate(-50%, -30%);
    text-align: center;
    font-size: 3rem;
    position: absolute;
    width: 70%;
    line-height:4.2rem;
    color: white;
  }
  .main_subText {
    top: 70%;
    left: 50%;
    transform: translate(-50%, -30%);
    text-align: center;
    width: 1000px;
    font-size: 1.2rem;
    position: absolute;
    color: white;
  }
`;

export default Wrapper;
