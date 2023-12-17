import styled from "styled-components";

const Wrapper = styled.div`
  .dropdown-toggle {
    width: 150px;
  }

  .dropdown-item {
    width: 150px;
  }
  .dropdown-menu {
  --bs-dropdown-min-width:9rem,
  }
  /* .dropdown-menu {
    color: black;
  } */

  a {
    color: black;
  }
  /* position: relative;
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 50px;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: var(--primary-500);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    border-radius: var(--border-radius);
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%; */
  /* height: 100%; */
  /* } */
`;

export default Wrapper;
