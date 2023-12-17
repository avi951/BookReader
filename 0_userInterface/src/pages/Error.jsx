import React from 'react'
import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  if(error.status === 404){
    return <>
    <div>
      <h3>Oh! Page is not found</h3></div></>
  }
  return (
    <div>Something is wrong</div>
  )
}

export default Error