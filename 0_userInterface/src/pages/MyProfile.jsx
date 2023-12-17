import React from 'react'
import SideNavbar from '../components/SideNavbar'
import { Outlet, useLoaderData } from 'react-router-dom'
import customFetch from '../../utils/customFetch'

export const loader = async () =>{
  try {
    const { data } = await customFetch.get("/user/current-user");
    // console.log('Data');
    return data
  } catch (error) {
    // console.log('Error loading data:',error);
    return null
  }
}

const MyProfile = () => {
  const {user} = useLoaderData();
  
  return (
    <>
    <div>
    <SideNavbar />
    <Outlet context={{user}}/>
    </div></>
  )
}

export default MyProfile